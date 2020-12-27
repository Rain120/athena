# 节点(Node)

The `Node` union type represents all of the different types of nodes that occur in a Slate document tree.

`Node` 的联合类型表示出现在 `Slate` 文档树中的所有不同类型的节点。

```typescript
type Node = Editor | Element | Text;

type Descendant = Element | Text;
type Ancestor = Editor | Element;
```

## 静态方法

#### `Node.ancestor(root: Node, path: Path): Ancestor`

Get the node at a specific `path`, asserting that it is an ancestor node. If the specified node is not an ancestor node, throw an error.

获取特定路径 `(Path)` 上的节点，并断言它是祖先节点。如果指定的节点不是祖先节点，则抛出错误。

#### `Node.ancestors(root: Node, path: Path, options?): Generator<NodeEntry<Ancestor>>`

Return a generator of all the ancestor nodes above a specific path. By default, the order is bottom-up, from lowest to highest ancestor in the tree, but you can pass the `reverse: true` option to go top-down.

返回特定路径上所有祖先节点的生成器。默认情况下，顺序是**自下而上**的，从树中最低的祖先到最高的祖先，但是您可以传递 `reverse: true` 配置来让它实现自上而下的操作。

参数列表:

```ts
{
	reverse?: boolean
}
```

#### `Node.child(root: Node, index: number): Descendant`

Get the child of a node at the specified `index`.

获取指定 **索引(index)** 处的节点的子节点

#### `Node.children(root: Node, path: Path, options?): Generator<NodeEntry<Descendant>>`

Iterate over the children of a node at a specific path.

遍历特定路径上节点的子节点。

参数列表:

```ts
{
	reverse?: boolean
}
```

#### `Node.common(root: Node, path: Path, another: Path): NodeEntry`

Get an entry for the common ancestor node of two paths.

获取两条路径的公共祖先节点的条目

#### `Node.descendant(root: Node, path: Path): Descendant`

Get the node at a specific path, asserting that it's a descendant node.

获取特定路径上的节点，并断言它是一个后代节点。

#### `Node.descendants(root: Node, options?): Generator<NodeEntry<Descendant>>`

Return a generator of all the descendant node entries inside a root node. Each iteration will return a `NodeEntry` tuple consisting of `[Node, Path]`.

返回根节点内所有后代节点条目的生成器。 每次迭代将返回一个由 `[Node，Path]` 组成的 `NodeEntry` 元组。

参数列表:

```ts
{
	from?: Path,
	to?: Path,
	reverse?: boolean,
	pass?: (node: NodeEntry => boolean)
}
```

#### `Node.elements(root: Node, options?): Generator<ElementEntry>`

Return a generator of all the element nodes inside a root node. Each iteration will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the root node is an element, it will be included in the iteration as well.

返回根节点内所有元素节点的生成器。 每次迭代将返回一个由 `[Element，Path]` 组成的 `ElementEntry` 元组。 如果根节点是一个元素，则它也将包含在迭代中。

参数列表:

```ts
{
	from?: Path,
	to?: Path,
	reverse?: boolean,
	pass?: (node: NodeEntry => boolean)
}
```

#### `Node.first(root: Node, path: Path): NodeEntry`

Get the first node entry in a root node from a `path`.

从路径获取根节点中的第一个节点条目。

#### `Node.fragment(root: Node, range: Range): Descendant[]`

Get the sliced fragment represented by the `range`.

获取范围表示的切片片段。

#### `Node.get(root: Node, path: Path): Node`

Get the descendant node referred to by a specific `path`. If the path is an empty array, get the root node itself.

获取特定路径引用的后代节点。 如果路径是空数组，请获取根节点本身。

#### `Node.has(root: Node, path: Path): boolean`

Check if a descendant node exists at a specific `path`.

检查特定路径上是否存在子代节点。

#### `Node.isNode(value: any): value is Node`

Check if a `value` implements the `Node` interface.

是否是`Node` 对象。

#### `Node.isNodeList(value: any): value is Node[]`

Check if a `value` is a list of `Node` objects.

是否是`Node`对象的列表。

#### `Node.last(root: Node, path: Path): NodeEntry`

Get the last node entry in a root node at a specific `path`.

获取根节点中特定路径下的最后一个节点。

#### `Node.leaf(root: Node, path: Path): Text`

