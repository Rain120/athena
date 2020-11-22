# 转换(Transforms)

Transforms are helper functions operating on the document. They can be used in defining your own commands.

`Transforms` 是对文档进行操作的辅助函数。 它们可用于定义自己的命令。

### 节点转换

Transforms that operate on nodes.

在节点上操作的转换。

#### 节点选项(NodeOptions)

All transforms listed below support a parameter `options`. This includes options specific to the transform, and general `NodeOptions` to specify the place in the document that the transform is applied to. 

下面列出的所有 `transform` 方法都支持的参数选项。 这包括特定于 `transform` 的选项，以及用于指定要在其中应用转换的文档中位置的常规 `NodeOptions`。

```typescript
interface NodeOptions {
  at?: Location
  match?: (node: Node) => boolean
  mode?: 'highest' | 'lowest'
  voids?: boolean
}
```

#### `Transforms.insertNodes(editor: Editor, nodes: Node | Node[], options?)`

Insert `nodes` at the specified location in the document.  If no location is specified, insert at the current selection. If there is no selection, insert at the end of the document.

将节点插入文档中的指定位置。 如果未指定位置，请在当前选择处插入。 如果没有选择，请在文档末尾插入。

参数选项如下

```ts
NodeOptions & {
	hanging?: boolean,
	select?: boolean
}
```

#### `Transforms.removeNodes(editor: Editor, options?)`

Remove nodes at the specified location in the document. If no location is specified, remove the nodes in the selection. 

删除文档中指定位置的节点。 如果未指定位置，删除选择中的节点。

参数选项如下

```ts
NodeOptions & {
	hanging?: boolean
}
```

#### `Transforms.mergeNodes(editor: Editor, options?)`

Merge a node at the specified location with the previous node at the same depth. If no location is specified, use the selection. Resulting empty container nodes are removed.

将位于指定位置的节点与位于相同深度的前一个节点合并。如果没有指定位置，则使用选择。产生的空容器节点被删除。

参数选项如下

```ts
NodeOptions & {
	hanging?: boolean
}
```

#### `Transforms.splitNodes(editor: Editor, options?)`

Split nodes at the specified location. If no location is specified, split the selection.

在指定位置分割节点。 如果未指定位置，则拆分选择。

参数选项如下

```ts
NodeOptions & {
	height?: number,
	always?: boolean
}
```

#### `Transforms.wrapNodes(editor: Editor, element: Element, options?)`

Wrap nodes at the specified location in the `element` container. If no location is specified, wrap the selection.

将节点包装在元素容器中的指定位置。 如果未指定位置，包装所选内容。

参数选项如下

```ts
NodeOptions & {split?: boolean}
```

`options.mode` 支持 `all` 选项。

#### `Transforms.unwrapNodes(editor: Editor, options?)`

Unwrap nodes at the specified location. If necessary, the parent node is split. If no location is specified, use the selection.

在指定位置解包节点。 如有必要，将拆分父节点。 如果未指定位置，则使用所选内容。

参数选项如下

```ts
NodeOptions & {
	split?: boolean
}
```
`options.mode` 支持 `all` 选项。

#### `Transforms.setNodes(editor: Editor, props: Partial<Node>, options?)`

Set properties of nodes at the specified location. If no location is specified, use the selection.

在指定位置设置节点的属性。 如果未指定位置，则使用所选内容。

参数选项如下

```ts
NodeOptions & {
	hanging?: boolean,
	split?: boolean
}
```
`options.mode` 支持 `all` 选项。

#### `Transforms.unsetNodes(editor: Editor, props: string | string[], options?)`

Unset properties of nodes at the specified location. If no location is specified, use the selection.

取消指定位置上节点的属性。如果未指定位置，则使用所选内容。

参数选项如下

```ts
NodeOptions & {split?: boolean}
```
`options.mode` 支持 `all` 选项。

#### `Transforms.liftNodes(editor: Editor, options?)`

Lift nodes at the specified location upwards in the document tree. If necessary, the parent node is split. If no location is specified, use the selection.

在文档树中向上提升指定位置的节点。如果未指定位置，则使用所选内容。

Options 支持 `NodeOptions`. `options.mode` 支持 `all` 选项。

#### `Transforms.moveNodes(editor: Editor, options)`

Move the nodes from an origin to a destination. A destination must be specified in the `options`.  If no origin is specified, move the selection.

将节点从起点位置移动到目的位置。必须在选项中指定目的地。如果未指定原点，则移动所选内容。

参数选项如下

```ts
NodeOptions & {to: Path}
```
`options.mode` 支持 `all` 选项。

## 选区转换(Selection transforms)

Transforms that operate on the document's selection.

对文档选择进行操作的转换。

#### `Transforms.collapse(editor: Editor, options?)`

Collapse the selection to a single point.

将选区折叠为单个点。

参数选项如下

```ts
{
  edge?: 'anchor' | 'focus' | 'start' | 'end'
}
```

#### `Transforms.select(editor: Editor, target: Location)`

Set the selection to a new value specified by `target`.

将选区设置为target指定的新值。

#### `Transforms.deselect(editor: Editor)`

Unset the selection.

未设置的选区。

#### `Transforms.move(editor: Editor, options?)`

Move the selection's point forward or backward.

向前或向后移动选区的点。

参数选项如下

```ts
{
  distance?: number,
  unit?: 'offset' | 'character' | 'word' | 'line',
  reverse?: boolean,
  edge?: 'anchor' | 'focus' | 'start' | 'end'
}
```

#### `Transforms.setPoint(editor: Editor, props: Partial<Point>, options?)`

Set new properties on one of the selection's points.

在选区的某个点上设置新属性。

参数选项如下

```ts
{
  edge?: 'anchor' | 'focus' | 'start' | 'end'
}
```

#### `Transforms.setSelection(editor: Editor, props: Partial<Range>)`

Set new properties on the selection.

在所选内容上设置新属性。

## 文本转换(Text transforms)

Transforms that operate on text.

转换文本上的操作。

#### `Transforms.delete(editor: Editor, options?)`

Delete text in the document.

删除文档中的文本。

参数选项如下
```ts
{
  at?: Location,
  distance?: number,
  unit?: 'character' | 'word' | 'line' | 'block',
  reverse?: boolean,
  hanging?: boolean,
  voids?: boolean
}
```

#### `Transforms.insertFragment(editor: Editor, fragment: Node[], options?)`

Insert of fragment of nodes at the specified location in the document. If no location is specified, insert at the current selection.

在文档中的指定位置插入节点片段。如果没有指定位置，则在当前选区的位置插入。

参数选项如下
```ts
{
  at?: Location,
  hanging?: boolean,
  voids?: boolean
}
```

#### `Transforms.insertText(editor: Editor, text: string, options?)`

参数选项如下
```ts
{
  at?: Location,
  voids?: boolean
}
```

## 通用转换(General transform)

#### `Transforms.transform(editor: Editor, transform: Transform)`

Transform the `editor` by an `operation`.

将一个操作转换成 `Editor`