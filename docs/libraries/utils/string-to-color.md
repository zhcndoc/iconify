```yaml
title: stringToColor() in Iconify Utils
types:
  Color: './color.md'
```

# stringToColor()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]stringToColor()` 将字符串转换为 `[type]Color` 对象，出错时返回 `null`。

此函数可用于验证用户输入。它支持颜色关键字、十六进制颜色、RGB、HSL、LAB 和 LCH 颜色。不支持变量，因为该函数旨在解析 SVG，而 SVG 不应引用任何外部变量。

## 用法

函数包含一个参数：

- `[prop]value`，`[type]string` 类型。颜色字符串。

函数成功时返回 `[type]Color` 对象，出错时返回 `null`。

## 可能的值

函数可转换的颜色：

- 关键字，例如 `[str]red`。
- 十六进制颜色，例如 `[str]#ff0000`，也支持简写形式和带 Alpha 通道的格式。
- 几种函数表示法：
  - RGB：`[str]rgba(255, 0, 0, 1)`。
  - HSL：`[str]hsla(0, 50%, 50%, 1)`。
  - LAB：`[str]lab(50% 86 40 / 1)`。
  - LCH：`[str]lch(50% 86 40 / 1)`。
- 几个特殊关键字：
  - `[str]transparent`
  - `[str]none`
  - `[str]currentColor`

详情请参阅 `[type]Color` 类型说明。

## 示例

```yaml
src: libraries/utils/string-to-color.ts
title: 'demo.ts'
```
