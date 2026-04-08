特殊关键字 `[str]auto` 会将尺寸设置为 `[attr]viewBox` 中的值。这使得按照图标的原始设计进行渲染变得十分简单。

只需将其中一个维度设置为 `[str]auto`，另一个维度也会自动设为 `[str]auto`，除非你另行指定。

例如，若 `[attr]viewBox="0 0 24 24"` 且 `[prop]height` 设置为 `[str]auto`，则 `[prop]height` 将被设置为 `[num]24`。
