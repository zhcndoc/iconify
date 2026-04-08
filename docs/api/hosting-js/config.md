```yaml
title: Iconify API 配置
```

# Iconify API 配置

本教程是面向 Node.js 的 [Iconify API 安装说明](./index.md) 的一部分。
本部分教程将解释 API 的配置选项。

有几种更改配置的方法：

- 编辑 `[file]src/config/` 中的文件，然后重新构建脚本。某些高级选项（例如将 API 与自定义图标结合使用）需要此操作。
- 使用环境变量，例如 `[bash]PORT=3100 npm run start`。
- 使用 `[file].env` 文件来存储环境变量。

如果您的 API 已经在运行，更改配置后必须重启 API。
配置无法在不中断服务的情况下重新加载。

## 环境变量选项

可以通过环境变量更改的选项及其默认值（您可以在 `[file]src/config/app.ts` 中找到所有选项）：

- `[bash]HOST=0.0.0.0`：HTTP 服务器监听的 IP 地址或主机名。
- `[bash]PORT=3000`：HTTP 服务器监听的端口。
- `[bash]REDIRECT_INDEX=https://iconify.design/`：`[url]/` 路由的重定向地址。API 不提供任何页面服务，因此索引页会重定向到主网站。
- `[bash]STATUS_REGION=`：添加到 [`[url]/version`](../version.md) 路由响应中的自定义文本。Iconify API 运行在服务器网络上，访问者会被路由到最近的服务器。此选项用于告知用户连接到了哪台服务器。
- `[bash]CACHE_ROOT_DIR=cache`：缓存目录，相对于应用目录，末尾不带 `[str]/`。
- `[bash]ENABLE_VERSION=true`：启用显示 API 版本和 `[prop]STATUS_REGION` 值的 [`[url]/version`](../version.md) 路由。如果您仅使用 API 提供图标数据，请禁用它。
- `[bash]ENABLE_ICON_LISTS=true`：启用列出图标集的 [`[url]/collections`](../collections.md) 路由，以及用于获取图标列表的 `[url]/collection?prefix=whatever` 路由。供图标选择器使用。如果您仅使用 API 提供图标数据，请禁用它。
- `[bash]ENABLE_SEARCH_ENGINE=true`：启用 [`[url]/search`](../search.md) 路由。需要 `[bash]ENABLE_ICON_LISTS=true`。
- `[bash]ALLOW_FILTER_ICONS_BY_STYLE=true`：允许基于填充（fill）或描边（stroke）搜索图标，例如在搜索查询中添加 `[url]style=fill`。此功能会占用少量内存，因此可以禁用。需要 `[bash]ENABLE_SEARCH_ENGINE=true`。

## 更新图标

服务器启动时会自动更新图标。

除此之外，API 还可以在不重启服务器的情况下更新图标集。

要启用自动更新，您必须设置 `[bash]APP_UPDATE_SECRET` 环境变量。没有它，更新将无法工作。

- `[bash]ALLOW_UPDATE=true`：启用 `[url]/update` 路由。
- `[bash]UPDATE_REQUIRED_PARAM=secret`：密钥/值对中的键。不能为空。
- `[bash]APP_UPDATE_SECRET=`：密钥/值对中的值。不能为空。
- `[bash]UPDATE_THROTTLE=60`：运行更新前等待的秒数。

要触发图标集更新，请打开 `[url]/update?foo=bar`，其中 `[prop]foo` 是 `[bash]UPDATE_REQUIRED_PARAM` 的值，`[prop]bar` 是 `[bash]APP_UPDATE_SECRET` 的值。

更新不会立即触发，它将在 `[bash]UPDATE_THROTTLE` 秒后运行。
这样做是为了防止当类似 GitHub hooks 的机制连续多次触发更新时进行重复检查。

如果在更新过程已经在运行时触发了更新
（即，已检查源是否有更新，但下载仍在进行中），
则会在当前运行的更新结束后再次运行更新检查。

无论结果如何，对 `[url]/update` 路由的响应始终相同。
这样做是为了防止他人尝试猜测密钥/值对，甚至无法判断该路由是否已启用。
要查看实际结果，您需要检查控制台。
成功的请求和更新过程将被记录到日志中。

## HTTP 标头

默认情况下，服务器会发送以下 HTTP 标头：

- 各种 CORS 标头，允许从任何地方访问。
- 缓存标头，用于将响应缓存 604800 秒（7 天）。

有关更多详细信息，请参阅 [如何在 API 中更改 HTTP 标头](./headers.md)。

## 内存管理

API 不会将所有已加载的图标存储在内存中。
相反，它将图标集拆分为较小的块，将它们存储在缓存中，并在需要时从缓存加载这些块。
从缓存加载块后，它会在内存中保留一段时间。
这样，最常用的图标会保留在内存中，而很少使用的图标则不会占用内存。

有两个配置变量用于处理此问题：

- `[file]src/config/app.ts` 中的 `[var]splitIconSetConfig`，用于管理将大型图标集拆分为较小的块。
- `[file]src/config/app.ts` 中的 `[var]storageConfig`，用于管理缓存。

这些配置对象中的所有属性都可以通过环境变量进行更改。
将属性转换为下划线分隔的大写形式，
为 `[var]splitIconSetConfig` 添加 `[str]SPLIT_` 前缀，为 `[var]storageConfig` 添加 `[str]STORAGE_` 前缀。

您可能想要更改的配置值（作为环境变量）：

- `[bash]STORAGE_CACHE_DIR={cache}/storage`：存储缓存的目录，相对于应用目录，末尾不带 `[str]/`。使用 `[str]{cache}` 指向 `[bash]CACHE_ROOT_DIR` 变量中设置的根缓存目录。
- `[bash]STORAGE_MAX_COUNT=100`：内存中存储项的最大数量。如果内存使用率过高，请减少该数值。设置为 `[num]0` 可禁用。
- `[bash]STORAGE_TIMER=60000`：用于检查过期项的计时器。

如果您希望始终将图标数据保留在内存中，请设置 `[bash]SPLIT_CHUNK_SIZE=0` 和 `[bash]STORAGE_MAX_COUNT=0`。
如果您的 API 实例不需要提供数十万个图标，这将有助于使响应速度尽可能快。
