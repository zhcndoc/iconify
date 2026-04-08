```yaml
title: Iconify Utils 中的 mergeDefsAndContent()
functions:
  splitSVGDefs: './split-svg-defs.md'
  wrapSVGContent: './wrap-svg-content.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# mergeDefsAndContent()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]splitSVGDefs()` 将定义和其他 SVG 内容合并为一个字符串。

此函数被 `[func]wrapSVGContent()` 用于包装图标内容，
而 `[func]wrapSVGContent()` 又被 `[func]iconToSVG()` 用于对图标应用翻转和旋转，
并被 `[func]buildParsedSVG()` 和 `[func]convertParsedSVG()` 用于将表现
属性从 `[tag]svg` 元素移至组元素。

## 用法

此函数包含以下参数：

- `[prop]defs`，`[type]string` 类型。定义。
- `[prop]content`，`[type]string` 类型。图标内容。

此函数以字符串形式返回合并后的图标。

## 示例

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
