```yaml
title: Scale SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# 缩放 SVG

此函数是 [Iconify Tools](../index.md) 中[图标操作函数](./index.md)的一部分。

函数 `[func]scaleSVG()` 用于更改图标大小。

对于大多数图标，无需使用此函数，您可以通过修改 `[prop]width` 和 `[prop]height` 属性来调整大小，但该函数依然可用。

## 用法

该函数包含以下参数：

- `[prop]svg`，`[type]SVG`。图标实例。
- `[prop]scale`，`[type]number`。图标尺寸需乘以的倍数。

## 示例

```yaml
src: libraries/tools/icon/scale.ts
title: 'svgo.ts'
extra:
  - src: libraries/tools/icon/scale.svg
    title: 'Result:'
```
