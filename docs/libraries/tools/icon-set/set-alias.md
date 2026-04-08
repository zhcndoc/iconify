```yaml
title: 向图标集添加图标别名
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setAlias()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]setAlias()` 用于添加新的图标别名。

## 别名

图标别名是图标的另一个名称。它通常在重命名图标时使用，以便用户仍可通过旧名称访问该图标。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]parent`，`[type]string`。父项名称。

函数在成功时返回简单的 `true`，失败时返回 `false`。

## 示例

```yaml
src: libraries/tools/icon-set/set-alias.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/set-alias.json
    title: 'Result:'
```
