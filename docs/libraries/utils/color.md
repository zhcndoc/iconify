```yaml
title: Color Type
```

# 颜色类型

`[type]Color` 类型用于 [Iconify Utils](./index.md) 中解析颜色的函数。

你可以在 [Iconify Utils 源代码](https://github.com/iconify/iconify/tree/main/packages/utils) 的 `[file]src/colors/types.ts` 中找到此类型。

该类型是一个对象，其中 `[prop]type` 属性表示它属于哪种颜色类型，随后是该类型对应的可选属性。

浏览器支持各种复杂的颜色，这些颜色可能包含 CSS 变量和函数。
Iconify Utils 的解析器非常基础，仅支持多年来所有浏览器都已广泛支持的常用格式。

## RGB

RGB 颜色，通常由十六进制颜色（如 `[str]#ff8080`）、颜色关键字（如 `[str]red`）或 RGBA 颜色（如 `[str]rgba(255, 128, 128, 0.5)`）转换而来。

它具有以下属性：

- `[prop]type` = `[str]rgb`。
- `[prop]r`、`[prop]g`、`[prop]b` 表示红、绿、蓝颜色分量（`[num]0` - `[num]255`）。
- `[prop]alpha` 表示透明度（`[num]0` - `[num]1`）。

## HSL

HSL 颜色，通常由 HSL 或 HSLA 颜色（如 `[str]hsla(90, 50%, 50%, 0.5)`）转换而来。

它具有以下属性：

- `[prop]type` = `[str]hsl`。
- `[prop]h` 色相，可以是任意数字，但通常位于 `[num]0` - `[num]360` 范围内。
- `[prop]s`、`[prop]l` 表示饱和度和亮度分量（`[num]0` - `[num]100`）。
- `[prop]alpha` 表示透明度（`[num]0` - `[num]1`）。

## LAB

Lab 颜色目前正由浏览器逐步实现，由类似 `[str]lab(50% 50 50 / 1)` 的颜色字符串转换而来。

它具有以下属性：

- `[prop]type` = `[str]lab`。
- `[prop]l` 表示亮度（`[num]0` - `[num]100`）。
- `[prop]a`、`[prop]b` 表示在 Lab 色彩空间中沿 `[prop]a` 和 `[prop]b` 轴的距离。
- `[prop]alpha` 表示透明度（`[num]0` - `[num]1`）。

## LCH

LCH 颜色目前正由浏览器逐步实现，由类似 `[str]lch(50% 50 50 / 1)` 的颜色字符串转换而来。

它具有以下属性：

- `[prop]type` = `[str]lab`。
- `[prop]l` 表示亮度（`[num]0` - `[num]100`）。
- `[prop]c` 表示色度，通常位于 `[num]0` - `[num]230` 范围内，但也可能更高。
- `[prop]h` 表示色相角。
- `[prop]alpha` 表示透明度（`[num]0` - `[num]1`）。

## 关键字

部分关键字拥有自己的类型，用于表示特殊颜色。

它们的存在是因为颜色解析函数可用于清理和解析各种图标，而在这些场景中，识别 `[str]currentColor` 和 `[str]none` 等值可能非常重要。

### transparent

透明颜色具有一种特殊类型，仅包含一个属性：

- `[prop]type` = `[str]transparent`。

在转换类似 `[str]rgba(0, 0, 0, 0)` 的透明颜色时，
转换函数将返回 `[prop]transparent` 类型，从而更便于比较各种颜色。

### none

`[str]none` 同样具有一种特殊类型，仅包含一个属性：

- `[prop]type` = `[str]none`。

### currentColor

`[str]currentColor` 同样具有一种特殊类型，仅包含一个属性：

- `[prop]type` = `[str]current`。

## 其他颜色

该类型旨在解析 SVG 中的基本颜色，而非进行完整的颜色解析，
因此它仅限于简单颜色以及在解析图标时至关重要的关键字。