Get the node at a specific `path`, ensuring it's a leaf text node. If the node is not a leaf text node, throw an error.

获取特定路径上的节点，确保它是一个叶文本节点。如果节点不是叶文本节点，则抛出错误。

#### `Node.levels(root: Node, path: Path, options?): Generator<NodeEntry>`

Return a generator of the nodes in a branch of the tree, from a specific `path`. By default, the order is top-down, from the lowest to the highest node in the tree, but you can pass the `reverse: true` option to go bottom-up.

从特定路径返回树的一个分支中的节点的生成器。默认情况下，顺序是自顶向下的，从树中的最低节点到最高节点，但是您可以传递 `reverse: true` 配置来让它实现自底向上的操作。

参数列表:

```ts
{
	reverse?: boolean
}
```

#### `Node.matches(root: Node, props: Partial<Node>): boolean`

Check if a node matches a set of `props`.

检查一个节点是否匹配 `props` 集合。

#### `Node.nodes(root: Node, options?): Generator<NodeEntry>`

Return a generator of all the node entries of a root node. Each entry is returned as a `[Node, Path]` tuple, with the path referring to the node's position inside the root node.

返回一个根节点的所有节点入口的生成器。每个指向根节点中节点的位置的路径都会返回 `[Node, Path]` 数组类型。

参数列表:

```ts
{
	from?: Path,
	to?: Path,
	reverse?: boolean,
	pass?: (node: NodeEntry => boolean)
}
```

#### `Node.parent(root: Node, path: Path): Ancestor`

Get the parent of a node at a specific `path`.

获取特定路径上节点的父节点。

#### `Node.string(root: Node): string`

Get the concatenated text string of a node's content. Note that this will not include spaces or line breaks between block nodes. This is not intended as a user-facing string, but as a string for performing offset-related computations for a node.

获取节点内容的连接文本字符串。注意，这将不包括块节点之间的空格或换行符。它不是用户使用的字符串，而是用于执行与偏移量相关的节点计算的字符串。

#### `Node.texts(root: Node, options?): Generator<NodeEntry<Text>>`

Return a generator of all leaf text nodes in a root node.

返回根节点中所有叶子文本节点的生成器。

参数列表:

```ts
{
	from?: Path,
	to?: Path,
	reverse?: boolean,
	pass?: (node: NodeEntry => boolean)
}
```

## Editor

The `Editor` object stores all the state of a slate editor. It can be extended by plugins to add helpers and implement new behaviors.

`Editor` 对象存储 `Slate` 的所有状态。你可以通过插件扩展来添加辅助函数和实现新的行为。

```typescript
interface Editor {
    children: Node[];
    selection: Range | null;
    operations: Operation[];
    marks: Record<string, any> | null;
    [key: string]: unknown;

    // Schema-specific node behaviors.
    isInline: (element: Element) => boolean;
    isVoid: (element: Element) => boolean;
    normalizeNode: (entry: NodeEntry) => void;
    onChange: () => void;

    // Overrideable core actions.
    addMark: (key: string, value: any) => void;
    apply: (operation: Operation) => void;
    deleteBackward: (unit: 'character' | 'word' | 'line' | 'block') => void;
    deleteForward: (unit: 'character' | 'word' | 'line' | 'block') => void;
    deleteFragment: () => void;
    insertBreak: () => void;
    insertFragment: (fragment: Node[]) => void;
    insertNode: (node: Node) => void;
    insertText: (text: string) => void;
    removeMark: (key: string) => void;
}
```

### 实例方法(Instance methods)

#### 特定架构操作(Schema-specific actions)

