```yaml
title: Iconify Utils 中的 compareColors()
types:
  Color: './color.md'
```

# compareColors()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]compareColors()` 用于比较两个 `[type]Color` 对象，若颜色相同则返回 `true`。

此函数可用于解析 SVG 中的颜色。当同一种颜色以不同方式表示时，此函数可帮助找出重复的颜色。

## 用法

该函数包含两个参数：

- `[prop]color1`，`[type]Color`。第一个颜色。
- `[prop]color2`，`[type]Color`。第二个颜色。

若颜色相同，函数返回 `true`，否则返回 `false`。

## 示例

```yaml
src: libraries/utils/compare-colors.ts
title: 'demo.ts'
```
