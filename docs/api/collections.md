```yaml
title: 图标集列表
types:
  IconifyInfo: '../types/iconify-info.md'
```

# 图标集列表

您可以使用 `[url]/collections` API 查询获取可用图标集的列表。

## 查询

API 查询地址为 `[url]/collections`。

可选参数：

- `[prop]prefix`，`[type]string`。如果您只想获取单个图标集的结果，请提供图标集前缀。
- `[prop]prefixes`，`[type]string`。以逗号分隔的图标集前缀列表。您可以使用以 `[str]-` 结尾的部分前缀，例如 `[str]mdi-` 会匹配 `[str]mdi-light`。

响应是一个对象，其中键为图标集前缀，值为 `[type]IconifyInfo` 对象。

仅返回包含信息的图标集。如果您想隐藏某个图标集，请在导入时不要设置 info 对象。

```yaml
hint: /collections?prefixes=fa,fa-,fa6-&pretty=1
src: api/collections.json
```

### 错误响应

如果禁用了图标浏览功能，该路由将不会被处理，服务器将返回 `[num]404` HTTP 错误。

## 类型

```ts
import type { IconifyInfo } from '@iconify/types';

export type APIv2CollectionsList = Record<string, IconifyInfo>;
```
