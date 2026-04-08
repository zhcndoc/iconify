```yaml
title: 更改图标调色板
functions:
  parseColors: '/docs/libraries/tools/icon/colors.md'
```

# 更改图标调色板

本文是 [SVG 清理文章](./index.md) 的一部分。

在初始的 [清理和验证](./cleanup.md) 之后，会更改图标调色板。

图标只能分为两种类型：

- 具有硬编码调色板的图标。
- 单色图标，仅包含一种颜色。

## 带调色板的图标 {#palette}

某些图标具有硬编码的调色板：

`include articles/icon-palette`

这些图标的颜色无法通过样式表轻松更改。

在清理此类图标时，解析器会验证图标是否未跟随系统默认颜色（`[attr]fill` 为黑色），并且不包含 `[prop]currentColor`。

## 单色图标 {#monotone}

大多数图标是单色的。它们只有一种颜色，且该颜色可以被更改。

`include articles/icon-monotone`

在解析单色图标时，颜色会被更改为 `[prop]currentColor`，以确保图标跟随文本颜色。这样，无论图标使用 `[prop]fill` 还是 `[prop]stroke`，都可以轻松更改任何图标的颜色：

```css
svg {
	color: red;
}
```

解析此类图标并不容易。当从编辑器导出图标时，颜色通常不会设置为 `[prop]currentColor`。通常，单色图标的形状会使用黑色或系统默认颜色。

有时图标还包含白色背景，需要将其移除。解析器也会一并清理。

### 系统颜色

通常，使用 `[prop]fill` 的图标没有任何颜色设置：

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"/>
</svg>
```

这些图标中的颜色本意是通过更改 `[prop]fill` 属性来修改的：

```css
svg {
	fill: red;
}
```

问题在于，许多图标使用 `[prop]stroke` 而不是 `[prop]fill`，因此这种方法不适用于许多图标集，故无法采用。

解析器会修改这些图标，在使用系统默认 `[prop]fill` 的元素上将 `[prop]fill` 设置为 `[prop]currentColor`：

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" fill="currentColor"/>
</svg>
```

### 自定义颜色

通常，当你从编辑器导出图标时，它会使用你设计时所用的颜色，通常是黑色：

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 12H19" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
```

解析器会将其更改为 `[prop]currentColor`：

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 12H19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### 结果

更改后，所有使用 `[prop]fill` 的形状其 `[prop]fill` 都会被设置为 `[prop]currentColor`，所有使用 `[prop]stroke` 的形状其 `[prop]stroke` 也会被设置为 `[prop]currentColor`。这意味着图标将使用与文本相同的颜色，并且可以像文本一样进行样式设置：

```css
svg {
	color: red;
}
```

## 混合调色板与 currentColor

不允许混合使用 `[prop]currentColor` 和硬编码调色板的图标。

此类图标无法在样式表中使用。在样式表中，单色图标被用作遮罩，而带调色板的图标被用作背景。当图标组件在图标中检测到 `[prop]currentColor` 时，它会假定该图标是单色的并将其用作遮罩，从而导致显示错误。

此外，此类图标还假定 `[prop]currentColor` 只能是浅色或深色，或者不能是某种特定的色调。这纯粹是一种糟糕的设计。

## 代码

调色板使用 [Iconify Tools](/docs/libraries/tools/index.md) 中的 `[func]parseColors()` 函数进行解析。
