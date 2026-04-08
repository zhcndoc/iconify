```yaml
title: Iterate icons in icon set
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: './merge.md'
```

# forEach()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]forEach()` 会为图标集中的所有图标执行自定义回调。

该函数支持异步回调。 

如果你使用同步回调，可以将该函数视为同步函数，或者使用 `[func]forEachSync()` 别名。

## 用法

该函数包含以下参数：

- `[prop]callback`。回调函数。见下文。
- `[prop]type`，`[type]string[]`。可选。要遍历的图标类型，默认为 `[js]['icon', 'variation', 'alias']`（所有项目）。

## 回调

回调可以是同步或异步的。它包含以下参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]type`，`[type]string`。图标类型（见下文）。

如果回调返回 `false`，函数将停止遍历图标。

## 图标类型

`include libraries/tools/icon-set/icon-types`

## 示例

```yaml
src: libraries/tools/icon-set/for-each.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/for-each.txt
    title: 'Result:'
```
