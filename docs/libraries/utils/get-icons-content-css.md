```yaml
title: Iconify Utils 中的 getIconsContentCSS()
functions:
  getIconsCSS: './get-icons-css.md'
  getIconContentCSS: './get-icon-content-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# getIconsCSS()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIconsCSS()` 为图标集中的多个图标生成样式表，以便将它们渲染为背景或遮罩图像。

它为图标集中的多个图标生成代码，将通用代码和图标特定代码分开。
若要为单个图标生成代码且不拆分代码，请参阅 `[func]getIconContentCSS()`。

如果您不想将图标用作伪元素的内容，而是想将图标用作背景或遮罩图像，请参阅 `[func]getIconsCSS()`。

若要在 HTML 中使用图标，您只需创建任意元素（例如带有图标集和图标类名的 `[tag]span`）即可。

## 颜色与尺寸

当将图标用作伪元素的内容时，无法使用 `[prop]currentColor`，因此图标必须具有硬编码的颜色。

图标还必须具有固定尺寸，且无法在 CSS 中更改。

如果您想在 CSS 中使用带有 `[prop]currentColor` 的图标，或想使用 CSS 调整图标大小，则应改用 `[func]getIconsCSS()`。

## 用法

该函数具有以下参数：

- `[prop]iconSet`，`[type]IconifyJSON`。图标集数据。
- `[prop]names`，`[type]string[]`。图标名称数组。
- `[prop]options`。选项对象，可选。

函数返回包含图标样式表的 `[type]string`。

## 选项

`[prop]options` 对象具有以下属性：

- `[prop]height`，`[type]number`。图标高度。必填。
- `[prop]width`，`[type]number`。图标宽度，可选。如果未设置，则根据图标的宽高比和 `[prop]height` 选项计算得出。
- `[prop]color`，`[type]string`。用于替换 `[prop]currentColor` 的颜色。应用于更改单色图标的颜色，否则图标将渲染为黑色。
- `[prop]iconSelector`，`[type]string`。图标的选择器，默认为 `[str].icon--{prefix}--{name}::after`。变量 `[str]{prefix}` 将被替换为图标集前缀，`[str]{name}` 将被替换为图标名称。
- `[prop]format`。样式表格式化选项。与 Sass 中使用的选项匹配。支持的值：`[str]expanded`、`[str]compact`、`[str]compressed`。
- `[prop]rules`，`[type]Record<string, string>`。要添加到 CSS 中的额外规则。

## 结果

生成的样式表示例：

```css
.icon--tabler--code::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16'/%3E%3C/svg%3E");
}

.icon--tabler--crystal-ball::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M6.73 17.018a8 8 0 1 1 10.54 0'/%3E%3Cpath d='M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zm6-12a3 3 0 0 0-3 3'/%3E%3C/g%3E%3C/svg%3E");
}

.icon--tabler--view-360::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='9'/%3E%3Cpath d='M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4z'/%3E%3C/g%3E%3C/svg%3E");
}
```

该代码可在 HTML 中与任何元素一起使用，例如带有通用代码和图标特定代码类名的 `[tag]span`：

```html
<span class="icon--tabler--code"></span>
```

## 颜色选项

```yaml
include: libraries/utils/css-color-content
```

如果您想为不同的图标使用不同的颜色，则需要使用不同的 `[prop]color` 选项值多次调用 `[func]getIconsContentCSS()`。

如果您希望同一个单色图标有多个不同颜色的实例，则需要使用不同的 `[prop]color` 和 `[prop]iconSelector` 选项值多次调用 `[func]getIconsContentCSS()`。

## 示例

```yaml
src: libraries/utils/get-icons-content-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icons-content-css.css
    title: '结果：'
  - src: libraries/utils/get-icons-content-css.html
    title: 'HTML 中的用法：'
```
