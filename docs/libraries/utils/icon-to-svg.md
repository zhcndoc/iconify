```yaml
title: Iconify Utils 中的 iconToSVG()
types:
  IconifyIconCustomisations: './icon-customisations.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  iconToHTML: './icon-to-html.md'
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
```

# iconToSVG()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]iconToSVG()` 用于生成渲染 SVG 所需的数据。

## 用法

此函数包含以下参数：

- `[prop]icon`，`[type]IconifyIcon`。图标数据。
- `[prop]customisations`，`[type]IconifyIconCustomisations`。图标自定义选项。可选。

此函数返回类型为 `[type]IconifyIconBuildResult` 的数据。详见下文。

### 解析 SVG

此函数使用 `[type]IconifyIcon` 作为数据源。
如果您想解析包含 SVG 的字符串，请改用 `[func]parseSVGContent()` 和 `[func]buildParsedSVG()` 函数。

## 结果 {#build-result}

返回结果是一个包含以下属性的对象：

- `[prop]body`，`[type]string`。图标内容。
- `[prop]attributes`，`[type]object`。`[tag]svg` 元素的属性。
- `[prop]viewBox`，`[type]SVGViewBox`。以数字数组形式表示的 `[prop]viewBox`。

结果中的属性列表不包含 `[prop]xmlns`，因为它在所有 SVG 中都是相同的。
它始终包含 `[prop]viewBox`，通常包含 `[prop]width` 和 `[prop]height`。

您可以使用 `[func]iconToHTML()` 将结果转换为字符串。

### 结果示例

```json
{
	"attributes": {
		"width": "24",
		"height": "24",
		"viewBox": "0 0 24 24"
	},
    "viewBox": [0, 0, 24, 24],
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
}
```

## 示例

```yaml
src: libraries/utils/get-icon.ts
title: 'example.ts'
```

## 图标尺寸

默认情况下，返回的属性包含 `[prop]width` 和 `[prop]height`，其中 `[prop]height` 被设置为 `[str]1em`。

如果您想移除尺寸，请在 `[prop]customisations` 参数中将 `[prop]height` 设置为 `[str]unset` 或 `[str]none`：

```js
const result = iconToSVG(data, {
	// 仅设置 height 也会同时移除 width
	height: 'unset',
});
```
