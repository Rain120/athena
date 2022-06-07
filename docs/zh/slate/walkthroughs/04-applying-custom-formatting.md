# 应用自定义样式

在之前的指南中我们学习了怎么创建一个自定义 block （块）类型，以在不同的容器中呈现文本块。但是 Slate 支持自定义的不仅仅是 "blocks"（块）。

在这篇指南中，我们会向你展示如何添加自定义格式选项，如**粗体**, *斜体*, `代码` 或者 ~~删除线~~。

让我们从之前的 app 开始吧：

```jsx
const renderElement = props => {
  switch (props.element.type) {
    case 'code':
      return <CodeElement {...props} />
    default:
      return <DefaultElement {...props} />
  }
}

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={event => {
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault()
            const [match] = Editor.nodes(editor, {
              match: n => n.type === 'code',
            })
            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: n => Editor.isBlock(editor, n) }
            )
          }
        }}
      />
    </Slate>
  )
}
```

现在，我们编辑 `onKeyDown` 处理程序，当你按下 <kbd>ctrl - B</kbd> 时，它会添加一个**粗体**格式到你所选择的文本上:

```jsx
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return
          }

          switch (event.key) {
            // 当按下 "`" 时，保留我们代码块现有的逻辑
            case '`': {
              event.preventDefault()
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              })
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
              break
            }

            // 当按下 "B" 时，加粗所选择的文本
            case 'b': {
              event.preventDefault()
              Transforms.setNodes(
                editor,
                { bold: true },
                // 应用到文本节点上，
                // 如果所选内容仅为文本节点的一部分，则将其拆分。
                { match: n => Text.isText(n), split: true }
              )
              break
            }
          }
        }}
      />
    </Slate>
  )
}
```

非常棒，我们设置好了这个按键处理程序。但是！如果你已经尝试选择文本并按下 <kbd>ctrl - B</kbd>，你并不会看到任何的变化。这是因为我们还没有告诉 Slate 如何渲染 `bold` 标记。

对于你添加的每种格式，Slate 都会将文本分解为 "leaves" （叶子），然后你需要告诉 Slate 如何去理解它，就像是对待元素那样。所以让我们来定义一个 `Leaf` 组件：

```jsx
// 定义 React 组件渲染带有粗体文本的叶子。
const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}
```

看起来很熟悉，对吗？

接下来，让我们告诉 Slate 这个叶子。为了做到这点，我们会传递 `renderLeaf` prop 到编辑器。

```jsx
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  // 定义一个叶子渲染函数， 使用 `useCallback` 记住。
  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        // 传入 `renderLeaf` 函数。
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return
          }

          switch (event.key) {
            case '`': {
              event.preventDefault()
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              })
              Transforms.setNodes(
                editor,
                { type: match ? null : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
              break
            }

            case 'b': {
              event.preventDefault()
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: n => Text.isText(n), split: true }
              )
              break
            }
          }
        }}
      />
    </Slate>
  )
}

const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}
```

现在，如果你尝试选择一段文本并按下 <kbd>ctrl - B</kbd>，你会看到它变成了粗体！再一次让人惊叹！
