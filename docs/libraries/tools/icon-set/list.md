```yaml
title: 列出图标集中的图标
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: './merge.md'
```

# list()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]list()` 用于列出图标集中的所有图标。

## 用法

该函数包含以下参数：

- `[prop]type`，`[type]string[]`。可选。要列出的图标类型，默认为 `[js]['icon', 'variation']`。

函数返回图标名称数组 `[type]string[]`。

## 图标类型

`include libraries/tools/icon-set/icon-types`

## 示例

```yaml
src: libraries/tools/icon-set/list.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/list.json
    title: 'Result of export():'
```
