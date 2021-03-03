# 位置(Location)

The `Location` interface is a union of the ways to refer to a specific location in a Slate document: paths, points or ranges. Methods will often accept a `Location` instead of requiring only a `Path`, `Point` or `Range`. 

`Location` 接口是引用 `Slate` 文档中特定位置的方法的方法的联合: [路径(Path)](#path), [Point(点)](#point) 或者 [Range(范围)](#range)。方法通常会接受一个位置，而不是只需要一个 [路径(Path)](#path), [Point(点)](#point) 或者 [Range(范围)](#range)。

```typescript
type Location = Path | Point | Range
```
## 静态方法(Static methods)

#### `Location.isLocation(value: any): value is Location`

Check if a value implements the `Location` interface.

是否是 `Location` 实例。

## 路径(Path)

`Path` arrays are a list of indexes that describe a node's exact position in a Slate node tree. Although they are usually relative to the root `Editor` object, they can be relative to any `Node` object.

`Path` (路径) 数组是描述节点在 `Slate` 节点树中的确切位置的索引列表。尽管它们通常相对于根 `Editor` 对象，但它们可以相对于任何 `Node` 对象。

```typescript
type Path = number[]
```

## 点(Point)

`Point` objects refer to a specific location in a text node in a Slate document. Its `path` refers to the location of the node in the tree, and its offset refers to distance into the node's string of text. Points may only refer to `Text` nodes.

`Point` 对象引用 `Slate` 文档中文本节点中的特定位置。 它的路径是指节点在树中的位置，其偏移量是指到节点文本字符串的距离。点只能引用 `Text (文本)` 节点。

```typescript
interface Point {
    path: Path
    offset: number  
    [key: string]: unknown
}
```

## 静态方法(Static methods)

#### `Point.compare(point: Point, another: Point): -1 | 0 | 1`

Compare a `point` to `another`, returning an integer indicating whether the point was before, at or after the other.

将一个点与另一个点进行比较，返回一个整数，表示该点是在这个点之前 `(-1)`、还是之后 `(1)`。

#### `Point.isAfter(point: Point, another: Point): boolean`

Check if a `point` is after `another`.

检查一个点是否在另一个点之后。

#### `Point.isBefore(point: Point, another: Point): boolean`

Check if a `point` is before `another`.

检查一个点是否在另一个点之前。

#### `Point.equals(point: Point, another: Point): boolean`

Check if a `point` is exactly equal to `another`.

检查一个点是否与另一个点完全相等。

#### `Point.isPoint(value: any): value is Point`

Check if a `value` implements the `Point` interface.

是否是 `Point` 的实例。

#### `Point.transform(point: Point, op: Operation, options?): Point | null`

Transform a `point` by an `op`.

将 `op` 转换成一个点 `(point)`的信息。

参数选项

```ts
{
  affinity?: 'forward' | 'backward' | null
}
```

## 范围(Range)

`Range` objects are a set of points that refer to a specific span of a Slate document. They can define a span inside a single node or they can span across multiple nodes. The editor's `selection` is stored as a range.

`Range` 对象是引用 `Slate` 文档特定范围的一组点。它们可以在单个节点内定义一个范围，也可以跨越多个节点。编辑器的选择存储为一个范围。

**译者 📒**:  [Here](../note/selection-range.md#范围-range) 有关于范围 `(range)`的一些个人学习总结，欢迎一起讨论。

```typescript
interface Range {
    anchor: Point
    focus: Point
    [key: string]: unknown
}
```

#### `Range.edges(range: Range, options?): [Point, Point]`

Get the start and end points of a `range`, in the order in which they appear in the document.

按照范围在文档中出现的顺序，获取范围的起始点和结束点。

参数选项

`````ts
{
	reverse?: boolean
}
`````

#### `Range.end(range: Range): Point`

Get the end point of a `range`.

获取一个范围的终点。

#### `Range.equals(range: Range, another: Range): boolean`

Check if a `range` is exactly equal to `another`.

检查一个范围是否与另一个完全相等。

#### `Range.includes(range: Range, target: Path | Point | Range): boolean`

Check if a `range` includes a path, a point, or part of another range.

检查一个范围是否包括路径、点或另一个范围的一部分。

#### `Range.intersection(range: Range, another: Range): Range | null`

Get the intersection of one `range` with `another`.

获得一个范围与另一个范围的交集。

#### `Range.isBackward(range: Range): boolean`

Check if a `range` is backward, meaning that its anchor point appears *after* its focus point in the document.

检查范围是否向后，这意味着它的锚点出现在文档中它的焦点之后。

#### `Range.isForward(range: Range): boolean`

Check if a `range` is forward. This is the opposite of `Range.isBackward` and is provided for legibility.

检查范围是否向前。 这与 `Range.isBackward` 相反，仅供参考。
#### `Range.isCollapsed(range: Range): boolean`

Check if a `range` is collapsed, meaning that both its anchor and focus points refer to the exact same position in the document.

检查范围是否被折叠，这意味着它的锚点和焦点在文档中指向完全相同的位置。

#### `Range.isExpanded(range: Range): boolean`

Check if a `range` is expanded. This is the opposite of `Range.isCollapsed` and is provided for legibility.

检查范围是否展开。 这与 `Range.isCollapsed` 相反，仅供参考。

#### `Range.isRange(value: any): value is Range`

Check if a `value` implements the `Range` interface.

是否是 `Range`  的实例。

#### `Range.points(range: Range): Generator<PointEntry>`

Iterate through all the point entries in a `range`.

遍历范围内的所有点条目。

#### `Range.start(range: Range): Point`

Get the start point of a `range`

获取范围 `(range)` 的起始点。

#### `Range.transform(range: Range, op: Operation, options): Range | null`

Transform a `range` by an `op`.

将 `op` 转换成一个范围 `(range)`的信息。

参数选项

```ts
{
  affinity: 'forward' | 'backward' | 'outward' | 'inward' | null
}
```

