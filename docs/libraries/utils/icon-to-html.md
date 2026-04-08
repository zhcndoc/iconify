```yaml
title: Iconify Utils 中的 iconToHTML()
types:
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
functions:
  iconToSVG: './icon-to-svg.md'
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
```

# iconToHTML()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]iconToHTML()` 根据 `[tag]svg` 元素的属性列表和图标内容生成 SVG。

它可以与 `[func]iconToSVG()`、`[func]parseSVGContent()` 或 `[func]buildParsedSVG()` 的结果配合使用。

## 用法

该函数具有以下参数：

- `[prop]body`，`[type]string`。图标内容，不包含 `[tag]svg` 标签。
- `[prop]attributes`，`[type]Record<string, string>`。要添加的属性，例如 `[prop]viewBox`。

函数返回 `[type]string`。

## 注意事项

函数会自动添加以下属性，请勿在 `[prop]attributes` 参数中添加它们：

- `[str]xmlns`：始终添加。
- `[str]xmlns:xlink`：如果 `[prop]body` 包含 `[str]xlink:` 则添加。现代图标不应包含 `[str]xlink:` 属性。

属性值不会被修改。请确保在调用函数前已对其进行转义。

## 示例

```yaml
src: libraries/utils/get-icon.ts
title: 'example.ts'
```
