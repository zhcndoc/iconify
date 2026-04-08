`[type]IconifyIconCustomisations` 类型是一个对象，包含以下可选属性，分为几个类别。

垂直对齐：

- `[prop]inline`，`[type]boolean`。若启用，会在样式中添加 `[html]vertical-align: -0.125em`，使图标渲染于基线下方。默认值为 `false`。

图标尺寸：

- `[prop]width`，`[type]string | number | null`。图标宽度。默认值为 `null`。
- `[prop]height`，`[type]string | number | null`。图标高度。默认值为 `null`。

有几个关键字可用于 `[prop]width` 和 `[prop]height`：

- `[str]auto` 将尺寸设置为 `[attr]viewBox` 中找到的原始图标尺寸。
- `[str]unset` 和 `[str]none` 会从 SVG 中移除尺寸。

如果两个尺寸均未设置，`[prop]height` 将默认为 `[str]1em`。

只需设置一个尺寸（例如 `[prop]height`）即可。另一个尺寸将根据图标的宽高比自动计算。若使用关键字，另一个尺寸也将设置为相同的关键字。

变换：

- `[prop]hFlip`，`[type]boolean`。水平翻转图标。默认值为 `[bool]false`。
- `[prop]vFlip`，`[type]boolean`。垂直翻转图标。默认值为 `[bool]false`。
- `[prop]rotate`，`[type]number`。以 90 度为增量进行旋转。默认值为 `[num]0`。
