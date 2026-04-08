```yaml
title: 如何将图标集添加到 Iconify
```

# 如何将图标集添加到 Iconify

如果您创建了一个图标集，请考虑将其与 Iconify 社区分享。

## 优势

将图标集发布到 Iconify 有哪些好处？

- 图标将提供给成千上万的用户，这些用户[使用从 Iconify 获取图标数据的项目](/docs/usage/index.md)。
- Iconify 是开源的，所有图标集也是开源的，并且被许多开源项目使用。您是否愿意为开源项目做出贡献？
- 每个图标集都有一个信息部分，其中包含作者姓名和仓库链接。它会显示在列出图标的网站上，也会显示在 Figma 和 Sketch 插件中。这可能会为您带来一些访客、关注者以及搜索引擎的链接。

## 添加图标集

要将图标集添加到 Iconify，您只需[在 GitHub 上的 Iconify 图标集仓库中提交一个 Issue](https://github.com/iconify/icon-sets)。

在提交的 Issue 中，您需要提供：

- 图标的链接。见下文。
- 每个图标集都有一个前缀，例如 `[icon]mdi-light`。您可以提交希望分配给您的图标集的前缀。

### 图标集来源

图标集每周会自动更新数次。
为了更新图标集，图标必须由开发者发布并维护在以下来源之一：

- 包含 SVG 文件的公共 Git 仓库（GitHub、GitLab 等）。
- 包含 SVG 文件的 NPM 包。
- Figma 文档。您需要共享该文件并发布其链接。

更新必须是自动化的，因此从第三方网站手动下载图标是不可行的。

### 开源

所有图标集必须是开源的，并且具有有效的开源许可证。

如果您不确定许可证，可以[查看各种图标集](https://icon-sets.iconify.design/)。点击任意图标集，它将显示许可证及许可证文本的链接。

常见的许可证：

- [MIT](https://opensource.org/licenses/MIT)。
- [Apache 2.0](https://opensource.org/licenses/Apache-2.0)。
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。

更多许可证请参阅[开放源代码促进会](https://opensource.org/licenses)。

### 不符合要求的图标集

并非所有图标集都是一样的。图标集有好有坏。不符合要求的图标集将不会被接受。

最常见的原因：

- 图标集应对社区有用。如果图标集是特定于您的网站的（例如您的网站 Logo），那么它对其他开发者并没有太大用处。
- 是图标，而非插画。图标集必须仅包含可用作小图标的图标，而不是用作大图像。包含高细节、旨在用作大图像的矢量图像集合是不可接受的。
- 不接受从字体导出的图标。从字体导出的图标几乎总是对齐不佳，不遵循任何逻辑网格系统。它们的质量非常低，不适合作为 SVG 使用。

## 设计建议

如果您是图标设计新手，[Google Material Icons 网站提供了出色的图标设计指南](https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes)。

这些指南专门针对 Material Design，但相同的原则适用于大多数图标。尽管图标是矢量图像，但显示器是基于像素的设备，如果形状未与像素边缘对齐，图标边缘就会模糊。遵循特定网格、具有内边距、形状与像素边缘对齐的图标集，是外观最佳的图标集。
