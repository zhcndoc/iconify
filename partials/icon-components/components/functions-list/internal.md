`include icon-components/components/functions-list/internal-intro`

所有内部 API 函数均作为 `[var]_api` 对象的属性对外公开：

- `[func]getAPI()`。返回内部 API 模块。
- `[func]getAPIConfig()`。返回 API 配置。
- `[func]setAPIModule(provider)`。为提供程序设置 API 模块。这是一个实验性功能，旨在供使用自定义模块从 API 检索数据的自定义 API 提供程序使用。
- `[func]setFetch(fetch)`。设置自定义 Fetch API。
- `[func]getFetch()`。返回已使用的 `[func]fetch()` 函数，若 Fetch API 不可用则返回 `[type]null`。
