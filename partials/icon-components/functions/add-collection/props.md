该函数包含以下参数：

- `[prop]data`，`[type]IconifyJSON`。图标集数据。
- `[prop]provider`，`[type]string`。可选的 API 提供商 ID。

该函数返回 `[type]boolean` 值：成功时返回 `[bool]true`，如果数据有问题则返回 `[bool]false`。

如果图标集包含 provider 属性，且向 `[func]addCollection()` 传递了第二个参数，则第二个参数中的 provider 将覆盖图标集中的 provider。
