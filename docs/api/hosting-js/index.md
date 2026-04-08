# 托管 Iconify API

本文档适用于 [Iconify API](../index.md) 的 Node.js 版本。

要安装 API，请先从 GitHub 克隆或下载 Iconify API：[https://github.com/iconify/api](https://github.com/iconify/api)。

## 使用方法

首先，你需要安装 NPM 依赖并运行构建脚本：

```sh
npm install
npm run build
```

然后你可以启动服务器：

```sh
npm run start
```

默认情况下，服务器将：

- 自动从 [`[npm]@iconify/json`](/docs/icons/all.md) 加载最新图标。
- 在 `[num]3000` 端口提供数据服务。

你可以自定义 API 以：

- 提供从各种来源加载的自定义图标集。
- 在不同的端口上运行。
- 如果不需要搜索引擎，可以将其禁用，从而减少内存占用。

## 端口与 HTTPS

建议不要在 `[num]80` 端口上运行 API。
该服务器几乎可以处理任何请求，但它仍然不如 nginx 等专用解决方案。

在隐蔽的端口上运行 API，通过防火墙规则对外隐藏，并使用 nginx 作为反向代理。

不支持 HTTPS。
这是一个非常消耗资源的过程，最好由 nginx 等专用解决方案来处理。
使用 nginx 作为 HTTP 和 HTTPS 服务器运行，
将查询转发到隐藏端口（如默认端口 `[num]3000`）上的 API HTTP 服务器。

## 配置

有几种更改配置的方法：

- 编辑 `[file]src/config/` 中的文件，然后重新构建脚本。某些高级选项（例如将 API 与自定义图标一起使用）需要此操作。
- 使用环境变量，例如 `[bash]PORT=3100 npm run start`。
- 使用 `[file].env` 文件存储环境变量。

有关详细信息，请参阅 [Iconify API 配置](./config.md)。

## 启动服务器

要启动服务器，请运行

```sh
npm run start
```

### PM2

为确保 API 不间断运行，请使用 [pm2](https://github.com/Unitech/PM2/) 或类似的 Node.js 进程管理器来运行应用程序。

如果出现问题，它将自动重启 API；如果服务器重启，它也会自动启动 API。
有时主机服务器可能会因各种原因重启，这将确保 API 始终处于运行状态。
