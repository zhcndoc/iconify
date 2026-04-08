```yaml
title: 导入图标
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  forEach: '../icon-set/for-each.md'
  cleanupSVG: '../icon/cleanup.md'
  runSVGO: '../icon/svgo.md'
  parseColors: '../icon/colors.md'
  deOptimisePaths: '../icon/paths.md'
  importDirectory: './directory.md'
  importDirectorySync: './directory.md'
  importFromFigma: './figma/index.md'
```

# 导入图标

[Iconify Tools](../index.md) 可以从多个来源导入图标。

## 使用方法

下面列出的所有函数都是异步的。大多数函数会创建 `[type]IconSet` 实例。

在使用 Iconify Tools 之前，你应该了解该包具有明确的设计偏好。某些 SVG 元素是不被允许的，会导致导入失败。请参阅 [SVG 导入限制](../tags.md)。

### 异步

大多数函数都是异步的。

`include libraries/tools/async`

## 清理

导入图标后，请确保对其进行验证。请参阅 `[func]cleanupSVG()` 函数。

## 导入函数

有多个用于导入图标的函数：

### importDirectory()

函数 `[func]importDirectory()` 和 `[func]importDirectorySync()` 用于从目录导入 SVG 文件。

### importFromFigma()

函数 `[func]importFromFigma()` 用于从 Figma 文档导入图标。

### 导入单个图标 {#svg}

为导入单个文件创建函数是多余的。你只需读取文件并创建 `[type]SVG` 实例即可。

请参阅 [导入 SVG](./svg.md) 文档。

### 导入 Iconify 图标集 {#json}

为导入 `[type]IconifyJSON` 数据创建函数同样是多余的。你只需读取文件并创建 `[type]IconSet` 实例即可。

请参阅 [导入 Iconify 图标集](./json.md) 文档。
