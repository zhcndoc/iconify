```yaml
title: 向图标集添加图标
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setIcon()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]setIcon()` 用于向图标集添加新图标或覆盖现有项。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string` 类型。图标名称。
- `[prop]icon`，`[type]ResolvedIconifyIcon` 类型。图标数据，与 `[type]IconifyIcon` 相同，但包含其他可选属性。

函数在成功时返回简单的 `true`，失败时返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/export.ts
title: 'example.ts'
```
