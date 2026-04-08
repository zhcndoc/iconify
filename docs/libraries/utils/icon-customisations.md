```yaml
title: IconifyIconCustomisations 类型
types:
  IconifyIconSize: './icon-customisations.md#icon-size'
functions:
  defaultIconCustomisations: './default-icon-customisations.md'
  iconToSVG: './icon-to-svg.md'
  mergeCustomisations: './merge-customisations.md'
```

# IconifyIconCustomisations 类型

`[type]IconifyIconCustomisations` 类型用于 [Iconify Utils](./index.md) 中生成 SVG 的函数。

你可以在 [Iconify Utils 源代码](https://github.com/iconify/iconify/tree/main/packages/utils) 的 `[file]src/customisations/defaults.ts` 文件中找到此类型。

该类型是一个对象，包含以下属性，已按组划分：

## 尺寸 {#icon-size}

图标尺寸的类型为 `[type]IconifyIconSizeCustomisations`，包含 2 个属性：

- `[prop]width`，`[type]IconifyIconSize` 图标宽度。
- `[prop]height`，`[type]IconifyIconSize` 图标高度。

类型 `[type]IconifyIconSize` 是 `[type]null | string | number` 的别名。可能的值包括：

- `[type]number` 以像素为单位的数值。
- `[type]string` 带单位的数值，例如 `[str]1em`。

有几个特殊关键字：

- `[str]auto` 将尺寸设置为图标 `[attr]viewBox` 中的值。因此，如果图标的 `[attr]viewBox="0 0 24 24"`，将 `[prop]width` 设置为 `[str]auto` 会将其设为 `[num]24`。
- `[str]unset` 和 `[str]none` 指示函数跳过该属性。这使得在 CSS 中使用 `[prop]width` 和 `[prop]height` 变得很容易。

在计算图标尺寸时，通常只需设置一个尺寸（通常是 `[attr]height`）。另一个尺寸将根据图标的比例自动计算。

如果 `[prop]width` 和 `[prop]height` 均未设置或为 `null`，默认情况下 `[prop]height` 将设置为 `[str]1em`。

## 变换

图标可以进行变换。变换是通过旋转或翻转 SVG 内部的内容来完成的，这些不是 CSS 变换。用于变换图标的属性包括：

- `[prop]hFlip`，`[type]boolean`。水平翻转图标。
- `[prop]vFlip`，`[type]boolean`。垂直翻转图标。
- `[prop]rotate`，`[type]number`。以 90 度为步长旋转图标。`[num]1` 表示 `[prop]90deg`，`[num]2` 表示 `[prop]180deg`，`[num]3` 表示 `[prop]270deg`。旋转仅限于这些角度，因为这些角度能保证图标内容不会超出 `[prop]viewBox` 边界。如果你想使用其他角度旋转，请使用 CSS 旋转来旋转包含边界框的整个图标。

如果你只想从自定义配置中提取变换属性，请使用类型 `[type]IconifyTransformations`。

## FullIconifyIconCustomisations 类型

类型 `[type]FullIconifyIconCustomisations` 与 `[type]IconifyIconCustomisations` 相同，但所有属性都是必需的。

使用 `[func]defaultIconCustomisations` 常量获取所有默认值，并将其与你的值合并：

```yaml
src: libraries/utils/icon-customisations.ts
title: 'example.ts'
```

然后，结果可以与 `[func]mergeCustomisations()` 函数一起使用。

另请参阅 `[func]defaultIconCustomisations` 常量。
