# 贡献

想要为 `Slate` 做贡献？ 那将是真棒！

- [提出Bugs](#提出Bugs)
- [提出问题](#提出问题)
- [提交PR](#提交PR)
- [仓库设置](#仓库设置)
- [启动示例服务器](#启动示例服务器)
- [运行测试用例](#运行测试用例)
- [测试方式](#测试方式)
- [发布](#发布)

## 提出Bugs

如果您在使用`Slate`时遇到任何奇怪的行为，请随时在此仓库中提出一个新 `issue`！ 请先对这个`issue` **进行搜索**，然后再新建 `issue`，以确保尚未有人报告或解决您发现的错误。

每一个 `issue` 都必须包括:

- 一个必须能复现该错误的 [JSFiddle](https://jsfiddle.net/01pLxfzu/) 新页面。
- 显示问题的动图。(可以使用 [RecordIt](http://recordit.co/) 录制)
- 对问题的明确解释。

这里有一个[JSFiddle 模板](https://jsfiddle.net/01pLxfzu/)方便你更快的开始写你的`Demo`:

[![](./images/jsfiddle.png)](https://jsfiddle.net/01pLxfzu/)

## 提出问题

我们还有一个 [Slate Slack 组](https://slate-slack.herokuapp.com) ，您可以在其中提问并获得其他使用 `Slate` 的用户们的答案:

![](./images/slack.png)

请使用`Slack` 来代替想我们提 `issue`，因为我们希望保留问题以跟踪错误和功能。 我们通过关闭提出的`issue`来维护项目，这样就不会太困难。

## 提交PR

我们非常欢迎和感激每一个 `PR`。如果你的 `issue` 一开始就是想获取帮助, 请记得用 [`♥ help`](https://github.com/ianstormtaylor/slate/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%99%A5+help%22) 来标记它。

请在每个请求请求中包含测试和文档！

## 仓库设置

`Slate` 是由 [lerna](https://github.com/lerna/lerna) 管理的`monorepo`。 与更传统的存储库不同，这意味着必须构建存储库才能使测试，整理或其他常见开发活动按预期运行。

要运行构建，您需要将`Slate`存储库克隆到您的计算机上。 之后，您需要`cd`到克隆它的目录中，并使用`yarn`安装依赖项并构建`monorepo`：

```
yarn install
yarn build
```

## 启动示例服务器

要运行示例，首先构建 [存储库设置](http://localhost:9527/athena/zh/slate/Contributing.html#repository-setup) 中的`monorepo`。

然后，您可以使用以下命令启动示例服务器:

```
yarn start
```

## 运行测试用例

要运行测试，首先构建 [存储库设置](#repository-setup) 中的`monorepo` 。

然后你可以重新运行测试

```
yarn test
```

如果需要调试某些东西，可以在源代码中某一行添加调试标记，然后运行 `yarn test：inspect`。

如果只想运行一个或多个特定测试，则可以运行 `yarn test --fgrep="slate-react rendering"` 标志，该标志将通过`grepping`来对每个测试中的测试实例进行过滤。(通过 `Mocha` 的标记来区分)

## 测试方式

这个[页面](https://github.com/Microsoft/vscode/wiki/IME-Test)详细描述了介绍了如何在`Windows`、`Mac`和Linux上测试各种输入场景。

## 发布

由于我们使用 [Lerna](https://lerna.js.org) 来管理 `Slate` 软件包，因此相当简单，只需运行

```js
yarn release
```

`Lerna` 给你运行的提示。
