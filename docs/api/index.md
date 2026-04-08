```yaml
replacements:
  - code: "60k"
    value: "${counters.icons-short}"
  - code: "70 icon sets"
    value: "${counters.sets} icon sets"
  - code: "70 open source"
    value: "${counters.sets} open source"
```

# Iconify API

Iconify API 是一项面向开发者的开源托管（或自托管）服务。

它有什么用途？

- API 提供图标数据，从而使得创建能够按需加载图标的 [Iconify 图标组件](../icon-components/index.md) 成为可能。
- API [生成 SVG](./svg.md)，开发者可以在 HTML 或样式表中链接到它。
- API [生成 CSS](./css.md)，用于将图标渲染为背景或遮罩图像。
- API 内置了托管图标的搜索引擎，可供图标选择器使用。目前已被用于各种 UI 设计工具的 [Iconify 插件](../design/index.md)。

API 可用于在网站构建器或主题定制器中提供数十万个图标。您可以托管自己的 API，在自定义图标选择器中使用 API 的搜索引擎以允许用户选择图标，并在 UI 中使用图标组件来渲染图标。

## 托管 API

您可以自行托管 Iconify API 服务。

自行托管 Iconify API 可以让您：

- 完全掌控服务器，而无需依赖第三方服务。
- 可以选择托管哪些图标集，或托管您自己的图标集。

有关更多详细信息，请参阅[托管 Iconify API](./hosting.md)。

API 可通过以下途径获取：

- [GitHub](https://github.com/iconify/api/) - 您可以在部署前对其进行自定义。
- [NPM](https://www.npmjs.com/package/@iconify/api) - 可嵌入到应用程序中，无需运行完整的服务器。
- [Docker](https://hub.docker.com/r/iconify/api) - 适用于快速部署。

## 公共 API

Iconify 项目提供公共 API 服务器，托管了来自 70 多个开源图标集的超过 6 万个图标。

为了提高加载速度，API 部署在全球不同地区的多台服务器上。图标通常能在几分之一秒内加载完成。

公共 API 的访问地址为 `[url]https://api.iconify.design`。

这是一项公共服务，服务器可免费使用，但请牢记运行这些服务器并非没有成本。如果您正在使用公共 API 或 API 软件，[请考虑支持 Iconify](https://iconify.design/sponsors/)，以帮助分担基础设施、开发和维护成本。

### 冗余备份

有时网络连接会出现问题。这很常见。可能是服务器出了问题，也可能是访问者的网络服务提供商（ISP）出现了故障。

如果无法访问主 API 主机，Iconify 公共 API 提供了备用主机名：

- `[url]https://api.simplesvg.com`
- `[url]https://api.unisvg.com`

每个备用主机名指向一半的 API 服务器。例如，在西欧目前有两台服务器：分别位于法兰克福和伦敦。主主机指向这两台服务器，其中一个备用主机指向法兰克福的服务器，另一个备用主机指向伦敦的服务器。如果法兰克福的服务器宕机，使用该服务器的用户可以通过其中一个备用主机名被重定向到伦敦的服务器。

Iconify 图标组件内置的冗余机制已考虑到这一点。它会首先尝试连接主主机，然后，如果在合理时间内（超时时间为 0.75 秒）未收到响应，它将尝试连接其中一个备用主机，接着尝试另一个备用主机。检查造成的微小延迟仅影响首次查询，所有后续的 API 查询都将发送至已响应的主机。

有关更多详细信息，请参阅[构建冗余 API](./cdn.md)。

## 查询

Iconify API 可用于渲染 SVG、检索图标数据、浏览和搜索图标。

有关支持的查询完整列表、其参数及 API 响应，请参阅 [Iconify API 查询文档](./queries.md)。

## API 提供商

Iconify 图标组件可以从多个 API 服务器检索图标。

这允许您运行自己的 API 仅用于提供自定义图标，同时使用公共 Iconify API 获取开源图标集的数据。

有关详细信息，请参阅 [Iconify API 提供商](./providers.md)。
