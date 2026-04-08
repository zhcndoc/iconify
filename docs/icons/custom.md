```yaml
title: 自定义图标集
types:
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  exportJSONPackage: '/docs/libraries/tools/export/json-package.md'
```

# 自定义图标集

您也可以将 Iconify 与自定义图标一起使用。

大多数图标组件和插件都支持自定义图标集。唯一的例外是那些不打算与自定义图标集配合使用的插件，例如 [Figma 的 Iconify 插件](/docs/design/figma/index.md)。

## 格式

自定义图标集的处理方式取决于您的使用场景。

[Iconify 生态系统中的所有工具](/docs/usage/index.md) 都使用 `[type]IconifyJSON` 格式。

一些设计用于在 Node.js 中运行（服务端渲染或与打包工具配合使用）的图标组件和插件可以导入单个 SVG 文件，但通常它们会将图标转换为 `[type]IconifyJSON` 格式。

## 导入工具

在 Node.js 环境中，可以在构建时导入自定义图标集。

这可以通过 [Iconify Tools](/docs/libraries/tools/index.md) 包来完成。

典型的导入流程：

- 导入图标。有[多种导入函数](/docs/libraries/tools/import/index.md)。它们会创建未解析的图标集。
- [清理导入的图标](/docs/libraries/tools/icon/cleanup.md)。
- 对于单色图标集，[解析颜色](/docs/libraries/tools/icon/colors.md)以确保所有图标都使用 `[prop]currentColor`。
- 将[图标集导出](/docs/libraries/tools/icon-set/export.md)为 `[type]IconifyJSON`。

有关代码示例，请参阅 [Iconify Tools 代码示例](/docs/libraries/tools/examples/index.md)。

## 使用自定义图标集

具体用法取决于您想在何处使用它。请参阅您打算配合使用的图标组件的文档。

如果您想使用的图标组件是按需加载图标数据的，您可能需要[搭建自己的 Iconify API](/docs/api/hosting-js/index.md) 来托管自定义图标集。
