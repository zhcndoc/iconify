```yaml
title: 导出 Iconify 图标集
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: '../icon-set/export.md'
```

# 导出 Iconify 图标集

本教程是 [Iconify Tools](../index.md) 中 [导出函数文档](./index.md) 的一部分。

`[type]IconSet` 实例包含 `[func]export()` 函数，用于将图标集导出为 `[type]IconifyJSON` 格式。

然后，你需要使用 `[func]JSON.stringify()` 将其转换为字符串并保存到文件中。

## 示例

```yaml
src: libraries/tools/export/json.ts
title: 'example.ts'
```
