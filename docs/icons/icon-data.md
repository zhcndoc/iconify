```yaml
title: 开源图标数据
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# 图标数据

目前有超过 60,000 个开源图标可供使用，您可以将它们用于您的项目中。

所有这些图标都具备以下特点：

- 开源。
- 经过验证和清理。
- 自动保持更新。

## 从哪里获取？ {#sources}

为了方便开发者使用图标，有多种获取图标数据的方式。

图标集的主要来源是 GitHub 上的 [iconify/icon-sets](https://github.com/iconify/icon-sets) 仓库。图标集以 `[type]IconifyJSON` 格式存储。

除了 Git 仓库外，图标集还提供以下形式：

- 大型 NPM 包 `[npm]@iconify/json`，内容与 Git 仓库完全一致。
- 面向 PHP 开发者的 Packagist 包 `[packagist]iconify/json`。
- NPM 包 `[npm]@iconify/collections`，仅包含可用图标集的列表（即大型包中的 `[file]collections.json` 文件）。
- 较小的 NPM 包 `[npm]@iconify-json/*`，每个包仅包含一个 `[type]IconifyJSON` 格式的图标集。
- [Iconify API](/docs/api/index.md)，可用于按需获取图标数据。

以下是对每种来源的详细说明。

### 所有图标

您可以从以下来源获取该软件包的最新版本：

- 来自 GitHub：[https://github.com/iconify/icon-sets](https://github.com/iconify/icon-sets)。
- 来自 NPM：`[npm]@iconify/json`。
- 来自 Packagist：`[packagist]iconify/json`。

该软件包体积较大，下载可能需要一些时间。

有关文件列表、函数和使用示例，请参阅[大型图标包文档](./all.md)。

### 图标集列表 {#collections}

如果您想获取所有可用图标集的列表，可以通过以下方式：

- 包含在上述大型包中，文件名为 `[file]collections.json`。
- 作为 NPM 包 `[npm]@iconify/collections` 提供。

更多详情请参阅[图标集列表](./collections.md)。

### 独立图标集 {#json}

每个图标集也会作为独立的 NPM 包 `[npm]@iconify-json/{prefix}` 发布（其中 `[str]{prefix}` 为图标集前缀）。

更多详情请参阅[拆分图标集包](./json.md)。

<!--
### 独立图标 {#icons}

此外，每个图标集还有对应的包 `[npm]@iconify-icons/{prefix}`，其中每个图标都单独存储在一个文件 `[npm]@iconify-icons/{prefix}/{name}` 中（其中 `[str]{prefix}` 是图标集前缀，`[str]{name}` 是图标名称），格式为 `[type]IconifyIcon`。

这使得打包单个图标的数据或从服务器按需逐个加载图标变得非常容易。

详情请参阅[独立图标包](./icons.md)。
-->

### API

[Iconify API](../api/index.md) 与所有其他来源有很大不同。

其他来源是各种可在构建时使用的软件包。使用它们需要预先知道您使用了哪些图标，因此构建工具只会提取您所需图标的数据。由于它们体积过大，无法在运行时使用。

API 适用于您不确定需要哪些图标的场景。[多个图标组件](/docs/icon-components/index.md) 会按需从 API 获取图标数据，然后进行渲染。

<icon-loading-process></icon-loading-process>

使用 API 获取图标数据存在一些缺点：

- 需要用户保持在线。无法用于离线应用。
- 依赖第三方服务，不过您可以自行托管 Iconify API 实例。
- 图标组件包含额外开销：用于按需下载图标数据的代码。

API 还提供可用图标集和图标的列表，可用于构建浏览和搜索图标的应用程序，例如各类插件和图标选择器。

### SVG

没有专门针对 SVG 文件的软件包，但您可以使用 [Iconify Tools](/docs/libraries/tools/index.md) 自行生成。

在 Iconify Tools 示例中，您可以找到一个[将所有图标导出为 SVG 的简单脚本](/docs/libraries/tools/examples/export-svg.md)。
