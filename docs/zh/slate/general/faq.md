# FAQ

一些有关于 `Slate` 的常见问题是:

- [为什么将内容粘贴为纯文本？](#为什么将内容粘贴为纯文本)
- [Slate 支持什么浏览器和设备？](#slate-支持什么浏览器和设备)

### 为什么将内容粘贴为纯文本？

`Slate`的核心原则之一是，与大多数其他编辑器不同，它不会为您正在编辑的内容规定特定的 **模式**。这意味着`Slate`的核心没有 **块引号** 或 **粗体格式** 的概念。

在很大程度上，这增加了灵活性，但是在某些情况下，你必须做更多的工作。粘贴就是其中之一。

因为 `Slate` 对于你的**域**一无所知，它不知道如何解析被粘贴的 `HTML` 内容 (或者其它内容)。所以，默认情况下无论用户粘贴什么内容到 `Slate` 编辑器，它都会解析为纯文本。如果你想要它可以更智能地解析粘贴内容，那你需要按照你的需求去重写 `insert_data` 命令 和 反序列化 `DataTransfer` 对象的 `text/html` 数据。

### Slate 支持什么浏览器和设备?

`Slate` 的目标是支持桌面`(PC)`和移动设备上的所有现代的浏览器。

然而，现在 `Slate` 是测试版 `(beta)` 并且是社区驱动的，所以它并做不到理想的支持。目前已经对桌面上最新版本的`Chrome`，`Edge`，`Firefox` 和 `Safari` 进行了测试。并且它无法在 `Internet Explorer` 中使用。对于移动设备，`iOS` 已被支持，但没有进行定期测试。`Slate 0.47`支持`Android上的Chrome`，但 `Slate 0.50 +` 目前不支持。如果你想要添加更多的浏览器或设备支持，我们欢迎你提交拉取请求 ([pull request](https://github.com/ianstormtaylor/slate/pulls))！或者对不兼容的浏览器，构建一个插件。

对于更老的浏览器，比如 `IE11`，大量现代标准的原生 `API` 是不能用的。`Slate` 对此的立场是：由用户来携带 `polyfills` (例如 https://polyfill.io ) 当需要像 `el.closest` 这样的东西时，否则我们将不得不捆绑和维护许多其他人甚至可能一开始就不需要的 `polyfills`。

