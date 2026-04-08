```yaml
title: 更改图标内容
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
functions:
  list: '../icon-set/list.md'
  forEach: '../icon-set/for-each.md'
  cleanupSVG: './cleanup.md'
  runSVGO: './svgo.md'
  parseColors: './colors.md'
  deOptimisePaths: './paths.md'
  scaleSVG: './scale.md'
  convertSVGToMask: './mask.md'
```

# 更改图标内容

在导出图标之前，您需要对其进行适当的修复。
[Iconify Tools](./index.md) 提供了许多用于操作图标内容的函数：修复各种问题、优化代码、更改调色板。

## 用法

下面列出的所有函数都适用于 `[type]SVG` 实例。

### 处理图标集

如何使用函数解析图标集中的所有图标？

可以通过使用 `[func]forEach()` 和 `[func]forEachSync()` 方法来实现：

```yaml
src: libraries/tools/icon/icon-set.ts
```

## 清理

在运行任何图标操作函数之前，您应该验证并清理图标。请参阅 `[func]cleanupSVG()` 函数。

## 函数

有几个用于操作图标的函数：

### runSVGO()

函数 `[func]runSVGO()` 用于优化图标。

仅使用 `[func]cleanupSVG()` 清理图标是不够的。该函数非常基础；它仅执行最基本的操作以去除不良内容。它主要用于验证。

请使用 `[func]runSVGO()` 来正确清理和优化图标。

### parseColors()

函数 `[func]parseColors()` 用于分析或更改图标的调色板。

通常，图标要么没有调色板（依赖 `[prop]fill` 样式），要么使用黑色。这两种选项在使用 Iconify 时都是不可接受的。在 Iconify 中，所有未硬编码调色板的图标都应使用 `[prop]currentColor`。

此函数可用于更改颜色，确保图标不包含不应有的颜色，并为依赖默认颜色的形状添加颜色。

### deOptimisePaths()

函数 `[func]deOptimisePaths()` 确保图标能在旧版软件中正常工作。

所有浏览器都支持现代 SVG，其中包括 `[tag]path` 元素中的压缩弧线。然而，有许多软件并不支持。通常是那些依赖古老 SVG 解析库的图像编辑软件。

### scaleSVG()

函数 `[func]scaleSVG()` 用于更改图标尺寸。

### resetSVGOrigin()

函数 `[func]resetSVGOrigin()` 将 `[prop]viewBox` 的左上角移至 0。

### removeFigmaClipPathFromSVG()

函数 `[func]removeFigmaClipPathFromSVG()` 尝试移除不必要的裁剪路径，这些路径通常在使用 Figma 导出图标时被添加。

### convertSVGToMask()

函数 `[func]convertSVGToMask()` 将图标内容转换为遮罩。

如果您想将多色图标更改为单色图标，并将源颜色用作色调，这将非常有用。
