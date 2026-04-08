```yaml
title: Iconify Utils 中的 getIconsCSS()
functions:
  getIconCSS: './get-icon-css.md'
  getIconsContentCSS: './get-icons-content-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# getIconsCSS()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIconsCSS()` 为图标集中的多个图标生成样式表，以便将它们渲染为背景或遮罩图像。

它为图标集中的多个图标生成代码，将通用代码和图标特定代码分开。
若要为单个图标生成代码且不拆分代码，请参阅 `[func]getIconCSS()`。

如果您不想将图标用作背景或遮罩图像，而是想将图标用作伪元素的内容，请参阅 `[func]getIconsContentCSS()`。

要在 HTML 中使用图标，您只需创建任意元素（例如带有图标集和图标类名的 `[tag]span`）即可。

## 颜色

单色图标将渲染为遮罩图像，背景颜色设置为 `[prop]currentColor`。这意味着图标将使用与文本相同的颜色。

要更改图标颜色，只需更改文本颜色即可。

```yaml
include: common/css-demo
```

带调色板的图标将渲染为背景图像。

您还可以使用 `[prop]color` 选项将单色图标转换为带调色板的图标。请参阅下方的 `[str]颜色选项` 部分。

## 用法

该函数具有以下参数：

- `[prop]iconSet`，`[type]IconifyJSON`。图标集数据。
- `[prop]names`，`[type]string[]`。图标名称数组。
- `[prop]options`。选项对象，可选。

函数返回包含图标样式表的 `[type]string`。

## 选项

`[prop]options` 对象具有以下属性：

- `[prop]iconSelector`，`[type]string`。图标的选择器，默认为 `[str].icon--{prefix}--{name}`。变量 `[str]{prefix}` 将被替换为图标集前缀，`[str]{name}` 将被替换为图标名称。
- `[prop]commonSelector`，`[type]string`。图标的通用选择器，默认为 `[str].icon--{prefix}`。将其设置为空可禁用通用代码（请参阅下方的示例之一）。变量 `[str]{prefix}` 将被替换为图标集前缀。
- `[prop]overrideSelector`，`[type]string`。混合 `[prop]iconSelector` 和 `[prop]commonSelector` 的选择器，用于生成覆盖通用样式的图标特定样式。见下文。默认值为 `[str].icon--{prefix}.icon--{prefix}--{name}`。
- `[prop]pseudoSelector`，`[type]boolean`。如果图标的选择器是伪选择器（例如 `[str].icon--{prefix}--{name}::after`），请将其设置为 `true`。
- `[prop]varName`，`[type]string`。用于图标的变量名称，单色图标默认为 `[str]svg`，带调色板的图标默认为 `null`。设置为 `null` 可禁用。
- `[prop]forceSquare`，`[type]boolean`。强制图标宽度为 `[num]1em`。
- `[prop]color`：`[type]string`。设置单色图标的颜色。同时会将图标渲染为背景图像。
- `[prop]mode`：`[str]mask` 或 `[str]background`。强制图标渲染为遮罩图像或背景图像。如果未设置，将根据图标内容自动检测模式：包含 `[prop]currentColor` 的图标将渲染为遮罩图像，其他图标渲染为背景图像。
- `[prop]format`。样式表格式化选项。与 Sass 中使用的选项匹配。支持的值：`[str]expanded`、`[str]compact`、`[str]compressed`。
- `[prop]rules`，`[type]Record<string, string>`。要添加到 CSS 中的额外规则。

## 结果

生成的样式表示例：

```css
/* 通用代码合并到一个类中，该类应添加到每个图标中 */
.icon--tabler {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
}

/* 每个图标的 SVG。类名应与上面使用的通用类名组合使用 */
.icon--tabler--code {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
}

.icon--tabler--crystal-ball {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
}

.icon--tabler--view-360 {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='9'/%3E%3Cpath d='M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4z'/%3E%3C/g%3E%3C/svg%3E");
}
```

该代码可在 HTML 中与任意元素一起使用，例如同时包含通用代码和图标特定代码类名的 `[tag]span`：

```html
<span class="icon--tabler icon--tabler--code"></span>
```

## 颜色选项

```yaml
include: libraries/utils/css-color
```

```html
<span
	class="icon--tabler icon--tabler--view-360"
	style="color: var(--icon-color)"
></span>
```

## 选择器

### 简单选择器

如果您想将选择器更改为更简单的形式，例如将 `[str]home` 图标的选择器改为 `[str].icon-home`，请使用以下选项：

