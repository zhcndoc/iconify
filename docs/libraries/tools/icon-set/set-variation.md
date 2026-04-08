```yaml
title: 向图标集添加图标变体
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
  CommonIconProps: './entries.md#common'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setVariation()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]setVariation()` 向图标集添加新的图标变体，或覆盖现有项。

## 变体

图标变体是基于其他图标创建的项，但至少应用了一种变换。

例如，在启用 `[prop]hFlip` 的情况下，`[str]arrow-left` 可以是 `[str]arrow-right` 的变体。

变体使得维护基于其他图标的图标变得更加容易，并减少内容重复。

## 用法

该函数具有以下参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]parent`，`[type]string`。父项名称。
- `[prop]props`，`[type]CommonIconProps`。图标变换。

函数在成功时返回简单的 `true`，失败时返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/set-alias.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/set-alias.json
    title: 'Result:'
```
