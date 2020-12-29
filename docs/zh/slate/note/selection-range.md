# Selection & Range 学习

::: tip 关于

关于这篇笔记是我在学习 `Slate` 的事件对一些概念的理解及其从其他[参考资料](#参考资料)、[博客](./blog) 中学习到的，主要用来记录当时心得, 如果你也正好感兴趣，那就和我一起学习吧。`Here we go`

:::

#### Example Code

```html
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
```

#### Path Interface

```ts
export interface Point {
  path: Path
  offset: number
  [key: string]: unknown
}
```

## 范围 (Range)

**`Range`** 表示一个包含节点与文本节点的一部分的 **文档片段**。俗称**拖蓝**。

```ts
export interface Range {
  anchor: Point
  focus: Point
  [key: string]: unknown
}
```

![range-p-2-b-3-range](./images/range-p-2-b-3-range.svg)

#### 属性

- [`Range.collapsed`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/collapsed) 只读

  返回一个表示 `Range` 的起始位置和终止位置是否相同的[`布尔值`](https://developer.mozilla.org/zh-CN/docs/Web/API/Boolean)。

- [`Range.commonAncestorContainer`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/commonAncestorContainer) 只读

  返回完整包含 `startContainer` 和 `endContainer` 的、最深一级的[`节点`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)。

- [`Range.endContainer`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/endContainer) 只读

  返回包含 `Range` 终点的[`节点`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)。

- [`Range.endOffset`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/endOffset) 只读

  返回一个表示 `Range` 终点在 `endContainer` 中的位置的数字。

- [`Range.startContainer`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/startContainer) 只读

  返回包含 `Range` 开始的[`节点`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)。

- [`Range.startOffset`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/startOffset) 只读

  返回一个表示 `Range` 起点在 `startContainer` 中的位置的数字。

原生方法 [详见](https://developer.mozilla.org/zh-CN/docs/Web/API/Range#%E6%96%B9%E6%B3%95), `Slate` 方法 [详见](../api/locations.html#范围-range)

## 锚点 (Anchor)

`anchor` **指向用户开始选择的地方**。

选区的 [锚点](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/anchorNode) 是该选区的起点，当您用鼠标框选一个选区的时候，锚点是你的鼠标**按下瞬间**所记录的那个点。随着用户拖动鼠标，锚点的位置不会随着改变。

## 焦点 (focus)

`focus` **指向用户结束选择的地方**。

选区的 [焦点](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/focusNode) 是该选区的终点，当您用鼠标框选一个选区的时候，焦点是你的鼠标**松开瞬间**所记录的那个点。随着用户拖动鼠标，焦点的位置会随着改变。

## 选区 (Selection)

`Selection` 表示当前用户选中的内容或插入符号的当前位置。

`Slate@0.50+` 中 `Selection` 的能力是通过 `Range Interface` 注入的。

```ts
export interface Editor {
  // ...
  selection: Range | null
}
```

![range-example-p-0-1](./images/range-example-p-0-1.svg)

#### 属性

- [anchorNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/anchorNode) 只读

返回该选区起点所在的节点（[`Node`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)）。

- [anchorOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/anchorOffset) 只读

返回一个数字，其表示的是选区起点在 [`anchorNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/anchorNode) 中的位置偏移量。

1. 如果 `anchorNode` 是文本节点，那么返回的就是从该文字节点的第一个字开始，直到被选中的第一个字之间的字数（如果第一个字就被选中，那么偏移量为零）。
2. 如果 `anchorNode` 是一个元素，那么返回的就是在选区第一个节点之前的同级节点总数。(这些节点都是 `anchorNode` 的子节点)

- [focusNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/focusNode) 只读

返回该选区终点所在的节点。

- [focusOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/focusOffset) 只读

返回一个数字，其表示的是选区终点在 [`focusNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/focusNode) 中的位置偏移量。

1. 如果 `focusNode` 是文本节点，那么选区末尾未被选中的第一个字，在该文字节点中是第几个字（从0开始计），就返回它。
2. 如果 `focusNode` 是一个元素，那么返回的就是在选区末尾之后第一个节点之前的同级节点总数。

- [isCollapsed](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/isCollapsed) 只读

返回一个布尔值，用于判断选区的起始点和终点是否在同一个位置。

- [rangeCount](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/rangeCount) 只读

返回该选区所包含的连续范围的数量。

### 选择方向

#### 向前选择(forward)

二者重叠时，即选区被折叠，用户视觉上看到的就是一个闪烁的光标。

![selection-direction-forward](./images/selection-direction-forward.svg)

#### 向后选择(backward)

![selection-direction-backward](./images/selection-direction-backward.svg)

#### collapse

 **`Selection.collapse()`** 方法可以收起当前选区到一个点。文档不会发生改变。如果选区的内容是可编辑的并且焦点落在上面，则光标会在该处闪烁。

```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <script>
    function run (){
      document.body.contentEditable = true
      var body = document.getElementsByTagName("body")[0];
      /* 将光标收起到文档body的开头 */
      window.getSelection().collapse(body, 0);
    }
  </script>
  </head>
  <body>
    <h1>这是一个段落</h1>
    <p id="demo">这是一个段落</p>
    <button type="button" onclick="run()">聚焦到body的第一个位置</button>
  </body>
</html>
```

### 参考资料

[MDN - Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection)

[MDN - Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)

[Selection and Range](https://zh.javascript.info/selection-range)

[DOM 规范: 范围(Range)](https://dom.spec.whatwg.org/#ranges)

[选择(Selection) API](https://www.w3.org/TR/selection-api/#dom-globaleventhandlers-onselectstart)

[HTML 规范: 用于文本控件选择的 API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#textFieldSelection)

