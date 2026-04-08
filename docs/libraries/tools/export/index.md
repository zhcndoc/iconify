```yaml
title: 导出图标
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
  blankIconSet: '../icon-set/index.md'
  export: '../icon-set/export.md'
  toString: '../icon-set/to-string.md'
  exportToDirectory: './directory.md'
  exportIconPackage: './icon-package.md'
  exportJSONPackage: './json-package.md'
```

# 导出图标

[Iconify Tools](../index.md) 可以将图标导出为多种格式。

## 用法

下面列出的所有函数都适用于 `[type]IconSet` 实例。你需要使用 `[func]blankIconSet()` 创建实例，或者通过[使用导入函数之一](../import/index.md)来创建。

## 清理与优化

在导出图标之前，请确保已对其进行清理和优化。

请参阅[图标操作函数](../icon/index.md)。

## 导出函数

有多个用于导出图标的函数：

### 导出 Iconify 图标集 {#json}

`[type]IconSet` 实例包含 `[func]export()` 函数，用于创建 `[type]IconifyJSON` 数据。你只需将其写入文件即可。

请参阅[导出 Iconify 图标集](./json.md)文档。

### 导出 SVG（简化版） {#directory}

函数 `[func]exportToDirectory()` 将所有图标以 SVG 格式导出到指定目录。

### 导出为 SVG {#svg}

`[type]IconSet` 实例包含 `[func]toString()` 函数，用于为图标生成 `[type]string`。你可以使用 `[func]forEach()` 遍历图标集中的所有图标。

请参阅[将图标导出为 SVG](./svg.md)文档。

### 导出 NPM 包 {#npm}

NPM 上发布了不同类型的图标包，针对每种类型都有相应的导出函数：

- 函数 `[func]exportIconPackage()` 会创建每个图标对应一个文件的 NPM 包。当用户只需要少量图标时使用此方法。该方法已弃用，但由于部分开发者仍在使用，因此该函数仍会维护。
- 函数 `[func]exportJSONPackage()` 会创建将整个图标集包含在单个文件中的 NPM 包。用于获取完整的图标集。

这些函数不会发布包，它们仅生成内容。请运行 `[bash]npm publish` 来发布生成的包。
