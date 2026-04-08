```yaml
title: Iconify SVG Framework
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
functions:
  buildIcon: './build-icon.md'
  setFetch: './set-fetch.md'
```

# Iconify SVG 框架

`include notices/iconify2`

Iconify SVG 框架是一个易于使用的 JavaScript 库，用于渲染图标。

它将 SVG 的像素级完美渲染与字形字体的易用性相结合，同时提供比任何字形字体或 SVG 框架都更多的选择。

与图标字体不同，Iconify SVG 框架仅加载当前页面使用的图标，因此访问者不会为了显示几个图标而浪费带宽去加载成百上千个图标。

Iconify SVG 框架的设计初衷是尽可能易于使用。你可以像使用图标字体一样，通过 CSS 更改图标的尺寸和颜色。

## 使用方法

向 HTML 文档添加图标非常简单：

添加 script 标签以引入 Iconify SVG 框架。你可以将其放在 head 部分（在 `[tag]</head>` 之前），或放在页面末尾 `[tag]</body>` 之前：

```yaml
src: icon-components/iconify/script.html
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
```

要添加图标，请编写占位符 `[tag]span`（也可以是任何其他内联 DOM 元素）：

```yaml
src: icon-components/iconify/index-sample0.html
demo: true
demoFirst: false
```

要更改图标，请在 `[attr]data-icon` 属性中写入不同的图标名称，而不是 `[str]"fa-solid:home"`。

在 [图标集合](https://icon-sets.iconify.design/) 中查找图标。点击图标即可查看该图标的 HTML 代码。

### 依赖 API 的使用

Iconify SVG 框架从 Iconify API 获取图标数据。这使得它非常易于使用，因为开发者无需准备图标数据。缺点是，访问者必须在线才能获取图标数据。

## 它是如何工作的？

Iconify SVG 框架的工作原理是：定位图标占位符，从占位符中获取图标名称，从 [Iconify API](/docs/api/index.md) 获取图标数据，然后用 SVG 替换占位符。这一过程非常迅速，仅需极短的时间。

这种方法有哪些优势？

- 非常易于使用，就像图标字体一样。
- 无需将图标嵌入 HTML 代码中。从 Iconify API 获取的图标会被缓存，因此只需获取一次。如果将 SVG 嵌入 HTML 代码，则每次页面访问都需要发送给访问者。
- 仅从 API 获取当前页面中存在的图标。其他 SVG 框架和图标字体会加载整个图标集，从而浪费访问者的带宽。

有哪些缺点？

- 需要互联网连接。
- 使用公共 API 意味着你依赖第三方服务。不过，你可以选择自行托管 Iconify API，请参阅 [Iconify API 托管教程](/docs/api/hosting.md)。

如果你需要在不依赖 Iconify API 的情况下渲染图标，请[使用其他图标组件](/docs/usage/index.md)。

## 图标语法

元素必须使用 `[tag]span` 或 `[tag]i` 标签。

为了让 Iconify SVG 框架将元素视为图标占位符，该元素的 class 列表中必须包含 `[str]iconify` 或 `[str]iconify-inline`。

元素还必须具有 `[prop]data-icon` 属性，其值为图标名称。

```yaml
src: icon-components/iconify/index-sample1.html
demo: true
demoFirst: false
```

图标名称的语法为 `[attr]data-icon="prefix:icon-name"` 或 `[attr]data-icon="prefix-icon-name"`。如果前缀不包含 `[str]"-"`，则可以使用第二种语法，这是为了保持与图标字体的兼容性。

例如，`[attr]data-icon="fa-arrow-left"` 和 `[attr]data-icon="fa:arrow-left"` 是相同的（两者前缀均为 `[str]"fa"`），但 `[attr]data-icon="flat-color-icons:voice-presentation"` 和 `[attr]data-icon="flat-color-icons-voice-presentation"` 则不同（前者前缀为 `[str]"flat-color-icons"`，后者前缀为 `[str]"flat"`，而该前缀并不存在）。

## 颜色

你只能更改单色图标的颜色。某些图标（如 emoji）具有内置的调色板，无法更改。

要为单色图标添加颜色，只需更改文本颜色即可。

```html
<span class="iconify" data-icon="ion:umbrella-sharp" style="color: red"></span>
```

有关设置颜色的各种方法，请参阅[更改图标颜色教程](./color.md)。

## 尺寸

默认情况下，图标高度设置为 `[str]"1em"`，图标宽度会根据图标的宽高比动态调整。

这使得你可以通过更改样式表中的 `[attr]font-size` 来轻松调整图标大小，就像使用图标字体一样：

```html
<span
	class="iconify"
	data-icon="cil:locomotive"
	style="font-size: 24px;"
></span>
```

有关更改图标尺寸的各种方法，请参阅[更改图标尺寸教程](./dimensions.md)。

## 变换

图标可以旋转，也可以水平和/或垂直翻转。所有变换均以图标中心为基准进行。

这些不是 CSS 变换，变换是直接应用于 SVG 内部的。

更多详情请参阅[图标变换教程](./transform.md)。

## 函数 {#functions}

Iconify SVG 框架提供了许多函数，开发者可以使用它们来控制 SVG 框架：

- 从 API 加载图标。
- 添加自定义图标和图标集。
- 生成 SVG。
- 控制 MutationObserver。
- ……以及许多其他函数。

更多详情请参阅 [Iconify SVG 框架函数](./functions.md)。

## 服务端渲染 {#ssr}

SVG 框架可用于 Node.js 脚本中，但由于没有 DOM，它只能用于通过 `[func]buildIcon()` 等函数生成数据。

```yaml
include: icon-components/functions/set-fetch/nodejs
```

如何解决这个问题？

```yaml
include: icon-components/functions/set-fetch/svg-framework
```
