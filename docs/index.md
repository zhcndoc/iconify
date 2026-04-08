```yaml
title: Iconify 文档
replacements:
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "60,000"
    value: "${counters.icons}"
  - code: "80 个图标集"
    value: "${counters.sets} 个图标集"
  - code: "80 个开源"
    value: "${counters.sets} 个开源"
```

# Iconify 文档

Iconify 是一套为开发者和设计师打造的工具集，旨在以一致的方式简化不同图标集的使用。

它包括：

- 来自 80 多个开源图标集的 6 万多个图标，全部经过清理、优化并保持最新。
- 用于导入、导出和组织图标的工具。
- 用于渲染图标的组件和插件。
- 供 UI 开发者浏览图标并将其导入设计工具的插件。
- 用于浏览、搜索图标集和获取图标数据的公共 API。

## 如何使用图标

Iconify 生态系统为开发者和设计师提供了多种使用图标的方式。

要在 HTML 文档中使用图标，有几种可行的方案：

`include usage/options/html`

对于设计师，Iconify 生态系统提供了几种在各种设计工具中轻松导入图标的方法：

`include usage/options/design`

您可以在以下网站上浏览所有可用图标并复制代码或 SVG：

`include usage/options/websites`

找到您想要的图标，选中它，将代码示例或 SVG 复制到剪贴板，然后粘贴到您的项目中。

有关更多详细信息，请参阅[如何使用图标](./usage/index.md)。

## 图标数据

与其他项目不同，Iconify 并非简单的 SVG 文件堆砌。

图标需经过严格的验证、清理和优化流程。图标会自动保持更新。

如果您想在自己的组件中使用图标，图标数据将以易于使用的格式提供。

在[文档的图标部分](./icons/index.md)中，您将找到：

- [在哪里获取图标数据](./icons/icon-data.md) 以供在您的项目中使用。
- [图标的清理与优化](./icons/icon-basics.md)：命名规则、图标类型、清理流程。
- [图标集](./icons/icon-set-basics.md)：什么是图标集、数据格式、命名规范以及如何解析它们。
- [如何构建自定义图标集](./icons/custom.md)，如果您想将自己的图标用于 Iconify 生态系统。

## 库

Iconify 提供了多个用于处理图标的软件包。

所有软件包均仅支持 JavaScript。不过，其格式相当易于理解，且类型均有文档说明，因此您可以将代码移植到您使用的任何语言。

主要有 3 个软件包：

- 类型包（TypeScript），用于描述数据格式。
- 工具包，包含可在 Node 和浏览器中运行的可复用辅助函数。
- 工具包，包含用于导入、导出图标集以及处理图标的工具。此软件包仅适用于 Node.js。

### 类型

在使用任何工具之前，您需要了解 Iconify 生态系统中使用的数据结构。

请参阅 [Iconify 类型文档](./types/index.md)。

### 工具函数

[Iconify Utils](./libraries/utils/index.md) 包含以下可复用函数：

- 读取和解析图标集。
- 为图标生成 SVG 和 CSS 代码。

以及许多其他辅助函数。

该软件包设计为可在任何环境中运行。它被所有 Iconify 软件包使用，包括图标组件、API 和插件。

### 工具

[Iconify Tools](./libraries/tools/index.md) 旨在用于导入、导出和处理图标数据。

它用于维护可用的开源图标集。

该软件包仅设计用于在 Node.js 中运行。无法在浏览器中使用。

## API

[Iconify API](./api/index.md) 是一项开源的托管（或自托管）服务，专为开发者设计。它用于：

- 按需提供图标数据，这使得创建可[按需加载图标的 Iconify 图标组件](./icon-components/index.md)成为可能。
- [生成 SVG](./api/svg.md)，开发者可在 HTML 或样式表中链接使用。
- [生成 CSS](./api/css.md)，用于将图标渲染为背景或遮罩图像。
- 为托管图标提供数据，包括搜索功能。这可用于创建图标选择器，目前已被[适用于各种 UI 设计工具的 Iconify 插件](./design/index.md)所使用。
