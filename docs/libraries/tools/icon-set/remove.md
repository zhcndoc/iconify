```yaml
title: 从图标集中移除图标
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
```

# remove()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]remove()` 用于删除图标。

## 用法

该函数包含以下参数：

- `[type]name`，`[type]string`。图标名称。
- `[type]removeDependencies`，`[type]boolean | string`。可选，默认为 `true`。指定如何处理以被删除图标为父图标的别名和变体。

函数返回已删除项目的数量（`[type]number`）。

`[prop]removeDependencies` 属性的可能取值：

- `true` 删除图标、所有别名和变体。
- `false` 仅删除图标，不更改别名和变体。
- `[type]string` 删除图标，并将别名和变体的 `[prop]parent` 属性更改为提供的值。

## 示例

```yaml
src: libraries/tools/icon-set/remove.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/remove.json
    title: 'Result:'
```
