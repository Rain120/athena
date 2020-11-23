# Slate React

This sub-library contains the React-specific logic for Slate.

 `Slate` 在 `React` 的特殊逻辑。

## Components

React components for rendering Slate editors

渲染成 `Slate`编辑器的 `React` 组件

###### `RenderElementProps`

`RenderElementProps` are passed to the `renderElement` handler.

传递给  `renderElement` 处理函数的 `props`

###### `RenderLeafProps`

`RenderLeafProps` are passed to the `renderLeaf` handler.

传递给  `renderLeaf` 处理函数的 `props`

###### `Editable`

The main Slate editor.

###### `DefaultElement(props: RenderElementProps)`

The default element renderer.

默认的元素渲染器。

###### `DefaultLeaf(props: RenderLeafProps)`

The default custom leaf renderer.

默认的自定义叶子渲染器。

###### `Slate(editor: ReactEditor, value: Node[], children: React.ReactNode, onChange: (value: Node[]) => void, [key: string]: any)`

A wrapper around the provider to handle `onChange` events, because the editor is a mutable singleton so it won't ever register as "changed" otherwise.

提供者周围的包装器可以处理 `onChange` 事件，因为 `Slate` 是可变的单例，因此它将永远不会注册为“已更改”。

## Hooks

React hooks for Slate editors

 `Slate` 的 `React Hooks`

###### `useFocused`

Get the current `focused` state of the editor.

获取编辑器的当前 `focused` 状态。

###### `useReadOnly`

Get the current `readOnly` state of the editor.

获取编辑器的当前 `readOnly` 状态。

###### `useSelected`

Get the current `selected` state of an element.

获取元素的当前 `selected` 状态。

###### `useSlate`

Get the current editor object from the React context. Re-renders the context whenever changes occur in the editor.

从 `React` 上下文中获取当前的编辑器对象。 只要编辑器中发生更改，就重新渲染上下文。

###### `useSlateStatic`

Get the current editor object from the React context. A version of useSlate that does not re-render the context. Previously called `useEditor`.

从 `React` 上下文中获取当前的编辑器对象。 不会重新呈现上下文的 `useSlate` 版本。 之前版本叫 `useEditor`。

## ReactEditor

A React and DOM-specific version of the `Editor` interface. All about translating between the DOM and Slate.

###### `findKey(editor: ReactEditor, node: Node)`

Find a key for a Slate node.

###### `findPath(editor: ReactEditor, node: Node)`

Find the path of Slate node.

###### `isFocused(editor: ReactEditor)`

Check if the editor is focused.

###### `isReadOnly(editor: ReactEditor)`

Check if the editor is in read-only mode.

###### `blur(editor: ReactEditor)`

Blur the editor.

###### `focus(editor: ReactEditor)`

Focus the editor.

###### `deselect(editor: ReactEditor)`

Deselect the editor.

###### `hasDOMNode(editor: ReactEditor, target: DOMNode, options: { editable?: boolean } = {})`

Check if a DOM node is within the editor.

###### `insertData(editor: ReactEditor, data: DataTransfer)`

Insert data from a `DataTransfer` into the editor.

###### `setFragmentData(editor: ReactEditor, data: DataTransfer)`

Sets data from the currently selected fragment on a `DataTransfer`.

###### `toDOMNode(editor: ReactEditor, node: Node)`

Find the native DOM element from a Slate node.

###### `toDOMPoint(editor: ReactEditor, point: Point)`

Find a native DOM selection point from a Slate point.

###### `toDOMRange(editor: ReactEditor, range: Range)`

Find a native DOM range from a Slate `range`.

###### `toSlateNode(editor: ReactEditor, domNode: DOMNode)`

Find a Slate node from a native DOM `element`.

###### `findEventRange(editor: ReactEditor, event: any)`

Get the target range from a DOM `event`.

###### `toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)`

Find a Slate point from a DOM selection's `domNode` and `domOffset`.

###### `toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)`

Find a Slate range from a DOM range or selection.

## Plugins

React-specific plugins for Slate editors

###### `withReact(editor: Editor)`

Adds React and DOM specific behaviors to the editor.

## Utils

Private convenience modules
