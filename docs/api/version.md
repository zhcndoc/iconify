```yaml
title: API 版本查询
```

# API 版本查询

API 查询 `[url]/version` 会显示：

- API 版本。
- 如果设置了 `[prop]STATUS_REGION` 环境变量，则显示您连接到的服务器。

## 区域

此查询的目的是能够告知您连接到了哪台服务器，同时不暴露服务器的实际位置，这有助于调试错误。当网络中运行着多台服务器时，会使用此功能。

例如，公共 Iconify API 服务器运行着多台服务器，分布在全球各地。DNS 配置为使用 AWS Route53 延迟路由将访问者重定向到最近的服务器。这保证了尽可能最小的响应时间。有关详细信息，请参阅[构建低成本 CDN 文章](./cdn.md)。

如果出现问题，最好能知道是哪台服务器导致了问题，但又不暴露服务器的实际 IP 地址，而 `[url]/version` 查询正好解决了这个问题。

## 查询

API 查询为 `[url]/version`。

无参数。

## 响应

响应为纯文本，显示版本号。

## 示例

基本响应：

```txt
Iconify API version 3.0.0-beta.1
```

设置 `[prop]STATUS_REGION=DE` 时的响应：

```txt
Iconify API version 3.0.0-beta.1 (DE)
```

## 配置

在 [API 的 Node.js 版本](./hosting-js/index.md) 中，您可以配置此 API 查询的结果。

可以使用环境变量 `[prop]ENABLE_VERSION` 启用或禁用该查询。可能的值：`[bool]true` 或 `[bool]false`：

```txt
ENABLE_VERSION=false
```

您也可以在 `[file]src/config/app.ts` 文件的 `[var]enableVersion` 属性中进行设置，然后重新构建 API。

区域值可以使用 `[prop]STATUS_REGION` 环境变量进行设置。该值为字符串：

```txt
STATUS_REGION=API1
```

您也可以在 `[file]src/config/app.ts` 文件的 `[var]statusRegion` 属性中进行设置，然后重新构建 API。
