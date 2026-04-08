```yaml
title: Iconify API 的反向代理
```

# Iconify API 的反向代理

本教程是 [Iconify API 安装说明](./index.md) 的一部分。

它介绍了如何在自定义托管环境中配置反向代理，以托管 [Iconify API](../index.md) 的 Node.js 版本。

## 为什么需要它？

什么是反向代理？为什么需要它？

在没有反向代理的情况下于 `[num]3000` 端口运行 Node.js 应用程序对于本地开发来说没有问题，但通常不适合生产环境。

在生产环境中，你需要稳定性和 HTTPS 支持。这应当交由反向代理处理。反向代理允许你添加 HTTPS 支持，以及速率限制等安全功能。

反向代理负责处理 HTTP 和 HTTPS 请求，将其转发给 Node.js 应用程序，并将响应返回给客户端。如果你有以下需求，它将非常有用：

- 在不同的端口上运行 API，这样你就可以在同一台服务器上托管多个网站，而不仅仅是托管 API。
- 处理 HTTPS 请求。Web 服务器将处理所有 SSL 相关事务。
- 应对恶意用户。你可以使用 Web 服务器规则来阻止行为不当的用户和机器人。
- 在子目录而非自定义子域名上使用 API。

### CloudFlare

你可以通过使用 CloudFlare 等服务来避免此问题。它会处理所有 HTTPS 请求并负责安全相关事务。

如果你使用此类服务，可以在端口 80 上运行 API，而无需再考虑反向代理。

## 配置

在配置反向代理之前，你需要确保 Iconify API 运行在一个对外部隐藏的端口上。

默认端口为 `[num]3000`。有关详细信息，请参阅 [API 配置](./config.md)。

### Apache 2.4 {#apache}

本节介绍如何使用 Apache 2.4 创建反向代理。

在 `[file]httpd.conf` 中，你需要取消注释以下两行以启用 `[prop]mod_proxy`：

```apache
LoadModule proxy_module libexec/apache2/mod_proxy.so
LoadModule proxy_http_module libexec/apache2/mod_proxy_http.so
```

然后，你可以像这样将 `[prop]mod_proxy` 添加到虚拟主机配置中：

```apache
<VirtualHost *>
    ServerName api.yourdomain.com
    ProxyPass "/" "http://localhost:3000/"
    ProxyPassReverse "/" "http://localhost:3000/"
</VirtualHost>
```

此配置将允许你通过 `[url]http://api.yourdomain.com/` 访问 API。

以下是一个替代方案，你可以将其添加到现有的 `[prop]VirtualHost` 指令中，从而允许你在子目录下运行 API：

```apache
<VirtualHost *>
    ServerName yourdomain.com
    ServerAdmin noreply@sourceforge.net
    DocumentRoot "/home/iconify/htdocs"
    ProxyPass "/api/" "http://localhost:3000/"
    ProxyPassReverse "/api/" "http://localhost:3000/"
</VirtualHost>
```

此方案将允许你通过 `[url]http://yourdomain.com/api/` 访问 API。

### NGINX

本节介绍如何使用 NGINX 创建反向代理。

打开 `[file]nginx.conf`，找到包含你域名的配置部分。它位于 `[prop]http` -> `[prop]server` -> `[prop]location` 层级下：

```nginx
http {
    # 此处为其他配置
    server {
        listen 80;
        server_name api.yourdomain.com;

        # 此处为其他配置
        location / {
            root   html;
            index  index.html index.htm;
        }
        # 此处为其他配置
    }
    # 此处为其他配置
}
```

将 `[prop]location` 的内容替换为以下内容：

```nginx
http {
    # 此处为其他配置
    server {
        listen 80;
        server_name api.yourdomain.com;

        # 此处为其他配置
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_buffering on;
            proxy_buffers 16 1024k;
        }
        # 此处为其他配置
    }
    # 此处为其他配置
}
```

你需要进行两次此更改：一次用于 HTTP 服务器，一次用于 HTTPS 服务器。在你的 `[file]nginx.conf` 中，找到配置为监听 `[num]443` 端口的第二个包含 SSL 设置的 `[prop]server` 部分，并应用完全相同的更改。

此配置将允许你通过 `[url]http://api.yourdomain.com/` 访问 API。

如果你想在子目录中托管 API，请添加自定义 location 块，而不是编辑默认的 location 块：

```nginx
http {
    # 此处为其他配置
    server {
        listen 80;
        server_name yourdomain.com;

        # 此处为其他配置
        location / {
            # 此处为其他配置
        }
        location /api/ {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_buffering on;
            proxy_buffers 16 1024k;
        }
        # 此处为其他配置
    }
    # 此处为其他配置
}
```

此方案将允许你通过 `[url]http://yourdomain.com/api/` 访问 API。

#### 解决 NGINX 中的 POST 错误 {#post-nginx}

如果你使用 GitHub Webhook 来同步图标集，可能会遇到 `[num]500` 错误。如果你刚安装 NGINX，这种情况非常可能发生。

该错误很可能是由于 NGINX 权限设置不正确引起的。运行以下命令进行修复：

```bash
sudo chmod +x /var/lib/nginx -R
```
