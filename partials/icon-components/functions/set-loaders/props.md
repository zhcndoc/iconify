这两个函数的参数相同，仅回调函数的类型不同：

- `[prop]callback`，`[type]function`。用于加载图标的回调函数，可以是同步或异步函数。
- `[prop]prefix`，`[type]string`。图标集前缀。
- `[prop]provider`，`[type]string`。图标集提供商，可选。

回调函数是用于加载图标数据的函数。

支持同步和异步（返回 `[type]Promise` 实例）回调函数。

这两个函数的回调函数具有相似的参数。

`[func]setCustomIconLoader()` 的参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]prefix`，`[type]string`。图标集前缀。
- `[prop]provider`，`[type]string`。图标集提供商。

参数的顺序是有意安排的：按重要性从高到低排列。如果你已为某个前缀设置了加载器，通常只需要 `[prop]name` 参数即可。

回调函数返回 `[type]IconifyIcon` 类型的图标数据，失败时返回 `null`（或返回这些类型的 `[type]Promise`）。

`[func]setCustomIconsLoader()` 的回调函数几乎完全相同，区别在于：

- 第一个参数是图标名称数组：`[type]string[]`。
- 回调函数返回 `[type]IconifyJSON` 类型的图标集，失败时返回 `null`（或返回这些类型的 `[type]Promise`）。
