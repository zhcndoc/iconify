```yaml
title: Iconify 工具
replacements:
  - code: "@iconify/tools@2"
    value: "${tools.import-tools2}"
types:
  IconifyIcon: "/docs/types/iconify-icon.md"
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
  FullIconifyIcon: "../utils/full-iconify-icon.md"
  Color: "../utils/color.md"
  FullIconCustomisations: "../utils/icon-customisations.md"
  IconCustomisations: "../utils/icon-customisations.md"
  SVG: "./svg/index.md"
  IconSet: "./icon-set/index.md"
functions:
  mergeIconSets: "./icon-set/merge.md"
  setIcon: "./icon-set/set-icon.md"
  cleanupSVG: "./icon/cleanup.md"
```

# Iconify 工具

Iconify Tools 是一组用于导入、导出和解析图标的可复用函数。

该库使用 TypeScript 编写。

## 安装

要安装该库，请运行：

```sh
npm install @iconify/tools@2 --save
```

### CommonJS 支持

最新版本不支持 CommonJS。

如果您需要使用 CommonJS，请安装版本 4：

```sh
npm install @iconify/tools@cjs --save
```

## 类

`include libraries/tools/main-classes`

## 导入

要开始使用图标集，您可以创建空白图标集，或从某些来源导入图标集。

导入图标的相关文档：

- [导入 Iconify JSON 数据](./import/json.md)。
- [导入 SVG](./import/svg.md)。
- [导入目录中的所有 SVG](./import/directory.md)。
- [从 Figma 导入图标](./import/figma/index.md)。

在使用 Iconify Tools 之前，您应了解该包具有明确的设计约定。
某些标签是不被允许的，并且会导致导入失败。
请参阅 [SVG 导入限制](./tags.md)。

## 清理与验证

如果图标来自以下来源，导入图标后您首先应该做的就是清理和验证图标：

- 图像编辑软件。此类软件通常会在图标中留下大量冗余代码，必须将其移除。
- 第三方来源。您需要确保图标不包含脚本或事件。

请参阅 `[func]cleanupSVG()` 文档。

## 图标操作

Iconify Tools 提供了多个用于操作图标的函数。您可以：

- 检查或更改调色板。
- 优化图标。
- 修复 `[tag]path` 元素以兼容旧版软件。

有关可用函数列表，请参阅[图标操作函数](./icon/index.md)。

## 导出

操作图标后，您可以[将图标集导出为各种格式](./export/index.md)。

导出图标的相关文档：

- [导出 Iconify JSON 数据](./export/json.md)。
- [将 SVG 导出到目录（简化版）](./export/directory.md)。
- [导出 SVG](./export/svg.md)。
- [导出图标包](./export/icon-package.md)。
- [导出 Iconify JSON 包](./export/json-package.md)。

## 包管理函数 {#package}

除了管理图标外，Iconify Tools 还提供了一些[用于管理包和仓库的函数](./package/index.md)：

- [下载 Git 仓库](./package/git.md)
- [使用 GitHub API 下载 GitHub 仓库](./package/github.md)
- [下载 NPM 包](./package/npm.md)
- [比较目录](./package/compare.md)
- [管理包或仓库的版本](./package/index.md#versions)
