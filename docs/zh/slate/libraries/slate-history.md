# Slate History

This sub-library tracks changes to the Slate value state over time, and enables undo and redo functionality.

通过监听 `Slate` 值的状态随时间的变化，来能够实现 **撤消** 和 **重做** 功能.

## `History`

`History` objects hold all of the operations that are applied to a value, so they can be undone or redone as necessary.

`History` 对象包含应用于值的所有操作，因此需要根据它来实现 **撤消** 或 **重做**。

## `HistoryEditor`

`HistoryEditor` contains helpers for history-enabled editors.

`HistoryEditor`包含启用编辑器的历史记录 (`history`) 的辅助内容。

## `withHistory`

The `withHistory` plugin keeps track of the operation history of a Slate editor as operations are applied to it, using undo and redo stacks.

`withHistory` 插件使用 **撤消** 和 **重做** 堆栈来跟踪对 `Slate` 编辑器执行操作时的操作历史记录。