当图标数据加载完成时，会触发 `[prop]load` 事件。

当触发 `[prop]load` 时：

- 如果 `[prop]icon` 属性的值为对象，则不会触发 `[prop]load`。
- 如果 `[prop]icon` 属性的值为字符串且图标数据可用，则仅在首次渲染时触发 `[prop]load`。
- 如果 `[prop]icon` 属性的值为字符串且图标数据不可用，则在从 API 获取图标数据后的首次重新渲染时触发 `[prop]load`。

`[prop]load` 事件的目的是什么？是为了让您知道 `[var]Icon` 组件何时渲染了图标，以及何时未渲染任何内容。这使您可以执行诸如为父元素添加类名（例如 `[str]container--with-icon`）之类的操作，以便在显示图标时修改布局。
