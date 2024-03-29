# 安装 Slate

`Slate` 是一个被发布为多个 `npm` 包的 `monorepo`，所以你可以通过下面方式来安装它：

```text
yarn add slate slate-react
```

你还要确保安装 `Slate` 的相应依赖：

```text
yarn add react react-dom
```

*注意，如果你更喜欢使用 Slate 的预构建版本，你可以使用 `yarn add slate` 然后在 `dist/slate.js` 获取打包后的文件！查看[如何使用 script 标签引入](./XX-using-the-bundled-source.md) 指南获取更多信息。*

一旦你完成 Slate 的安装，那么你就需要导入它。

```jsx
// 导入 React 依赖。
import React, { useState } from 'react'
// 导入 Slate 编辑器工厂。
import { createEditor } from 'slate'

// 导入 Slate 组件和 React 插件。
import { Slate, Editable, withReact } from 'slate-react'
```

在我们使用这些导入之前，让我们从一个空的 `<App>` 组件开始吧：

```jsx
// 定义 app...
const App = () => {
  return null
}
```

下一步是创建一个新的 `Editor` 对象。我们希望编辑器在渲染中保持稳定，所以我们使用[不带 setter](https://github.com/ianstormtaylor/slate/pull/3925#issuecomment-781179930) 的 `useState` hook：

```jsx
const App = () => {
  // 创建一个不会在渲染中变化的 Slate 编辑器对象。
  const [editor] = useState(() => withReact(createEditor()))
  return null
}
```

当然我们没有渲染任何的东西，所以你不会看到任何变化。

> 如果使用 TypeScript，还需要使用 ReactEditor 扩展 Editor，并根据 TypeScript 的文档添加注释。下面的示例还包括此示例剩余部分所需的自定义类型。

```typescript
// TypeScript 用户仅添加此代码
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
```

接下来渲染一个 `<Slate>` 上下文 `provider`。

`provider` 组件会跟踪你的 `Slate` 编辑器，它的插件，它的值，它的选区，和任何发生的的其他变化。它**必须**被渲染在任何 `<Editable>` 组件上。 不过它也可以通过使用 `useSlate` hook 为其它组件提供编辑器状态，比如工具栏，菜单等等。

```jsx
const initialValue = []

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  // 渲染 Slate 上下文。
  return <Slate editor={editor} value={initialValue} />
}
```

你可以认为 `<Slate>` 组件为它下面的所有组件提供一个上下文。

> Slate Provider 的 “value” prop 仅用作 editor.children 的初始状态。如果你的代码依赖于替换 editor.children，你应该直接替换它，而不会是依赖 “value” prop 执行此操作。

这是略微不同于 `<input>` 或 `<textarea>` 的思维模型，因为富文本文档更加的复杂。你通常需要在可编辑内容旁添加工具栏，实时预览或其它复杂的组件。

通过共享上下文，其它的组件可以执行命令，查询编辑器状态等等。

好的，接下来让我们开始渲染 `<Editable>` 组件吧：

```jsx
const initialValue = []

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  return (
    // 在上下文中添加一个可编辑的组件。
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  )
}
```

这个 `<Editable>` 组件的行为就像是 `contenteditable`。无论您在哪里渲染，它都会为最近的编辑器上下文呈现可编辑的富文本文档。

只剩下最后一步了。到目前为止我们一直使用空数组 `[]` 初始化编辑器的 `value`，所以它没有内容。让我们定义一个初始化的 `value` 来修复这个问题。

这个 `value` 是一个纯 `JSON` 对象。这是一个包含一些文本的单个段落的例子：

```jsx
// 添加初始化值。
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  )
}
```

你完成了！

这是 `Slate` 最基本的例子。如果你把它渲染到页面上，你应该可以看到一个写有 `A line of text in a paragraph.` 的段落。当你打字时，你应该会看到文本的变化！