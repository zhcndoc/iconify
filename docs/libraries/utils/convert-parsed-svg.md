```yaml
title: Iconify Utils 中的 convertParsedSVG()
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# convertParsedSVG()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]convertParsedSVG()` 将 `[func]parseSVGContent()` 的结果转换为 `[type]IconifyIcon`。

该函数还会对 `[tag]svg` 属性进行基本的验证和清理。

转换结果可供使用 `[type]IconifyIcon` 类型的各种函数和图标组件使用。

## 用法

此函数包含以下参数：

- `[prop]data`，`[type]object` 类型。`[func]buildParsedSVG()` 函数的返回结果。

此函数返回 `[type]IconifyIcon` 类型的数据，出错时返回 `[type]undefined`。

## Iconify Tools

此函数功能较为基础。如需高级解析和清理功能，请使用 [Iconify Tools](../tools/index.md)。

## 示例

以下示例展示了如何结合使用 `[func]parseSVGContent()` 和 `[func]convertParsedSVG()` 来获取 `[type]IconifyIcon` 格式的图标数据，
该数据可供各种图标组件使用：

```yaml
src: libraries/utils/convert-parsed-svg.ts
title: 'convert.ts'
```
