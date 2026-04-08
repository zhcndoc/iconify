可选回调函数包含以下参数：

- `[prop]loaded`，`[type]IconifyIconName[]`。已加载的图标列表。
- `[prop]missing`，`[type]IconifyIconName[]`。API 上不可用的图标列表。
- `[prop]pending`，`[type]IconifyIconName[]`。仍在加载中的图标列表。
- `[prop]unsubscribe`，`[type]function`。用于取消加载的函数。它与调用 `[func]loadIcons()` 的返回值相同。
