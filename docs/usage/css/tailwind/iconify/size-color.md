```yaml
title: 在 Tailwind CSS 的 Iconify 中更改图标大小和颜色
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# 在 Tailwind CSS 的 Iconify 中更改图标大小和颜色

本文档说明了如何为 `[func]addIconSelectors` 插件更改图标的大小和颜色。

## 图标颜色

图标分为两种类型：
- 具有硬编码调色板的图标。
- 单色图标。
  
请参阅 [CSS 中单色图标的工作原理](../../index.md#monotone)（链接教程中的 HTML 语法有所不同 - 该教程并非专为此插件编写）。

### 单色图标

要更改单色图标的颜色，请将其渲染为遮罩图像并更改文本颜色：

```html
<span class="iconify mdi-light--home text-blue-600"></span>
```

### 带调色板的图标

具有硬编码调色板的图标并非设计为可自定义的。
不过，`[func]addIconSelectors` 插件允许你通过 [`[prop]customise`](./customise.md) 选项来更改颜色。

例如，此代码会将 Twitter 表情符号中的黄色背景更改为红色：

```js
addIconSelectors({
    prefixes: [
        // 渲染 'twemoji' 图标集
        'twemoji',
        // 将 'twemoji' 渲染为 'twemoji-red' 并进行自定义颜色更改 
        {
            // 通过设置 'prefix' 属性更改图标集前缀
            prefix: 'twemoji-red',
            
            // 从 '@iconify-json/twemoji' 包解析图标集的位置 
            // 下方也是相同的代码，使用 '@iconify/json' 包
            source: require.resolve('@iconify-json/twemoji/icons.json'),
            // source: require.resolve('@iconify/json/json/twemoji.json'),
            
            // 仅过滤包含 'face' 的图标以提高插件性能
            icons: (name) => name.includes('face'),
            
            // 更改颜色
            customise: (content, name) => content.replaceAll('#ffcc4d', '#ff9667'),
        },
    ],
})
```

然后你就可以同时使用原始图标和自定义图标：

```html
<span class="iconify-color twemoji--winking-face"></span>
<span class="iconify-color twemoji-red--winking-face"></span>
```

有关详细信息和使用示例，请参阅 [customise 选项文档](./customise.md)。

另请参阅 [prefixes 选项文档](./prefixes.md) 以了解上述配置的工作原理。

## 图标大小

默认情况下，图标渲染为 `[num]1em` x `[num]1em` 的正方形。

要更改图标大小，你可以更改字体大小：

```html
<span class="iconify mdi-light--home text-2xl"></span>
```

由于包含尺寸的通用选择器被视为 Tailwind 组件，
你也可以设置宽度/高度来调整图标大小：

```html
<span class="iconify mdi-light--home w-12 h-12"></span>
```

请确保宽度和高度相同（请参阅下方的 `[prop]square` 选项）。
某些浏览器（如 Safari）在使用 SVG 作为遮罩图像时无法保持比例，
因此使用不同的宽度和高度值可能会导致部分用户获得意外的体验。

此外，你可以使用 `[prop]scale` 选项更改默认大小。

### 非正方形图标

默认情况下，所有图标都渲染为正方形图标。这使得调整图标大小变得很容易。

但是，如果你想按原样渲染非正方形图标，可以通过将 `[prop]square` 选项更改为 `false` 来禁用此行为： 

```js
addIconSelectors({
    prefixes: ['fa6-regular'],
    square: false,
})
```

但请注意，这可能会使调整图标大小变得稍微复杂一些。
如果你正在设置 `[prop]width` 和 `[prop]height`，请确保宽高比与图标的宽高比匹配。

### 缩放图标

`[prop]scale` 选项会将默认图标大小从 `[num]1em` 更改。

以下配置

```js
addIconSelectors({
    prefixes: ['mdi-light'],
    scale: 1.2,
})
```

将默认大小更改为 `[num]1.2em` x `[num]1.2em` 的正方形。

你可以像上面的示例一样使用字体大小进一步调整图标大小，但图标会放大 1.2 倍。

### 固定大小

如果你想将默认图标大小设置为固定的像素大小， 
例如 `[num]24` 以渲染专为 `[num]24` x `[num]24` 设计的图标，
你可以使用 `[prop]extraMaskRules` 或 `[prop]extraBackgroundRules` 选项以像素为单位设置宽度和高度：

```js
addIconSelectors({
    maskSelector: '.material-icon',
    extraMaskRules: {
        'width': '24px',
        'height': '24px',
    },
    backgroundSelector: '.material-icon-color',
    extraBackgroundRules: {
        'width': '24px',
        'height': '24px',
    },
})
```

### 多种尺寸

如果你想在同一个项目中同时使用 `[num]1em` 图标、无尺寸图标和固定像素大小的图标，该怎么办？

你可以使用具有不同设置和不同选择器的多个插件实例：

```js
plugins: [
    // 默认选项，1em 大小
    addIconSelectors(['mdi-light']),
    // 固定大小
    addIconSelectors({
        // 设置固定大小
        maskSelector: '.material-icon',
        extraMaskRules: {
            'width': '24px',
            'height': '24px',
        },
        // 本演示不使用背景选择器 - 演示仅使用单色图标
        backgroundSelector: '',
    }),
]
```

```html
<p>
  1em 大小的图标： 
  <span class="iconify mdi-light--home"></span>
</p>
<p>
  使用自定义宽度/高度： 
  <span class="iconify mdi-light--home h-12 w-12"></span>
</p>
<p>
  24px 图标：
  <span class="material-icon mdi-light--home"></span>
</p>
```

由于所有插件实例中的图标数据都是相同的，因此无需更改图标选择器，且 `[prop]prefixes` 选项只需使用一次。这减少了重复并加快了解析速度。
