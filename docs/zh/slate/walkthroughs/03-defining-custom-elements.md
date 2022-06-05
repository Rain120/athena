# 定义自定义元素

在之前的例子中，我们从实现一个段落开始，但是实际上我们从来没有告诉过 `Slate` 关于 `paragraph` 块类型的任何信息。我们仅仅是使用了默认内置渲染器，它使用的是普通古老的 `<div>` 。

但是你能做到的不止如此。`Slate` 允许定义任何你想要的块类型，比如引用，代码块，列表项等。

我们将给你展示如何做到。让我们从之前的 app 继续吧：

```jsx
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
        onKeyDown={event => {
          if (event.key === '&') {
            event.preventDefault()
            editor.insertText('and')
          }
        }}
      />
    </Slate>
  )
}
```

现在让我们添加“代码块”到我们的编辑器中。

问题是，代码块不仅仅要渲染为一个普通的段落，它还需要以不同的方式渲染出来。为了做到这一点，我们需要为 `code` 元素节点定义“渲染器”。

元素渲染器仅仅是一个简单的 `React` 组件。像是这样:

```jsx
// 为代码块定义 React 组件渲染器
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
```

非常简单。

看到 `props.attributes` 参数了吗？Slate 需要将在块最顶层元素上渲染的属性通过这种方式传入。这样你就不必自己去构建它们了。你**必须**在你的组件中传入这些属性。

另外，看到 `props.children` 参数了吗？Slate 会自动为你渲染块下面的所有子元素，并且就像在其他 React 组件中那样，通过 `props.children` 传递给你。这样你就不必去为如何正确渲染文本节点或其他类似的事情而费神了。你**必须**将这些子组件作为最终的叶子在你的组件中渲染。

下面是一个“默认”元素组件：

```jsx
const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}
```

现在，让我们为 `Editor` 添加一些渲染器：

```jsx
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])

  // 定义基于在元素上传递 `props` 的渲染函数。在这里我们使用 `useCallback`
  // 记住后续渲染的函数。
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
        // 在 `renderElement` 函数中传递。
        renderElement={renderElement}
        onKeyDown={event => {
          if (event.key === '&') {
            event.preventDefault()
            editor.insertText('and')
          }
        }}
      />
    </Slate>
  )
}

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}
```

好了，但是我们还需要一个办法让用户实际转换块（block）为代码块。所以让我们修改 `onKeyDown` 函数，添加一个 <kbd>ctrl</kbd> `+` <kbd>-</kbd>快捷键来做这件事：

```jsx
// 从 Slate 中导入 `Editor` 和 `Transforms`
import { Editor, Transforms } from 'slate'

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
          if (event.key === '`' && event.ctrlKey) {
            // 默认阻止插入 "`" 行为。
            event.preventDefault()
            // 否则，把当前选择的块类型设为 "code"
            Transforms.setNodes(
              editor,
              { type: 'code' },
              { match: n => Editor.isBlock(editor, n) }
            )
          }
        }}
      />
    </Slate>
  )
}

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}
```

现在，如果你按下 <kbd>ctrl</kbd> `+` <kbd>-</kbd> ，你光标所在的块应该会转换为一个代码块！多么神奇！

但是我们忘记了一件事。当我们再次按下  <kbd>ctrl</kbd> `+` <kbd>-</kbd> ，它应该从代码块变回普通段落。为了做到这点，我们需要添加一点点逻辑，基于我们当前选择的块是否已经是一个代码块来改变我们设置的类型：

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
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault()
            // 确定当前选中的任意块是否为代码块.
            const [match] = Editor.nodes(editor, {
              match: n => n.type === 'code',
            })
            // 根据是否已经存在匹配项来切换块类型。
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

现在你完成了！如果你在一个代码块中按下 <kbd>ctrl</kbd> `+` <kbd>-</kbd>，它将会变回一个段落！
