函数 `[func]disableCache()` 会禁用 `[prop]localStorage` 和 `[prop]sessionStorage` 中的缓存。

当组件从 API 获取新图标时，图标数据会存储在浏览器存储中。缓存能加快渲染速度，因为组件可以直接从缓存中获取图标，而无需发送 API 请求。与 API 请求不同，缓存是即时响应的。

默认情况下，`[prop]localStorage` 处于启用状态，`[prop]sessionStorage` 处于禁用状态。
