```yaml
title: Iconify Utils 中的 buildParsedSVG()
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  parseSVGContent: './parse-svg-content.md'
  convertParsedSVG: './convert-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# buildParsedSVG()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]buildParsedSVG()` 用于解析 `[func]parseSVGContent()` 的结果。

它会验证并清理 `[tag]svg` 属性，提取并验证 `[prop]viewBox`，然后将数据作为 `[tag]svg` 元素的属性列表和内容返回。

该结果可被 `[func]iconToHTML()` 等函数使用，以生成 SVG 或各种组件。

## 用法

该函数具有以下参数：

- `[prop]data`，`[type]object`。`[func]buildParsedSVG()` 函数的结果。

该函数返回类型为 `[type]ParsedSVGContent` 的数据，出错时返回 `[type]undefined`。详见下文。

## 返回值 {#build-result}

返回值是一个包含以下属性的对象：

- `[prop]body`，`[type]string`。图标内容。
- `[prop]attributes`，`[type]object`。`[tag]svg` 元素的属性。
- `[prop]viewBox`，`[type]SVGViewBox`。以数字数组形式表示的 `[prop]viewBox`。

结果中的属性列表不包含 `[prop]xmlns`，因为它在所有 SVG 中都是相同的。
它始终包含 `[prop]viewBox`，通常包含 `[prop]width` 和 `[prop]height`。

您可以使用 `[func]iconToHTML()` 将结果转换为字符串。

## 示例

结合使用 `[func]parseSVGContent()`、`[func]buildParsedSVG()` 和 `[func]iconToHTML()` 来清理图标的示例：

```yaml
src: libraries/utils/build-parsed-svg.ts
title: 'cleanup.ts'
```
