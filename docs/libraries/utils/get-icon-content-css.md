```yaml
title: getIconContentCSS() in Iconify Utils
functions:
  getIconsContentCSS: './get-icons-content-css.md'
  getIconCSS: './get-icon-css.md'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# getIconContentCSS()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]getIconContentCSS()` 用于生成样式表，将图标渲染为伪元素的内容。

它仅为单个图标生成代码。若要同时为多个图标生成代码，请参阅 `[func]getIconsContentCSS()`。

如果您不想将图标用作伪元素的内容，而是想将其用作背景或遮罩图像，请参阅 `[func]getIconCSS()`。

要在 HTML 中使用该图标，您只需创建任意元素（例如带有您在 `[prop]iconSelector` 选项中传入的类名的 `[tag]span`）即可。

## 颜色与尺寸

当将图标用作伪元素的内容时，无法使用 `[prop]currentColor`，因此图标必须具有硬编码的颜色。

图标还必须具有固定的尺寸，且无法在 CSS 中更改。

如果您想在 CSS 中使用带有 `[prop]currentColor` 的图标，或希望通过 CSS 调整图标大小，则应改用 `[func]getIconCSS()`。

## 用法

该函数包含以下参数：

- `[prop]icon`，`[type]IconifyIcon`。图标数据。
- `[prop]options`。选项对象。

函数返回包含图标样式表的 `[type]string`。

## 选项

`[prop]options` 对象包含以下属性：

- `[prop]height`，`[type]number`。图标高度。必填。
- `[prop]width`，`[type]number`。图标宽度，可选。如果未设置，将根据图标的宽高比和 `[prop]height` 选项计算得出。
- `[prop]color`，`[type]string`。用于替换 `[prop]currentColor` 的颜色。应用于更改单色图标的颜色，否则图标将渲染为黑色。
- `[prop]iconSelector`，`[type]string`。图标的选择器，默认为 `[str].icon::after`。
- `[prop]format`。样式表格式化选项。与 Sass 中使用的选项匹配。支持的值：`[str]expanded`、`[str]compact`、`[str]compressed`。
- `[prop]rules`，`[type]Record<string, string>`。要添加到 CSS 中的额外规则。 

## 结果

生成的样式表示例：

```css
.icon::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z'/%3E%3C/svg%3E");
}
```

该代码可在 HTML 中与任意元素配合使用，例如带有您在 `[prop]iconSelector` 选项中传入的类名的 `[tag]span`：

```html
<span class="icon"></span>
```

## 颜色选项

```yaml
include: libraries/utils/css-color-content
```

## 示例

```yaml
src: libraries/utils/get-icon-content-css.ts
title: 'generate-css.ts'
extra:
  - src: libraries/utils/get-icon-content-css.css
    title: 'Result:'
  - src: libraries/utils/get-icon-content-css.html
    title: 'Usage in HTML:'
```
