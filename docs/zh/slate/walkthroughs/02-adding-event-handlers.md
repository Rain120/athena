# 添加事件处理器

你已经安装了 `Slate` 并且在页面上渲染了出来。并且当你输入的时候，会看到发生的变化。但是你一定希望做更多而不是仅仅输入一些纯文本。

`Slate` 很棒的原因是你可以如此轻松地去定制它。就像你用过的其它 `React` 组件一样，当某些事件触发的时候， `Slate` 允许你传递处理器。

当我们按下按键时候，让我们使用 `onKeyDown` 处理器去改变编辑器的内容。

这是我们之前的 `app`：

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
      <Editable />
    </Slate>
  )
}
```

现在让我们添加一个 `onKeyDown` 处理器：

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
        // 定义一个新的处理器打印按下的键
        onKeyDown={event => {
          console.log(event.key)
        }}
      />
    </Slate>
  )
}
```

非常棒！现在当我们在编辑器中按下按键，其对应的 `keyCode` 会被打印到控制台中。

现在我们想要让它真正改变内容。在本私立中，让我们实现在输入时将所有的 `&` 转换为 `and`。

我们的 `onKeyDown` 处理器可能如下所示：

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
            // 防止插入 `&` 字符。
            event.preventDefault()
            // 事件发生时执行 `insertText` 方法。
            editor.insertText('and')
          }
        }}
      />
    </Slate>
  )
}
```

添加后，试着输入 <kbd>&</kbd> ，你会发现它突然变成了 `and` ！

这展示了 `Slate` 事件处理器可以做什么。每个调用都将使用 `event` 对象，你可以使用 `editor` 执行命令作为响应。就是这么简单！