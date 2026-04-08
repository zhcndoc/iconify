```yaml
title: Iconify Utils 中的 calculateSize()
functions:
  iconToSVG: './icon-to-svg.md'
```

# calculateSize()

此函数属于 [Iconify Utils 包](./index.md)。

当仅提供一个属性时，函数 `[func]calculateSize()` 用于计算图标的 `[prop]width` 或 `[prop]height`。

例如，如果你有一个带有 `[attr]viewBox="0 0 36 24"` 的图标，且 `[prop]height` 设置为 `[str]1em`，则此函数用于计算 `[prop]width` 属性，其结果将为 `[str]1.5em`。

该函数由 `[func]iconToSVG()` 调用以生成属性。它也可用于图标选择器等场景，当用户输入 `[prop]height` 值时，你可以显示 `[prop]width` 值的提示。

## 用法

该函数包含以下参数：

- `[prop]size`，`[type]string | number`。单个维度，例如 `[prop]height`。
- `[prop]ratio`，`[type]number`。尺寸比例。如果在第一个参数中提供 `[prop]height`，则第二个参数应为图标 `[attr]viewBox` 的 `[prop]width / height`。如果在第一个参数中提供 `[prop]width`，则第二个参数应为图标 `[attr]viewBox` 的 `[prop]height / width`。
- `[prop]precision`，`[type]number`。可选参数，默认值为 `[num]100`。

函数返回计算后的尺寸。

## 示例

```yaml
src: libraries/utils/calculate-size.ts
title: 'examples.ts'
extra:
  - src: libraries/utils/calculate-size.txt
    title: 'Result:'
```
