```yaml
title: Exporting Icons as SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  toString: '../icon-set/to-string.md'
  forEach: '../icon-set/for-each.md'
```

# 导出 SVG

本教程属于 [Iconify Tools](../index.md) 中的 [导出函数文档](./index.md) 部分。

`[type]IconSet` 实例提供了 `[func]toString()` 函数，可将图标导出为 `[type]string` 格式。您可以使用 `[func]forEach()` 遍历图标集中的所有图标。

## 示例

```yaml
src: libraries/tools/export/svg.ts
title: 'example.ts'
```
