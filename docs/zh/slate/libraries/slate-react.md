# Slate React

此子库包含 `Slate` 的特定于 `React` 的逻辑。

## 组件（Components）

用于渲染 `Slate` 编辑器的 `React` 组件

###### `RenderElementProps`

`RenderElementProps` 被传递给 `renderElement` 处理函数。

###### `RenderLeafProps`

`RenderLeafProps` 被传递给 `renderLeaf` 处理函数。

###### `Editable`

主要的 `Slate` 编辑器。

###### `DefaultElement(props: RenderElementProps)`

默认元素渲染器。

###### `DefaultLeaf(props: RenderLeafProps)`

默认的自定义叶子渲染器。

###### `Slate(editor: ReactEditor, value: Node[], children: React.ReactNode, onChange: (value: Node[]) => void, [key: string]: any)`

提供程序周围的包装器来处理 `onChange` 事件，因为编辑器是可变的单例，因此它永远不会注册为「已更改」。

## 钩子（Hooks）

`Slate` 编辑器的 `React` 钩子。

###### `useFocused`

获取编辑器的当前 `focused` 状态。

###### `useReadOnly`

获取编辑器的当前 `readOnly` 状态。

###### `useSelected`

获取编辑器的当前 `selected` 状态。

###### `useSlate`

从 `React` 上下文中获取当前编辑器对象。每当编辑器中发生更改时，都会重新呈现上下文。

###### `useSlateStatic`

从 `React` 上下文中获取当前编辑器对象。未重新呈现上下文的 `useSlate` 版本。以前称为 `useEditor`。

## ReactEditor

编辑器接口的 `React` 和 `DOM` 特定版本。关于 `DOM` 和 `Slate` 之间的转义。

###### `findKey(editor: ReactEditor, node: Node)`

查找 `Slate` 节点的 `key。`

###### `findPath(editor: ReactEditor, node: Node)`

查找 `Slate` 节点的 路径`(path)`。

###### `isFocused(editor: ReactEditor)`

检查编辑器是否 `focus。`

###### `isReadOnly(editor: ReactEditor)`

检查编辑器是否处于只读模式。

###### `blur(editor: ReactEditor)`

`Blur` 编辑器。

###### `focus(editor: ReactEditor)`

`Focus` 编辑器。

###### `deselect(editor: ReactEditor)`

取消选择编辑器。

###### `hasDOMNode(editor: ReactEditor, target: DOMNode, options: { editable?: boolean } = {})`

检查`DOM`节点是否在编辑器中。

###### `insertData(editor: ReactEditor, data: DataTransfer)`

将 `DataTransfer` 中的数据插入编辑器。

###### `setFragmentData(editor: ReactEditor, data: DataTransfer)`

在 `DataTransfer` 上设置当前选定片段的数据。

###### `toDOMNode(editor: ReactEditor, node: Node)`

从 `Slate` 节点中查找原生`DOM`元素。

###### `toDOMPoint(editor: ReactEditor, point: Point)`

在 `Slate Point` 中查找原生`DOM selection point`。

###### `toDOMRange(editor: ReactEditor, range: Range)`

从 `Slate Range` 中查找原生`DOM range`。

###### `toSlateNode(editor: ReactEditor, domNode: DOMNode)`

从原生`DOM`元素中查找 `Slate` 节点。

###### `findEventRange(editor: ReactEditor, event: any)`

从`DOM event` 中获取目标范围。

###### `toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)`

从 `DOM` 选择的 `domNode` 和 `domOffset` 中找到 `Slate Point`。

###### `toSlatePoint(editor: ReactEditor, domPoint: DOMPoint)`

从`DOM`范围或选择中查找 `Slate` 范围。

## 插件（Plugins）

针对 `Slate` 编辑器的特定于 `React` 的插件

###### `withReact(editor: Editor)`

向编辑器添加特定于 `React` 和`DOM`的行为。

## 工具

私有功能模块。
