```yaml
title: Iconify Utils 中的 wrapSVGContent()
functions:
  mergeDefsAndContent: './merge-defs-and-content.md'
  splitSVGDefs: './split-svg-defs.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# wrapSVGContent()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]wrapSVGContent()` 使用自定义代码包裹图标主体。 

它被 `[func]iconToSVG()` 用于对图标应用翻转和旋转，
被 `[func]buildParsedSVG()` 和 `[func]convertParsedSVG()` 用于将表现层
属性从 `[tag]svg` 元素移动到组元素。

## 用法

此函数具有以下参数：

- `[prop]body`，`[type]string`。图标内容。
- `[prop]start`，`[type]string`。包装器的起始部分，例如 `[tag]<g>`。
- `[prop]end`，`[type]string`。包装器的结束部分，例如 `[tag]</g>`。

此函数从图标内容中提取定义，将图标的其余部分合并为 `[str]start + content + end`，
并将其与之前提取的定义合并。

## 示例

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
