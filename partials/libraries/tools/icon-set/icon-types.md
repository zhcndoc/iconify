```yaml
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
```

`[type]IconSet` 中包含 3 种类型的图标项：`[str]icon`、`[str]variation`、`[str]alias`。

`[str]icon` 表示一个完整的唯一图标。

`[str]variation` 表示另一个图标的变体。它具有以下属性：

- `[prop]parent`，`[type]string`。父图标的名称。

以及至少以下变换之一：

- `[prop]rotate` 旋转 `[num]90`、`[num]180` 或 `[num]270` 度。
- `[prop]hFlip` 水平翻转。
- `[prop]vFlip` 垂直翻转。

变体使得创建图标克隆变得很容易，例如在创建 `[icon]arrow-right` 之后创建 `[icon]arrow-left`。

`[str]alias` 是图标的别名。它具有以下属性：

- `[prop]parent`，`[type]string`。父图标的名称。

可以创建别名来为图标提供不同的名称。如果您重命名了某个图标，可以使用别名来允许用户继续使用旧名称。
