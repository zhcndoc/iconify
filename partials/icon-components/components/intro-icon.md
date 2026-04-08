```yaml
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
```

图标名称是一个字符串，包含 3 个部分：

<namespaces-name></namespaces-name>

有效图标名称示例：

- `[icon]flat-color-icons:voice-presentation` - 图标为来自公共 Iconify API 的 [Flat Color Icons](https://icon-sets.iconify.design/flat-color-icons/) 图标集中的 `[str]voice-presentation`。
- `[icon]mdi-light:home` - 图标为来自公共 Iconify API 的 [Material Design Light](https://icon-sets.iconify.design/mdi-light/) 图标集中的 `[str]home`。

例外情况：

- 如果 API 提供商为空，则可以省略（如上述示例所示）。
- 如果前缀不包含 `[str]-`，则前缀和图标名称可以用连字符分隔。这是为了支持从图标字体迁移的用户。例如，`[icon]fa:arrow-left` 和 `[icon]fa-arrow-left` 是相同的，因为 `[str]fa` 不包含连字符。

目前有超过 60,000 个图标，来自 80 多个图标集。[浏览图标集](https://icon-sets.iconify.design/) 查看所有可用图标。

您还可以添加自定义 API 提供商以获取更多图标选择。请参阅 [API 提供商文档](/docs/api/providers.md)。
