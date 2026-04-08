```yaml
title: 导入 Iconify 图标集
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# 导入 Iconify 图标集

本教程是 [Iconify Tools](../index.md) 中 [导入函数文档](./index.md) 的一部分。

没有专门用于导入图标集的函数，因为这是多余的。您只需从文件中读取内容，解析 JSON 数据，并创建一个新的 `[type]IconSet` 实例即可。

## 示例

```yaml
src: libraries/tools/import/json-min.ts
title: 'example.ts'
```
