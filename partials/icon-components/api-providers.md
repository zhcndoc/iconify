API 提供商允许在同一文档中使用来自多个 API 服务器的图标。例如，您可以使用默认的 Iconify 图标，以及来自 IconScout、Icons8 或自定义 API 的自定义图标。

<namespaces-animation></namespaces-animation>

为了支持提供商，图标名称的语法已进行扩展。Iconify 图标组件中的图标名称包含 3 个部分：

<namespaces-name></namespaces-name>

所有部分均由 `[str]:` 分隔，提供商部分是可选的，如果为空则可以省略。

示例：

- `[icon]@my-icons:line-24:home`：图标从提供商 `[str]my-icons` 获取。该提供商对应的图标名称为 `[icon]line-24:home`。
- `[icon]mdi-light:home`：图标未指定提供商，因此提供商部分为空。空值将用于公共 Iconify API。
