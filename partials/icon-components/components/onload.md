`[prop]onLoad` 属性是一个可选的回调函数。当图标数据加载完成时调用。

它并非事件（例如链接的 `[prop]click` 事件），而是一个简单的回调函数。

当 `[prop]onLoad` 被调用时：

- 如果 `[prop]icon` 属性的值是一个对象，则不会调用 `[prop]onLoad`。
- 如果 `[prop]icon` 属性的值是一个字符串且图标数据可用，则会在首次渲染时调用 `[prop]onLoad`。
- 如果 `[prop]icon` 属性的值是一个字符串且图标数据不可用，则会在从 API 获取图标数据后的首次重新渲染时调用 `[prop]onLoad`。

`[prop]onLoad` 的作用是什么？用于让您知道 `[var]Icon` 组件何时渲染了图标，以及何时未渲染任何内容。这使您可以执行诸如为父元素添加类名（例如 `[str]container--with-icon`）之类的操作，以便在显示图标时修改布局。
