# 托管 Iconify API

本文介绍如何在您自己的服务器上托管 Iconify，从而使您的网站不再依赖 Iconify 公共 API 服务器。

[Iconify API](./index.md) 软件以 Node.js 脚本的形式提供。

## Django Iconify

除了上述的 Iconify API 之外，还有一个由社区为 Django 用户创建的替代方案：[django-iconify](https://pypi.org/project/django-iconify/)。

有关配置选项和使用方法，请参阅 [django-iconify 项目页面](https://pypi.org/project/django-iconify/)。

## 源代码

您所需的一切均可在 [Iconify GitHub 仓库](https://github.com/iconify) 中找到：

- [Iconify API](https://github.com/iconify/api)
- [开源图标集](https://github.com/iconify/icon-sets)

## Node.js API {#node}

有关安装和配置说明，请参阅 [Iconify API: Node.js](./hosting-js/index.md)。

## API 网络

Iconify 公共 API 托管在多个服务器上，这些服务器共同构成了一个自定义 CDN。它们分布在全球不同地区，访问者始终会被重定向到距离最近的服务器。

CDN 如何提供帮助？通过将访问者连接到最近的服务器，可以大幅降低延迟：

- 来自美国的访问者将连接到位于美国不同地区的服务器之一。
- 来自欧洲的访问者将连接到英国或德国的服务器。
- 对于来自亚洲的访问者，设有新加坡和日本的服务器。
- 对于来自大洋洲的访问者，设有澳大利亚的服务器。

在需要时，可能会在其他地区添加额外的服务器。

它还有什么其他作用？冗余性。停机情况时有发生。如果某台服务器出现问题，您可以快速将其禁用，访问者将被路由到另一台服务器。有一些工具可以自动化此过程，例如 Route 53 健康检查。

想要为 Iconify API 设置自己的 CDN 吗？请参阅 [设置自定义 CDN 教程](./cdn.md)。

为了增强安全性，Iconify 公共 API 还使用了 CloudFlare 服务。然而，这并不会改变什么。CDN 并非用于将访问者直接连接到最近的服务器，而是用于将 CloudFlare 边缘服务器连接到最近的 API。Iconify API 仍然能从自定义 CDN 提供的延迟降低中获益良多。
