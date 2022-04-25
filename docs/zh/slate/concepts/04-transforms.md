# 变换(Transforms)

slate的数据结构是不可变的(immutable)的,所以你不能直接修改或者删除节点. 但是, slate提供了一系列叫做"变换(transform)"的函数使你能够修改编辑器的值

为了能表示所有你可能需要对编辑器进行的修改, slate的transform 函数被设计得十分灵活. 然而, 这种灵活性可能使你在一开始的时候很难去理解.

通常情况下, 你会对若干节点执行同一个操作. 例如, 通过对每个block element的父节点执行 `unwrapNodes` 来扁平化语法树
```typescript
Transforms.unwrapNodes(editor, {
  at: [], // Path of Editor
  match: node =>
    !Editor.isEditor(node) &&
    node.children?.every(child => Editor.isBlock(editor, child)),
  mode: 'all', // also the Editor's children
})
```
对于非标准操作(以及需要debug或trace哪些节点会被一组NodeOptions影响)可能需要使用 `Editor.nodes` 来创建一个NodeEntries的javascript 迭代器和一个用于执行迭代器的for..of循环, 比如说, 将所有图像节点替换为他们对应的alt text
```typescript
const imageElmnts = Editor.nodes(editor, {
  at: [], // Path of Editor
  match: (node, path) => 'image' === node.type,
  // mode defaults to "all", so this also searches the Editor's children
})
for (const nodeEntry of imageElmnts) {
  const altText =
    nodeEntry[0].alt ||
    nodeEntry[0].title ||
    /\/([^/]+)$/.exec(nodeEntry[0].url)?.[1] ||
    '☹︎'
  Transforms.select(editor, nodeEntry[1])
  Editor.insertFragment(editor, [{ text: altText }])
}
```
> 🤖 查看[Transforms](../api/transforms.md)获取slate的transforms的完整参考资料

## 选区变换(Selection Transforms)

关于选区(selection)的变换(transforms)方法则更加简单. 比如说, 将选区设置为一个新的范围(range)
```typescript
Transforms.select(editor, {
  anchor: { path: [0, 0], offset: 0 },
  focus: { path: [1, 0], offset: 2 },
})
```
但同时他们也可以变得更为复杂

