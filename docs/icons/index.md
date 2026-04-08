```yaml
title: "入门指南：图标"
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "80 icon sets"
    value: "${counters.sets} 个图标集"
  - code: "80 open source"
    value: "${counters.sets} 个开源"
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyIcon: "/docs/types/iconify-icon.md"
```

# 图标

您可以从 80 多个开源图标集中获取超过 60,000 个图标，并在您的项目中使用它们。

Iconify 文档的这一部分将解释：

- 在哪里获取用于项目的图标原始数据。
- 图标是如何组织的。
- Iconify 如何处理图标（导入、清理、更新）。

本节仅涉及图标数据，不解释如何在项目中使用图标，
如需了解使用方法，请[参阅文档的其他部分](/docs/usage/index.md)。

## 图标数据 {#data}

图标的组织方式：

- 图标按图标集分组。每个图标集包含来自同一来源的图标。
- 图标集以易于使用的 JSON 格式导出，其中包含图标和额外的元数据。
- 所有图标集都存储在一个主要的 GitHub 仓库中，也可作为 NPM 包获取。

有关包和仓库的列表，请参阅[如何获取图标数据](./icon-data.md)。

您可以使用这些数据来创建自己的组件、插件，或生成各种格式的图标。

Iconify 生态系统提供了[用于渲染图标的不同组件和插件](/docs/usage/index.md)以及[用于处理图标的工具](/docs/libraries/index.md)。

### Iconify 有何不同之处？ {#iconify}

Iconify 与其他整合图标的项目有何不同？

- 所有图标集都会自动保持更新。
- 图标并非原样直接导入，它们会经过严格的验证、清理和优化流程，以确保所有图标集中的图标都能以一致的方式使用。
- 图标数据以易于使用的格式提供，鼓励开发者创建自己的渲染组件。

有关更多详细信息，请参阅[图标清理与验证流程](./icon-basics.md)一文。该文还介绍了 Iconify 中使用的图标命名规范。

## 图标集

Iconify 中的图标按图标集进行组织。

每个图标集都包含来自同一作者（或团队）且遵循相同主题的图标。

有关更多详细信息，请参阅[图标集基础](./icon-set-basics.md)。

图标集会自动保持更新，每周会检查数次更新。

## 自定义图标 {#custom}

您也可以将 Iconify 与自定义图标一起使用。

这使您能够复用 Iconify 生态系统中的组件和插件来处理您的图标，而无需自行开发。

有关详细信息，请参阅[构建自定义图标集](./custom.md)。

## 添加图标集 {#add}

如果您创建了一个想要添加到 Iconify 的开源图标集，请[按照本指南操作](/docs/articles/add-icon-set/index.md)。
