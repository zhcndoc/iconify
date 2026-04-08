```yaml
title: 向图标集添加项目
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconSetIconEntry: './entries.md#type'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setItem()

此函数是 [Iconify Tools](../index.md) 中 `[type]IconSet` 类的一部分。

函数 `[func]setItem()` 用于向图标集添加新项目或覆盖现有项目。如果该项目是别名或变体，函数会检查其父图标。

此函数使用起来并不简单。建议优先使用以下更简单的函数：

- 使用 `[func]setIcon()` 设置图标。
- 使用 `[func]setVariation()` 设置图标变体。
- 使用 `[func]setAlias()` 设置图标别名。

## 用法

该函数具有以下参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]item`，`[type]IconSetIconEntry`。图标数据。

函数在成功时返回 `true`，失败时返回 `false`。
