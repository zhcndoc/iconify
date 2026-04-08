```yaml
title: Iconify API 中的 HTTP 标头
```

# API 中的 HTTP 标头

本教程是 Node.js 版 [Iconify API 安装说明](./index.md) 的一部分。
本部分教程将解释如何更改 API 服务器发送给访问者的 HTTP 标头。

默认情况下，服务器会发送以下 HTTP 标头：

- 各种 CORS 标头，允许从任何位置访问。
- 缓存标头，用于将响应缓存 604800 秒（7 天）。

要更改标头，请编辑 `[file]src/config/app.ts` 中的 `[prop]httpHeaders` 变量，然后重新构建脚本：

如果您更倾向于使用反向代理来发送所有额外的标头，
请在上述文件中移除所有不必要的标头，并在反向代理中更改配置。

## 在 Apache 中配置 CORS {#cors-apache}

如果您使用 Apache 作为反向代理，可以在 API 中禁用 CORS，并在 Apache 中启用它。

要在 Apache 中启用 CORS，请将以下内容添加到 Apache 配置中：

```apache
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, OPTIONS"
Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding"
Header always set Access-Control-Max-Age "86400"
Header always set Cross-Origin-Resource-Policy "cross-origin"
```

## 在 NGINX 中配置 CORS {#cors-nginx}

如果您使用 NGINX 作为反向代理，可以在 API 中禁用 CORS，并在 NGINX 中启用它。

要在 NGINX 中启用 CORS，请将以下内容添加到 NGINX 配置的 `[prop]http` -> `[prop]server` -> `[prop]location` 块下：

```nginx
if ($request_method = 'POST') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
   add_header 'Cross-Origin-Resource-Policy' 'cross-origin';
}
if ($request_method = 'GET') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
   add_header 'Cross-Origin-Resource-Policy' 'cross-origin';
}
```
