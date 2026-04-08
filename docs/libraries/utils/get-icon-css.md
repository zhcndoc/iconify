```yaml
title: getIconCSS() in Iconify Utils
functions:
  getIconsCSS: './get-icons-css.md'
  getIconContentCSS: './get-icon-content-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# getIconCSS()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIconCSS()` 用于生成样式表，将图标渲染为背景图像或遮罩图像。

它仅为单个图标生成代码。若要同时为多个图标生成代码，请参阅 `[func]getIconsCSS()`。

如果您不想将图标用作背景或遮罩图像，而是想将其用作伪元素的内容，请参阅 `[func]getIconContentCSS()`。

要在 HTML 中使用图标，您只需创建任意元素（例如 `[tag]span`），并为其指定在 `[prop]iconSelector` 选项中传入的类名即可。

## 颜色

单色图标将渲染为遮罩图像，其背景颜色设置为 `[prop]currentColor`。这意味着图标将使用与文本相同的颜色。

要更改图标颜色，只需更改文本颜色即可。

```yaml
include: common/css-demo
```

带调色板的图标将渲染为背景图像。

您还可以使用 `[prop]color` 选项将单色图标转换为带调色板的图标。请参阅下方的 `[str]颜色选项` 部分。

## 用法

该函数包含以下参数：

- `[prop]icon`，`[type]IconifyIcon`。图标数据。
- `[prop]options`。选项对象，可选。

函数返回包含图标样式表的 `[type]string` 类型字符串。

## 选项

`[prop]options` 对象包含以下属性：

- `[prop]iconSelector`，`[type]string`。图标的选择器，默认为 `[str].icon`。
- `[prop]pseudoSelector`，`[type]boolean`。如果图标的选择器是伪选择器（例如 `[str].icon-home:after`），请将其设置为 `true`。
- `[prop]varName`，`[type]string`。用于图标的变量名称，默认为 `[str]svg`。设置为 `null` 可禁用。
- `[prop]forceSquare`，`[type]boolean`。强制图标宽度为 `[num]1em`。
- `[prop]color`：`[type]string`。设置单色图标的颜色。同时会将图标渲染为背景图像。
- `[prop]mode`：`[str]mask` 或 `[str]background`。强制将图标渲染为遮罩图像或背景图像。如果未设置，将根据图标内容自动检测模式：包含 `[prop]currentColor` 的图标将渲染为遮罩图像，其他图标则渲染为背景图像。
- `[prop]format`。样式表格式化选项。与 Sass 中使用的选项匹配。支持的值：`[str]expanded`、`[str]compact`、`[str]compressed`。
- `[prop]rules`，`[type]Record<string, string>`。要添加到 CSS 中的额外规则。

## 结果

生成的样式表示例：

```css
.icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z'/%3E%3C/svg%3E");
}
```

该代码可在 HTML 中与任意元素配合使用，例如使用您在 `[prop]iconSelector` 选项中传入的类名的 `[tag]span` 元素：

```html
<span class="icon"></span>
```

## 颜色选项

```yaml
include: libraries/utils/css-color
```

```html
<span class="icon" style="color: var(--icon-color)"></span>
```

## 示例

为单色图标生成 CSS：

```yaml
src: libraries/utils/get-icon-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icon-css.css
    title: 'Result:'
  - src: libraries/utils/get-icon-css.html
    title: 'Usage in HTML:'
```

为带调色板的图标生成 CSS：

```yaml
src: libraries/utils/get-icon-css2.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icon-css2.css
    title: 'Result:'
  - src: libraries/utils/get-icon-css2.html
    title: 'Usage in HTML:'
```

为图标使用伪元素：

```yaml
src: libraries/utils/get-icon-css3.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icon-css3.css
    title: 'Result:'
  - src: libraries/utils/get-icon-css3.html
    title: 'Usage in HTML:'
```
