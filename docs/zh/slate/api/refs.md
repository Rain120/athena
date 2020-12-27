# 引用(Ref)

`Ref` objects store up-to-date references to a `Point` or `Range` object in the document.

`Ref` 对象在文档中存储对 [点(Point)](../api/locations.html#point) 或 [范围(Range)](../api/locations.html#range) 对象的最新引用。

## 点引用(PointRef)

`PointRef` objects keep a specific point in a document synced over time as new operations are applied to the editor. You can access their property `current` at any time for the up-to-date `Point` value.

当新操作应用到编辑器时，`PointRef` 对象使文档中的特定点的信息随时间同步。 您可以随时访问其 `current` 属性来获取最新的 `Point` 值。

```typescript
interface PointRef {
    current: Point | null
    affinity: 'forward' | 'backward' | null
    unref(): Point | null
}
```

### Static methods

#### `PointRef.transform(ref: PointRef, op: Operation)`

Transform the point refs current value by an `op`.

通过一个 `op` 转换成 点 `Point` 引用的当前值。

## 范围引用(RangeRef)

`RangeRef` objects keep a specific range in a document synced over time as new operations are applied to the editor. You can access their property `current` at any time for the up-to-date `Range` value.

当新的操作应用到编辑器时，`RangeRef` 对象使文档中的特定范围随时间同步。 您可以随时访问其属性 `current` 来获取最新的 `Range` 值。

```typescript
interface RangeRef {
    current: Range | null
    affinity: 'forward' | 'backward' | 'outward' | 'inward' | null
    unref(): Range | null
}
```

### Static methods

#### `RangeRef.transform(ref: RangeRef, op: Operation)`

Transform the range refs current value by an `op`.

通过一个 `op` 转换成 范围 `Range` 引用的当前值。