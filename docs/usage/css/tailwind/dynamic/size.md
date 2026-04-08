```yaml
title: 在 Tailwind CSS 的 Iconify 中更改图标大小和颜色
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addDynamicIconSelectors: './index.md'
```

# 在 Tailwind CSS 的 Iconify 中更改图标大小

本文档说明了如何为 `[func]addDynamicIconSelectors` 插件更改图标的大小和颜色。

## 图标大小

默认情况下，图标以 `[num]1em` 的高度进行渲染。

宽度会根据图标的宽高比自动设置。
尽管绝大多数图标都是正方形的，因此通常宽度与高度相同。

要更改图标大小，您可以更改字体大小：

```html
<span class="icon-[mdi-light--home] text-2xl"></span>
```

此外，您还可以：
- 使用 `[prop]scale` 选项更改默认大小。
- 将 `[prop]scale` 设置为 `[num]0` 以移除尺寸，并使用宽度和高度来调整图标大小。

### 缩放图标

选项 `[prop]scale` 用于更改默认的 `[num]1em` 图标大小。

以下配置

```js
addDynamicIconSelectors({
    scale: 1.2,
})
```

会将默认高度更改为 `[num]1.2em`。

您可以像上面的示例一样使用字体大小进一步调整图标尺寸，但图标会放大 1.2 倍。

### 自定义大小 {#custom}

要使用宽度和高度来调整图标尺寸，您需要将 `[prop]scale` 设置为 `[num]0`：

```js
addDynamicIconSelectors({
    scale: 0,
})
```

如果这样做，图标将不会具有宽度和高度，因此您必须为每个图标单独设置尺寸：

```html
<span class="icon-[mdi-light--home] h-12 w-12"></span>
```

### 多种尺寸

如果您想在同一个项目中同时使用 `[num]1em` 的图标、无固定尺寸的图标以及固定像素尺寸的图标，该怎么办？

您可以使用具有不同设置和不同选择器的多个插件实例：

```js
plugins: [
    // 默认选项，1em 高度
    addDynamicIconSelectors(),
    // 无尺寸
    addDynamicIconSelectors({
        // 更改前缀
        prefix: 'icon-nosize',
        // 禁用宽度和高度 
        scale: 0,
    })
]
```

```html
<p>
  1em 尺寸的图标： 
  <span class="icon-[mdi-light--home]"></span>
</p>
<p>
  无尺寸图标（使用自定义宽/高）： 
  <span class="icon-nosize-[mdi-light--home] h-12 w-12"></span>
</p>
```

请注意，插件配置中的 `[prop]prefix` 选项末尾没有 `[str]-`，但在 HTML 中需要加上。
这是由于 Tailwind CSS 对动态选择器的要求所致。
请确保在 HTML 中不要忘记添加 `[str]-`。