```json
{
	"iconSelector": ".icon-{name}",
	"commonSelector": ""
}
```

生成的样式表将如下所示：

```css
.icon-code,
.icon-crystal-ball,
.icon-view-360 {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
}

.icon-code {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
}

.icon-crystal-ball {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
}

.icon-view-360 {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='9'/%3E%3Cpath d='M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4z'/%3E%3C/g%3E%3C/svg%3E");
}
```

### 旧版浏览器

如果您需要支持不支持变量的古老浏览器，请将 `[prop]varName` 设置为 `null`：

```json
{
	"varName": null
}
```

生成的 CSS 将如下所示：

```css
.icon--tabler {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
}

.icon--tabler--code {
	-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
	mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
}

.icon--tabler--crystal-ball {
	-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
	mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
}
```

对于单色图标，这会导致代码重复，因为某些浏览器仍然需要遮罩的前缀。

带调色板的图标不需要此设置，因为带调色板图标的默认值就是 `null`（请参阅下方使用带调色板图标的示例）。

### 宽窄图标

并非所有图标都是正方形的。某些图标集为图标使用可变宽度，这主要适用于设计为字体使用的图标集。

默认情况下，通用代码的 `[prop]width` 将设置为 `[num]1em`，并且将通过为每个图标使用特异性更高的选择器来覆盖它：

```css
.icon--fa6-solid {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
}

.icon--fa6-solid.icon--fa6-solid--angle-left {
	width: 0.63em;
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' width='320' height='512'%3E%3Cpath fill='black' d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}

.icon--fa6-solid.icon--fa6-solid--arrow-left {
	width: 0.88em;
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='448' height='512'%3E%3Cpath fill='black' d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}
```

但如果您希望图标为正方形怎么办？请使用 `[prop]forceSquare` 选项：

```json
{
	"forceSquare": true
}
```

```css
.icon--fa6-solid {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
}

.icon--fa6-solid--angle-left {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' width='320' height='512'%3E%3Cpath fill='black' d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}

.icon--fa6-solid--arrow-left {
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='448' height='512'%3E%3Cpath fill='black' d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}
```

### 自定义选择器

如果您想使用自定义选择器（例如图标的 `[str].iconify-{name}`），请指定 3 个选项：

- `[prop]iconSelector`：图标的值，其中可以使用 `[str]{prefix}` 表示图标集前缀，使用 `[str]{name}` 表示图标名称。
- `[prop]commonSelector`：通用代码的值，其中可以使用 `[str]{prefix}` 表示图标集前缀。您可以将其设置为空或与 `[prop]iconSelector` 相同的值。
- `[prop]overrideSelector`：混合选择器的值。为什么它是一个单独的选项？以防混合选择器与简单组合通用和图标选择器的结果不同。

如果仅设置 `[prop]iconSelector`，其他两个选项将被忽略。

示例：

#### 仅使用 1 个选项

```json
{
	"iconSelector": ".iconify-{name}"
}
```

结果为：

