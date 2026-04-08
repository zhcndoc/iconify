```yaml
title: Iconify Utils 中的 parseSVGContent()
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# parseSVGContent()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]parseSVGContent()` 用于解析包含 SVG 的字符串，提取 `[tag]svg` 元素的属性以及图标内容。

## 用法

该函数包含以下参数：

- `[prop]content`，`[type]string` 类型。SVG 字符串。

该函数返回类型为 `[type]ParsedSVGContent` 的数据，出错时返回 `[type]undefined`。详见下文。

## 返回值 {#result}

返回值是一个包含以下属性的对象：

- `[prop]body`，`[type]string` 类型。图标内容。
- `[prop]attributes`，`[type]object` 类型。`[tag]svg` 元素的属性。

不会对属性进行校验。

该结果应传递给 `[func]buildParsedSVG()` 或 `[func]convertParsedSVG()`。
这两个函数会对 `[tag]svg` 元素中的属性进行简单验证，并将其转换为可用数据。

## Iconify Tools

此函数功能较为基础。如需高级解析和清理功能，请使用 [Iconify Tools](../tools/index.md)。

## 示例

结合使用 `[func]parseSVGContent()`、`[func]buildParsedSVG()` 和 `[func]iconToHTML()` 来清理图标的示例：

```yaml
src: libraries/utils/build-parsed-svg.ts
title: 'cleanup.ts'
```

结合使用 `[func]parseSVGContent()` 和 `[func]convertParsedSVG()` 获取 `[type]IconifyIcon` 格式图标数据的示例，
该格式可供各种图标组件使用：

```yaml
src: libraries/utils/convert-parsed-svg.ts
title: 'convert.ts'
```