**译者 📒**:  [Here](../note/selection-range.md#选区-selection) 有关于选择`(selection)`的一些个人学习总结，欢迎一起讨论。

#### `isInline(element: Element)`

Check if a value is an inline `Element` object.

检查 `value` 是否为内联 `Element` 对象。

#### `isVoid(element: Element)`

Check if a value is a void `Element` object.

检查 `value` 是否为空 `Element` 对象。

#### `normalizeNode(entry: NodeEntry)`

Normalize a Node according to the schema.

根据 `schema` 对节点 `(Node)` 进行规范化。

#### `onChange()`

#### 核心操作(Core actions)

#### `addMark(key: string, value: any)`

Add a custom property to the leaf text nodes in the current selection. If the selection is currently collapsed, the marks will be added to the `editor.marks` property instead, and applied when text is inserted next.

将自定义属性添加到`(selection)`中的叶文本节点。 如果选择当前处于折叠状态，则标记将改为添加到 `editor.marks` 属性上，并在下一次插入文本时应用。

#### `removeMark(key: string)`

Remove a custom property from the leaf text nodes in the current selection.

从`(selection)`的叶子文本节点中**删除自定义属性**。

#### `deleteBackward(options?: {unit?: 'character' | 'word' | 'line' | 'block'})`

Delete content in the editor backward from the current selection.

从`(selection)`中 **向后** 删除 `editor` 中的内容。

#### `deleteForward(options?: {unit?: 'character' | 'word' | 'line' | 'block'})`

Delete content in the editor forward from the current selection.

从`(selection)`中 **向前** 删除 `editor` 中的内容。

#### `insertFragment(fragment: Node[])`

Insert a fragment at the current selection. If the selection is currently expanded, delete it first.

在`(selection)`的地方插入一个片段。 如果`(selection)`的已展开，请首先将其删除。

#### `deleteFragment()`

Delete the content of the current selection.

删除`(selection)`的内容。

#### `insertBreak()`

Insert a block break at the current selection. If the selection is currently expanded, delete it first.

在`(selection)`处插入一个换行符。 如果`(selection)`的已展开，请首先将其删除。

#### `insertNode(node: Node)`

Insert a node at the current selection. If the selection is currently expanded, delete it first.

在`(selection)`处插入一个节点。如果`(selection)`的已展开，请首先将其删除。

#### `insertText(text: string)`

Insert text at the current selection. If the selection is currently expanded, delete it first.

在`(selection)`处插入一个文本节点。如果`(selection)`的已展开，请首先将其删除。

#### `apply(operation: Operation)`

Apply an operation in the editor.

在 `editor` 中应用一个`op`操作。

## 元素(Element)

`Element` objects are a type of node in a Slate document that contain other `Element` nodes or `Text` nodes. They can be either "blocks" or "inlines" depending on the Slate editor's configuration.

`Element` 对象是 `Slate` 文档中包含其他 `Element` 节点或 `Text` 节点的一种类型。 根据 `Slate` 的配置，它们可以是“块(`block`)”或“内联(`inline`)”。

```typescript
interface Element {
    children: Node[];
    [key: string]: unknown;
}
```

### Static methods

#### `Element.isElement(value: any): value is Element`

Check if a `value` implements the `Element` interface.

检查一个 `value` 是否是 `Element`。

#### `Element.isElementList(value: any): value is Element[]`

Check if a `value` is an array of `Element` objects.

检查一个 `value` 是否是 `Element` 数组。

#### `Element.matches(element: Element, props: Partial<Element>): boolean`

Check if an element matches a set of `props`. Note: This checks custom properties, but it does not ensure that any children are equivalent.

检查元素`(Element)`是否匹配 `props` 集合。 注意：这会检查自定义属性，但不能确保任何子级都相等。

## 文本(Text)

`Text` objects represent the nodes that contain the actual text content of a Slate document along with any formatting properties. They are always leaf nodes in the document tree as they cannot contain any children.

`Text` 对象表示包含 `Slate` 文档的实际文本内容以及任何格式设置属性的节点。 它们始终是文档树中的叶节点，因为它们不能包含任何子节点。

```typescript
interface Text {
    text: string;
    [key: string]: unknown;
}
```

### Static methods

#### `Text.equals(text: Text, another: Text, options?): boolean`

Check if two text nodes are equal.

检查两个 `Text` 节点是否相等。

参数列表:

```ts
{
	loose?: boolean
}
```

#### `Text.isText(value: any): value is Text`

Check if a `value` implements the `Text` interface.

检查一个 `value` 是否是 `Text`。

#### `Text.matches(text: Text, props: Partial<Text>): boolean`

Check if a `text` matches a set of `props`.

检查文本 `(Text)` 是否匹配 `props` 集合。

#### `Text.decorations(node: Text, decorations: Range[]): Text[]`

Get the leaves for a text node, given `decorations`.

用 `decorations` 获取到的文本 `(Text)` 节点的叶子节点。
