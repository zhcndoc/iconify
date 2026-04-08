特殊关键字 `[str]none` 和 `[str]unset` 会从生成的 SVG 中移除尺寸。

这将生成一个没有尺寸的图标。你应该在 CSS 中设置图标的 `[prop]width` 和 `[prop]height`。

只需将其中一个尺寸设置为 `[str]unset`，另一个尺寸也会自动设置为 `[str]unset`，除非你另行指定。
