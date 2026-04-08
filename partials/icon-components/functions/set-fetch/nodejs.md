较旧版本的 Node.js 不支持 Fetch API。在 Node.js 17 版本中，可通过使用标志 `[str]--experimental-fetch` 来启用它，但如果没有该标志，则无法使用 Fetch API。
这意味着当在 Node.js 环境的服务器端使用时，图标组件无法从 Iconify API 获取图标数据。
