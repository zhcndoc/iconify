```yaml
title: splitSVGDefs() in Iconify Utils
functions:
  mergeDefsAndContent: './merge-defs-and-content.md'
  wrapSVGContent: './wrap-svg-content.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# splitSVGDefs()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]splitSVGDefs()` 将 SVG 主体拆分为 `[tag]defs` 的内容与其他内容。

此函数由 `[func]wrapSVGContent()` 使用以包装图标内容，
而 `[func]wrapSVGContent()` 又被 `[func]iconToSVG()` 使用以对图标应用翻转和旋转，
并被 `[func]buildParsedSVG()` 和 `[func]convertParsedSVG()` 使用以将表现性
属性从 `[tag]svg` 元素移至组元素。

## 用法

此函数包含以下参数：

- `[prop]content`，`[type]string` 类型。图标内容。

此函数返回一个包含 2 个属性的对象：

- `[prop]defs`，`[type]string` 类型。`[tag]defs` 元素的内容。
- `[prop]content`，`[type]string` 类型。图标的其余部分。

若要将定义与内容重新合并，请使用 `[func]mergeDefsAndContent()`。

## 示例

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
