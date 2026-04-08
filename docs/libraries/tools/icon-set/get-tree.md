```yaml
title: 从图标集中获取图标依赖树
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
```

# getTree()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]getTree()` 返回图标集中每个图标的父图标列表，对于无法解析的图标则返回 `null`。

当您需要导出图标子集并确定需要导出哪些图标时，此函数非常有用；它也可用于找出哪些图标具有无效的父图标。

## 用法

该函数具有以下可选参数：

- `[prop]names`，`[type]string[]`。要检查的图标列表。如果未设置，将检查所有图标。

函数将返回一个对象，其中键为图标名称，值为：

- 如果图标无法解析，则为 `null`。
- `[type]string[]` 父图标名称数组，不包含该图标本身。第一个条目是直接父图标。

## 示例

```yaml
src: libraries/tools/icon-set/get-tree.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/get-tree.json
    title: 'Result:'
```
