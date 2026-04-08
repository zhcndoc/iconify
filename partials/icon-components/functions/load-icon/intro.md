函数 `[func]loadIcon()` 从 Iconify API 检索图标。

它返回 `[type]Promise` 实例，使其在异步代码中非常易于使用。

何时使用此函数：

- 当你在异步函数内部需要获取图标数据时。

何时不应使用此函数：

- 预加载多个稍后使用的图标。请改用 `[func]loadIcons()`。

使用相同的图标名称多次调用该函数是安全的，组件不会从 Iconify API 重复加载图标数据。如果将 `[type]string` 类型的图标名称作为参数传递，多次调用该函数将返回相同的 `[type]Promise` 实例。
