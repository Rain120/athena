# 使用命令

到目前为止，我们所学习的内容都是在编写为特定的 `Slate` 编辑器定制的一次性业务逻辑。不过，`Slate` 最强大的地方之一在于它的插件系统，它能够让你少些写这样的一次性业务代码。

在之前的指南中我们已经编写了一些有用的代码用来处理代码块和加粗格式。我们使用 `onKeyDown` 事件处理函数来调用这些代码。但是我们总是直接使用 `Editor` 内置的帮助器（helpers）来完成它们，而不是使用命令 (`commands`)。

`Slate`允许您扩展内置 `Editor` 对象以处理您自己的自定义富文本命令。你甚至可以使用预先打包的插件(`plugins`) 来添加一组给定的功能。

让我们看看如何编写吧。

我们还是从之前的应用程序继续:

```jsx
const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable
        renderElement={renderElement}
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
```

它已经有了**代码块**和**加粗格式**的概念。但是这些都是在 `onKeyDown` 事件处理程序中一次性定义的。如果你想要在其他地方重用这些逻辑，你需要把它们提取出来。

我们可以通过创建自定义的帮助函数来实现这些特定于域的概念：

```jsx
// Define our own custom set of helpers.
const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(editor, n) }
    )
  },
}

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return
          }

          // 使用我们新编写的命令来替代 onKeyDown 中的逻辑
          switch (event.key) {
            case '`': {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
              break
            }

            case 'b': {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }
          }
        }}
      />
    </Slate>
  )
}
```

现在我们已经明确定义了命令，所以在任何可以访问到 `editor` 对象的地方都可以调用它们。例如，从假设的工具栏按钮:

```jsx
const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    // 添加一个工具栏按钮来调用同一个方法
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>
      </div>
      <Editable
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return
          }

          switch (event.key) {
            case '`': {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
              break
            }

            case 'b': {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }
          }
        }}
      />
    </Slate>
  )
}
```

这就是提取逻辑的好处。

我们再一次完成了编码工作！我们仅仅做了非常少量的工作就为编辑器添加了大量的功能。并且我们可以把命令逻辑放在一个单独的地方进行测试和隔离，从而使代码更容易进行维护。