比如说, 将光标往前或者往后移动几个字母, 几个单词或者几行是一个常见的需求. 下面展示了如何将光标完后移动三个单词
```typescript
Transforms.move(editor, {
  distance: 3,
  unit: 'word',
  reverse: true,
})
```
> 🤖 查看[Selection Transforms API Reference](../api/transforms.md#选区转换selection-transforms)获取更多信息

## 文本变换(Text Transforms)

Text transforms对编辑器的文本内容进行操作, 比如向特定的point插入一段文本
```typescript
Transforms.insertText(editor, 'some words', {
  at: { path: [0, 0], offset: 3 },
})
```
你也可以删除整个范围(range)中的所有内容
```typescript
Transforms.delete(editor, {
  at: {
    anchor: { path: [0, 0], offset: 0 },
    focus: { path: [1, 0], offset: 2 },
  },
})
```
> 🤖 查看[Text Transforms API Reference](../api/transforms.md#文本转换text-transforms)获取更多信息

## 节点变换(Node Transforms)

节点变换(Node transforms)对单个element node或者text node进行操作. 
比如在特定的路径(path)插入一个text node
```typescript
Transforms.insertNodes(
  editor,
  {
    text: 'A new string of text.',
  },
  {
    at: [0, 1],
  }
)
```
又比如把一些node从一个path移动到另一个path
```typescript
Transforms.moveNodes(editor, {
  at: [0, 0],
  to: [0, 1],
})
```
> 🤖 查看[Node Transforms API Reference](../api/transforms.md#节点转换node-transforms)获取更多信息

##  `at` 选项(The `at` Option)
很多transforms操作会在文档的特定位置进行. 默认情况下, 他们会对用户的当前选区(selection)进行操作, 但是, 这个默认值是可以使用 `at` 选项进行覆盖的

比如说, 下面的方法会在用户当前光标所在位置插入一段文本
```typescript
Transforms.insertText(editor, 'some words')
```
然而, 修改成下面这样就可以在特定的位置插入了
```typescript
Transforms.insertText(editor, 'some words', {
  at: { path: [0, 0], offset: 3 },
})
```
`at` 选项的用途非常广泛, 可以用它很方便的实现一些复杂的transforms, 由于 `at` 选项传入的值是一个 `Location(位置)`, 包括 `Path`, `Point` 或者 `Range`, 且每种类型的location会导致稍有不同的transformations
比如说, 在下面这个插入文本的例子中, 如果你设定一个 `Range` 类型的位置, 这个range最开始会被删除, collapse为一个point, 你的文本会插入在这个point所在的位置

所以, 如果想要将 range所包含的文本替换成新的文本你可以这样做
```typescript
Transforms.insertText(editor, 'some words', {
  at: {
    anchor: { path: [0, 0], offset: 0 },
    focus: { path: [0, 0], offset: 3 },
  },
})
```
如果你设置一个Path类型的location, 方法所作用的范围会扩展到该path对应的整个node, 然后, 使用基于range的方法会删除node的所有内容, 并替代为你想要插入的文本

所以如果想要将node的所有内容替换为一个新的字符串你可以
```typescript
Transforms.insertText(editor, 'some words', {
  at: [0, 0],
})
```
凭借 `at` 选项, 这些基于location的操作对所有的transforms都能产生作用. 这可能最开始让你难以理解, 但正是它使得这个API强大且能够表达许许多多有细微差别的transforms

## `match` 选项(The `match` Option)
很多基于node的transforms会使用 `match` 选项, 这给选项使得transforms只会作用于match选项处的函数返回值为 `true` 的节点. 当我们将 `at` 和 `match` 选项结合起来使用的时候竟会非常强大

比如说, 下面是一个基础的transform方法, 用于将一个node从一个path移动到另一个path
```typescript
Transforms.moveNodes(editor, {
  at: [2],
  to: [5],
})
```
尽管它看上去只是简单的从一个path移动到另一个path, 背后其实发生了两件事...

第一步, `at` 选项会拓展为一个包含 `[2]` 位置所在的整个node的range
```typescript
at: {
  anchor: { path: [2, 0], offset: 0 },
  focus: { path: [2, 2], offset: 19 }
}
```
第二步, `match` 选项默认情况下是一个只会匹配特定path的函数(matcher), 在这个例子中匹配的结果就是 `[2]` ;
```typescript
match: (node, path) => Path.equals(path, [2])
```
然后slate会在 at 拓展后的range上迭代并把任意通过了match函数(matcher)的节点移动到新的位置. 在这个例子中, 由于match默认情况下只会精确的匹配 path 为 [2] 的, 因此将移动该节点

但如果你想要移动 [2] 对应的子节点呢?

你可能会考虑遍历子节点并且把一次移动一个, 但这会让问题变得非常复杂因为当你移动节点的时候你引用的path会过时

相反, 你可以充分利用 `at` 和 `match` 选项的优势来匹配所有的children
```typescript
Transforms.moveNodes(editor, {
  // This will again be expanded to a range of the entire node at `[2]`.
  at: [2],
  // Matches nodes with a longer path, which are the children.
  match: (node, path) => path.length === 2,
  to: [5],
})
```
在这里, 我们使用了相同的 `at` path(已经扩展为range了), 但是除了让他匹配默认的path, 我们提供了我们自己的match函数使得transform只对子节点起作用

使用 `match` 可以让复杂的逻辑变得简单

比如说, 想要给不是italic的text添加bold
```typescript
Transform.setNodes(
  editor,
  { bold: true },
  {
    // This path references the editor, and is expanded to a range that
    // will encompass all the content of the editor.
    at: [],
    // This only matches text nodes that are not already italic.
    match: (node, path) => Text.isText(node) && node.italic !== true,
  }
)
```
当我们执行transforms的时候, 如果你曾经遍历节点并一个个对他们进行transform操作, 考虑试试match, 看看能不能解决你的情况, 并把操作循环时的复杂对转嫁给Slate.  `match` 函数会用node.children检查node的children, 或者使用Node.parent来检查他们的parent

### Transforms and Normalization
如果节点树(node tree)*不*应该在transform操作之间被normalized(标准化), 一系列的transforms操作需要被包裹在 [Editor.withoutNormalizing](https://docs.slatejs.org/api/nodes/editor#editorwithoutnormalizingeditor-editor-fn---void--void) 中. 参见 [Normalization - Implications for Other Code](https://docs.slatejs.org/concepts/11-normalizing#implications-for-other-code)

