```yaml
title: 构建低成本自定义内容分发网络
```

# 自定义低成本 CDN

本教程是 [Iconify API 托管说明](./hosting.md) 的一部分。

什么是 CDN？CDN 是内容分发网络（Content Delivery Network）的缩写。
它是一组分布在全球各地的服务器，旨在尽可能快速地将内容传递给访问者。
AnyCast DNS 会将访问者连接到距离最近的服务器。

如果您正在设置自定义的 [Iconify API](./index.md) 并希望利用 CDN 的优势，本教程将为您提供指导。

## 无状态 CDN

本教程适用于无状态 CDN。

无状态意味着每个请求都不依赖于先前的请求，
因此，如果访问者连接到了与之前不同的边缘服务器，也不会产生任何影响。

Iconify API 是无状态的。
它不允许访问者存储任何内容，不跟踪任何信息，也不发送任何 Cookie。
没有中央服务器，每个 API 服务器都独立于其他服务器运行。

## 设置边缘服务器

首先，您需要在全球不同地区创建多个源站服务器。

所有服务器都需要配置为针对完全相同的主机名提供完全相同的数据。
您需要配置多个完全相同的服务器。
有许多工具可以自动化此过程；但是，它们不属于本教程的范畴。

有关如何为 Iconify API 设置托管的教程，请参阅[托管教程](./hosting.md)。

## Route53

设置好多个服务器后，您希望将用户引导至距离最近的服务器。

向您的域名添加多个 `[str]A` 记录无法实现这一点。您需要 AnyCast DNS。

AnyCast DNS 非常昂贵。极其昂贵。如果您没有数千美元的预算怎么办？
好消息是有一个替代方案：Amazon 的 Route53 延迟路由。

Route53 延迟路由的工作原理是将访问者重定向到距离最近的 Amazon 数据中心。

如果您不在 Amazon 数据中心托管网站怎么办？
您可以将网站托管在距离 Amazon 不远的数据中心（同一个国家或州），
这完全足以将访问者重定向到您距离最近的服务器。

### 设置 Route53

- 您需要一个 AWS 账户。请在 [AWS 主页](https://aws.amazon.com) 注册。
- 访问 [Route53 页面](https://console.aws.amazon.com/route53/home?region=eu-central-1)（如需登录请先登录）。
- 点击 `[str]Hosted Zones` 链接，点击您的域名或创建一个新区域。

然后，您需要为 CDN 中的每个服务器添加记录。
点击 `[str]Create Record Set`，在 `[str]Name` 字段中输入子域名，
在 `[str]Value` 字段中输入 IP 地址，在 `[str]Routing Policy` 字段中选择 `[str]Latency`。
最后一步非常重要：它使得根据延迟将访问者重定向到最近的服务器成为可能。
选择最接近您服务器物理位置的地区，并在 `[str]Set ID` 字段中输入任意内容。

如果您在 AWS 服务上运行脚本，请不要输入 IP，而是为 `[str]Alias` 选项选择 `[str]Yes`，然后选择 AWS 实例。

![向 Route53 添加新记录](/assets/images/hosting/route53-new-record.png)

点击 `[str]Create` 按钮以添加该记录。

为您的其他服务器再创建几条记录。
对于每条记录，输入相同的子域名，但使用不同的 IP 和不同的地区。

完成后，界面应该看起来像这样：

![Route53 记录](/assets/images/hosting/route53-records.png)

请注意，`[str]icons.simplesvg.com` 有 3 条记录，分别指向不同的 IP 地址，并设置了不同的地区。

就是这样。当访问 `[url]icons.simplesvg.com` 时，用户将被重定向到 3 个 IP 地址（1.2.3.4、2.3.4.5、3.4.5.6）中的一个，具体取决于哪个 AWS 数据中心距离最近。其精度足以构建一个低成本的自定义 CDN。

## Iconify API

此方法用于托管 Iconify API，其托管地址为 `[url]api.iconify.design`。

