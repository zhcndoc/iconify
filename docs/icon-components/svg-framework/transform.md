```yaml
title: 在 Iconify SVG 框架中变换图标
```

# 变换

本教程是 [Iconify SVG 框架教程](./index.md) 的一部分。

`include icon-components/transform-intro`

## CSS 与 Iconify 变换 {#css}

`include icon-components/transform-compare`

示例：

```yaml
src: icon-components/common/rotate-comparison.html
demo: true
demoHint: 使用 box-shadow 显示图标尺寸
class: highlight-box
```

在上面的示例中，第一个图标使用 `[attr]data-rotate` 属性进行旋转，第二个图标使用 CSS 进行旋转。第一个图标保持了 1em 的高度，而第二个图标变得比预期更高。

有时你确实需要 CSS 变换所提供的行为。此时，你仍然可以通过将其添加到内联样式中来使用 CSS 变换。

## 翻转

你可以水平或垂直翻转图标。

为此，请添加带有逗号分隔值的 `[attr]data-flip` 属性。可能的值包括：

- `[str]horizontal`：水平翻转图标。
- `[str]vertical`：垂直翻转图标。

示例：

```yaml
src: icon-components/common/flip.html
demo: true
```

## 旋转

你可以将图标旋转 `[num]90`、`[num]180` 和 `[num]270` 度。

为此，请添加 `[attr]data-rotate` 属性。可能的值包括：

- `[str]90deg`、`[str]1`：旋转 `[num]90` 度。
- `[str]180deg`、`[str]2`：旋转 `[num]180` 度。
- `[str]270deg`、`[str]3`：旋转 `[num]270` 度。

示例：

```yaml
src: icon-components/common/rotate.html
demo: true
```

## 旋转与翻转

你可以在图标上同时使用旋转和翻转。图标会先进行翻转，然后再进行旋转。