```css
.iconify-alien,
.iconify-balance-scale {
	display: inline-block;
	width: 1em;
	height: 1em;
	background: no-repeat center / 100%;
}

.iconify-alien {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Cg fill='none'%3E%3Cpath fill='%2386D72F' d='M29.84 15.92C29.84 23.61 18.92 30 15.92 30S2 23.61 2 15.92S8.23 2 15.92 2c7.69 0 13.92 6.23 13.92 13.92Z'/%3E%3Cpath fill='%23212121' d='M13.368 24.225a1 1 0 0 1 1.407.143c.376.461.825.645 1.225.645c.4 0 .85-.184 1.225-.645a1 1 0 1 1 1.55 1.264c-.724.889-1.726 1.38-2.775 1.38c-1.05 0-2.05-.491-2.775-1.38a1 1 0 0 1 .143-1.407Z'/%3E%3Cpath fill='%23533566' d='M6.474 19.527c2.254 2.253 4.6 3.549 6.845 1.306c2.253-2.242 2.233-5.905-.01-8.147c-2.244-2.243-5.898-2.253-8.142 0c-2.243 2.253-.946 4.588 1.307 6.84Zm19.051 0c-2.255 2.253-4.602 3.549-6.847 1.306c-2.244-2.242-2.234-5.905.01-8.147c2.245-2.243 5.9-2.253 8.144 0c2.245 2.253.947 4.588-1.307 6.84Z'/%3E%3Cpath fill='%23fff' d='M12.62 15.62c.61-.61.47-1.73-.31-2.51c-.78-.77-1.9-.92-2.51-.31c-.61.61-.47 1.73.31 2.51c.78.78 1.9.92 2.51.31Zm13.28 0c.61-.61.47-1.73-.31-2.51c-.77-.77-1.9-.92-2.51-.31c-.61.61-.47 1.73.31 2.51c.78.78 1.9.92 2.51.31Z'/%3E%3C/g%3E%3C/svg%3E");
}

.iconify-balance-scale {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Cg fill='none'%3E%3Cpath fill='%239B9B9B' d='M19.949 11.75h4.02a.749.749 0 1 0 0-1.5h-4.02c-.38 0-.73-.18-.95-.48l-2.37-3.25a.765.765 0 0 0-.705-.296a.747.747 0 0 0-.585.306l-2.37 3.24c-.22.3-.58.48-.95.48h-4.02c-.41 0-.75.34-.75.75s.34.75.75.75h4.02c.85 0 1.66-.41 2.16-1.09l1.809-2.473l1.801 2.463c.5.69 1.31 1.1 2.16 1.1Z'/%3E%3Cpath fill='%23D3D3D3' d='M15.249 4h1.5v24h-1.5V4Zm-2.21 16.73c.09.15.26.23.42.23c.09 0 .18-.02.24-.08a.5.5 0 0 0 .15-.69l-5.372-8.338A.494.494 0 0 0 8 11.5c-.16 0-.45.27-.45.27l-5.39 8.38c-.07.08-.11.19-.11.31c0 .28.22.5.5.5c.17 0 .33-.09.42-.23l4.53-7.034V20.8c0 .28.22.5.5.5s.5-.22.5-.5v-7.105l4.54 7.035Zm16 0c.09.15.26.23.42.23c.09 0 .18-.02.24-.08a.5.5 0 0 0 .15-.69l-5.372-8.338A.494.494 0 0 0 24 11.5c-.16 0-.359.155-.45.27l-5.39 8.38c-.07.08-.11.19-.11.31c0 .28.22.5.5.5c.17 0 .33-.09.42-.23l4.53-7.034V20.8c0 .28.22.5.5.5s.5-.22.5-.5v-7.105l4.54 7.035Z'/%3E%3Cpath fill='%23F9C23C' d='M17.59 3.59a1.59 1.59 0 1 1-3.18 0a1.59 1.59 0 0 1 3.18 0Zm-8 7.41a1.59 1.59 0 1 1-3.181 0a1.59 1.59 0 0 1 3.18 0Zm-7.571 9.64c-.09-.32.15-.64.49-.64h10.98c.34 0 .58.32.49.64c-.74 2.56-3.13 4.36-5.98 4.36c-2.85 0-5.24-1.8-5.98-4.36Zm16 0c-.09-.32.15-.64.49-.64h10.98c.34 0 .58.32.49.64c-.74 2.56-3.13 4.36-5.98 4.36c-2.85 0-5.24-1.8-5.98-4.36ZM23.4 30c.48 0 .71-.58.36-.91A11.216 11.216 0 0 0 16 26c-3.01 0-5.74 1.17-7.76 3.09c-.35.33-.12.91.36.91h14.8Zm.6-17.41a1.59 1.59 0 1 0-.001-3.18a1.59 1.59 0 0 0 0 3.18Z'/%3E%3C/g%3E%3C/svg%3E");
}
```

### 伪选择器

此示例说明了为什么 `[prop]overrideSelector` 是一个选项，以及如何使用伪选择器渲染图标：

```json
{
	"iconSelector": ".icon--{prefix}--{name}::after",
	"commonSelector": ".icon--{prefix}::after",
	"overrideSelector": ".icon--{prefix}.icon--{prefix}--{name}::after",
	"pseudoSelector": true
}
```

```css
.icon--fa6-solid::after {
	display: inline-block;
	width: 1em;
	height: 1em;
	content: '';
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
}

.icon--fa6-solid.icon--fa6-solid--angle-left::after {
	width: 0.63em;
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' width='320' height='512'%3E%3Cpath fill='black' d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}

.icon--fa6-solid.icon--fa6-solid--arrow-left::after {
	width: 0.88em;
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='448' height='512'%3E%3Cpath fill='black' d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/%3E%3C/svg%3E");
}
```

## 示例

上述示例展示了各种选项。此示例展示了带有选项的实际代码：

```yaml
src: libraries/utils/get-icons-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icons-css.css
    title: 'Result:'
  - src: libraries/utils/get-icons-css.html
    title: 'Usage in HTML:'
```
