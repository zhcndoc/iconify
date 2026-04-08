```yaml
title: 在 Tailwind CSS 的 Iconify 中更改图标大小和颜色
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
functions:
  addIconSelectors: "./index.md"
```

# 在 Tailwind CSS 的 Iconify 中更改图标大小和颜色

本文档说明了如何为 [Tailwind CSS 4 的 Iconify 插件](./index.md) 更改图标的大小和颜色。

## 图标颜色

图标分为两种类型：

- 具有硬编码调色板的图标。
- 单色图标。

请参阅 [CSS 中单色图标的工作原理](../../index.md#monotone)（链接教程中的 HTML 语法有所不同 - 该教程并非专为此插件编写）。

### 动态选择器

使用动态选择器插件时，它会自动为每个图标设置渲染模式。你无法手动控制。

- 具有硬编码调色板的图标将作为背景图像渲染，保留图标的原始颜色。
- 单色图标将作为遮罩图像渲染，因此图标会使用文本颜色进行渲染。

例如，`[str]icon-[mdi-light--home]` 将作为遮罩图像渲染，因为该图标是单色图标。

### 纯净选择器

使用纯净选择器时，你需要通过添加以下类名之一来指定图标的渲染方式：

- `[str]iconify` 类名，将图标作为遮罩图像渲染，使图标使用文本颜色。
- `[str]iconify-color` 类名，将图标作为背景图像渲染。

#### 设置默认渲染模式

你可以选择将其中一种模式设置为默认值。以下代码允许你在使用 `mdi` 图标集中的任何图标时，省略添加 `[str]iconify` 类。

```css
[class*="mdi--"]:not([class*="iconify-color"]) {
    @apply iconify;
  }
```

#### 单色图标

要更改单色图标的颜色，请将其作为遮罩图像渲染并更改文本颜色：

```html
<span class="iconify mdi-light--home text-blue-600"></span>
```

#### 带调色板的图标

目前无法自定义具有硬编码调色板的图标。

```html
<span class="iconify-color twemoji--winking-face"></span>
```

不过，如果你使用 [Tailwind CSS 3 的插件](../iconify/customise.md)，则可以实现自定义颜色。
它使用 JavaScript 进行配置，这比 Tailwind CSS 4 的 CSS 配置提供了更多的可能性。

## 图标大小

默认情况下，图标渲染为 `[num]1em` x `[num]1em` 的正方形。

要更改图标大小，你可以更改字体大小：

```html
<span class="iconify mdi-light--home text-2xl"></span>
```

因为包含尺寸的通用选择器被视为 Tailwind 组件，
你也可以通过设置宽度/高度来调整图标大小：

```html
<span class="iconify mdi-light--home w-12 h-12"></span>
```

确保宽度和高度相同（请参阅下方的 `[prop]square` 选项）。
某些浏览器（如 Safari）在使用 SVG 作为遮罩图像时无法保持比例，
因此使用不同的宽度和高度值可能会导致部分用户获得意外的体验。

此外，你可以通过使用 `[prop]scale` 选项来更改默认大小。

### 非正方形图标

默认情况下，所有图标都渲染为正方形图标。这使得调整图标大小变得很容易。

但是，如果你想按原样渲染非正方形图标，可以通过将 `[prop]square` 选项更改为 `false` 来禁用此行为：

```css
@plugin "@iconify/tailwind4" {
  square: false;
}
```

但请注意，这可能会使调整图标大小变得稍微复杂一些。
如果你正在设置 `[prop]width` 和 `[prop]height`，请确保宽高比与图标的原始比例匹配。

### 缩放图标

选项 `[prop]scale` 会更改默认的 `[num]1em` 图标大小。

以下配置

```css
@plugin "@iconify/tailwind4" {
  scale: 1.2;
}
```

会将默认大小更改为 `[num]1.2em` x `[num]1.2em` 的正方形。

你可以像上面的示例一样使用字体大小进一步调整图标大小，但图标会放大 1.2 倍。
