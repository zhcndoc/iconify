```yaml
title: Iconify API Queries
types:
  IconifyIcon: '../types/iconify-icon.md'
  IconifyJSON: '../types/iconify-json.md'
```

# Iconify API 查询

本教程面向希望创建自己的工具来访问 Iconify API 的开发者。

Iconify API 支持以下基本查询：

- [`[url]/{prefix}/{icon}.svg`](./svg.md) 动态生成 SVG。
- [`[url]/{prefix}.css?icons={icons}`](./css.md) 动态生成图标的 CSS。
- [`[url]/{prefix}.json?icons={icons}`](./icon-data.md) 检索图标数据。
- [`[url]/last-modified?prefixes={prefixes}`](./last-modified.md) 返回请求的图标集的最后修改时间，可用于使旧的图标数据缓存失效。

如果启用了图标列表功能，自定义图标选择器可以使用以下查询来浏览图标：

- [`[url]/collections`](./collections.md) 返回可用图标集的列表。
- [`[url]/collection?prefix={prefix}`](./collection.md) 返回图标集中图标的列表。

如果启用了搜索引擎，图标选择器可以使用以下查询实现搜索功能：

- [`[url]/search?query={keyword}`](./search.md) 返回匹配关键词的图标列表。
- [`[url]/keywords?prefix={keyword}`](./keywords.md) 或 [`[url]/keywords?keyword={keyword}`](./keywords.md) 返回包含所请求关键词的关键词列表，可用于自动补全。

维护查询：

- [`[url]/version`](./version.md) 以纯文本形式显示 API 版本（除非已禁用）。如果您正在运行多个 API 服务器（如公共 Iconify API 所做的那样），这可用于检查访问者连接到了哪台服务器。
- `[url]/update` 无需重启 API 即可从其源更新图标集。这可用于通过 GitHub hooks 或类似方法自动保持 API 为最新状态。

### API 版本

在代码示例中，上述部分查询标记为 API v2，部分标记为 API v3。

区别：

- API v2 查询自 Iconify API 版本 2 起就已存在，但未记录在文档中。它们目前受支持并将继续受支持，但未来可能会添加相同查询的改进版 v3。
- API v3 查询自 Iconify API 版本 3 起可用。

您可以同时使用这两个版本。可能会添加旧查询的改进版本以解决各种问题，但无需立即切换到新版本，旧版本将继续受支持。

API 甚至支持未记录在文档中且不应使用的 v1 查询。之所以支持它们，是因为它们仍可能存在于某些遗留应用程序中，例如旧版本的 Sketch Iconify 插件。

## 通用参数

所有返回 JSON 数据的查询都有一个通用参数：

- `[prop]pretty` 用于格式化 JSON 数据，使其易于阅读。设置为 `[number]1` 或 `[bool]true` 即可启用。
