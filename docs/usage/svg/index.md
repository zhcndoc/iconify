```yaml
title: 如何在 HTML 中嵌入 SVG
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
functions:
  iconToSVG: '/docs/libraries/utils/icon-to-svg.md'
  iconToHTML: '/docs/libraries/utils/icon-to-html.md'
  parseIconSet: '/docs/libraries/utils/parse-icon-set.md'
  getIconData: '/docs/libraries/utils/get-icon-data.md'
```

# 如何在 HTML 中嵌入 SVG

在 HTML 中使用 SVG 需要将 SVG 代码直接嵌入到文档中。

如果你想跳过关于其工作原理的长篇解释，可以[直接跳转到可用工具列表](#tools)。

## 优势

与[在 CSS 中使用 SVG](../css/index.md)相比，在 HTML 中使用 SVG 既有优势也有劣势。

优势：

- 你可以轻松定位图标内部的元素，例如修改 `[prop]stroke-width` 或控制 SVG 动画。

然而，它也有明显的劣势：

- 每个图标可能会产生多个条目。虽然这可以通过 SVG 精灵图（sprites）来解决，但并非总是可行。
- DOM 树层级较深且文档体积较大。

### 安全性

此外，还可能存在安全隐患。

绝对不应将来自不可信来源的 SVG 嵌入到 HTML 中。
SVG 可能包含脚本或指向外部资源（字体、其他图片）的链接，这些资源有可能被用于跟踪。

Iconify 包中的所有图标都经过了非常严格的验证，因此不包含任何潜在的有害内容，
例如脚本和外部资源。 

## 使用方法

你只需在 HTML 中需要使用的地方插入 `[tag]svg` 元素即可。

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
</svg>
```

### 外部图片

解决 DOM 树层级深和文档体积大问题的一个可行方案是，使用 `[tag]img` 或 `[tag]picture` 标签链接到外部 SVG 文件。

然而，这种方法不适用于单色图标。如果不为每种使用的颜色生成单独的图片，就无法更改外部图片的颜色。这使得外部图片在 Iconify 生态系统中无法使用。

一个变通方案是在 CSS 中将图标用作外部遮罩图片。请参阅[如何在 CSS 中使用 SVG](../css/index.md)。

## 工具

如何获取 SVG 并将其添加到你的文档中？

### 组件

对于许多框架，都有现成的组件来处理在 HTML 中嵌入 SVG 的工作：

- 适用于 React、Vue、Svelte、Solid、Astro、Qwik 的 [Unplugin Icons](./unplugin/index.md)。
- 适用于 Astro 的 [Astro Icon](./astro/index.md)。
- 适用于 Edge 模板引擎的 [Edge Iconify](https://github.com/edge-js/edge-iconify)。
- [Iconify Prerendered](https://github.com/cawa-93/iconify-prerendered) 是 Vue 开发者的另一个选择。

### 函数

没有使用任何框架，但希望自动化构建流程？

[Iconify Utils](/docs/libraries/utils/index.md) 提供了易于使用的函数来生成 SVG。

请参阅[如何使用 Iconify Utils 导出 SVG](./utils/index.md)。

### 无代码方式

如果你不想使用任何组件，可以在以下网站获取 SVG：

`include usage/options/websites`

找到你想使用的图标，选中它，将 SVG 复制到剪贴板，然后粘贴到 HTML 中。

## 自定义组件

想要构建一个生成 SVG 的自定义组件？

目前，你需要使用 JavaScript 来实现。其他编程语言暂无可用的库。

### JavaScript

[Iconify Utils](/docs/libraries/utils/index.md) 包包含了你需要的所有函数。生成 SVG 的过程非常简单：

- 定位图标集文件。
- 读取并解析 JSON。
- 使用 `[func]iconToSVG()` 生成 SVG 内容和属性。
- 从中创建 SVG 元素。见下文。

以下代码示例可能会对你有所帮助：

- 参阅 [Iconify Utils 的 SVG 文档](./utils/index.md)。
- 参阅 `[func]parseIconSet()` 或 `[func]getIconData()` 以从图标集中提取图标数据。
- 参阅 `[func]iconToSVG()` 文档。
- 参阅 [Iconify for Tailwind CSS](https://github.com/iconify/iconify/tree/main/plugins/tailwind) 的源代码，了解如何定位和加载图标集。

#### 将 iconToSVG 的结果转换为 SVG {#icon-to-svg}

函数 `[func]iconToSVG()` 不会返回完整的 SVG，它返回的是 `[tag]svg` 元素的属性和内容。

这是有意为之的。许多框架（如 React）期望你使用框架特定的代码来创建元素。

因此，对于 React，你需要像这样创建元素：

```js
const data = iconToSVG(icon, {});

return React.createElement('svg', {
	// 必需属性
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
	// 宽度、高度、视图框
	...data.attributes,
	// 内部 HTML
	dangerouslySetInnerHTML: {
		__html: data.body,
	},
});
```

对于其他使用原生方式创建元素的框架，请使用类似的框架特定代码。

如果某个框架没有提供设置 `[prop]innerHTML` 的方法（这是设置 `[tag]svg` 内容所必需的），则无法使用此代码。你需要找到一种将 HTML 字符串转换为组件树的方法。

如果你想将完整的 `[tag]svg` 元素创建为字符串，可以使用 `[func]iconToHTML()` 函数将 `[func]iconToSVG()` 的结果转换为字符串：

```js
const data = iconToSVG(icon, {});

return iconToHTML(data.body, data.attributes);
```

请参阅 [Iconify Utils 示例](./utils/index.md)。
