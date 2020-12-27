# Slate History

此子库跟踪随着时间推移对 `Slate` 值状态的更改，并启用撤消和重做功能。

## `History`

`History` 对象保存应用于值的所有操作，因此可以根据需要撤消或重做它们。

## `HistoryEditor`

`HistoryEditor` 包含启用历史记录的编辑器的辅助函数。

## `withHistory`

当操作应用于 `Slate` 编辑器时，`withHistory` 插件会使用 **撤消** 和 **重做** 堆栈来跟踪其操作历史。
