```yaml
title: 搜索图标
types:
  IconifyJSON: "../types/iconify-json.md"
  IconifyInfo: "../types/iconify-info.md"
```

# 搜索图标

您可以使用 `[url]/search` API 查询来搜索图标。

## 查询

API 查询地址为 `[url]/search`。

必需参数：

- `[prop]query`，`[type]string`。搜索查询词。不区分大小写。

可选参数：

- `[prop]limit`，`[type]number`。搜索结果数量限制。
- `[prop]start`，`[type]number`。结果的起始索引。见下文。
- `[prop]prefix`，`[type]string`。图标集前缀，如果您只想获取单个图标集的结果。
- `[prop]prefixes`，`[type]string`。以逗号分隔的图标集前缀列表。您可以使用以 `[str]-` 结尾的部分前缀，例如 `[str]mdi-` 会匹配 `[str]mdi-light`。
- `[prop]category`，`[type]string`。将搜索限制为特定类别的图标集。

### limit 和 start

如果您的 UI 使用了分页，请考虑通过避免发送不必要的搜索查询来节省 API 资源。

您可以使用以下逻辑：

- 将 `[prop]limit` 设置为适合前两页显示的图标数量。
- 如果结果中的图标数量等于 `[prop]limit`，则表示还有更多图标可显示。
- 如果还有更多图标可显示，当访客点击第二页时，通过将 `[prop]limit` 设置为 `[num]999` 来获取剩余结果。您也可以将 `[prop]start` 设置为第一次查询获取的图标数量，但这改变不大，因为服务器上的搜索函数无法直接从旧状态恢复，所以无论如何它都会检查所有图标。

### 修改 limit

您可以为 `[prop]limit` 属性设置的值存在以下限制：

- 最小值：`[num]32`。
- 默认值（未设置该属性时使用）：`[num]64`。
- 最大值：`[num]999`。

您可以在 `[file]src/http/responses/search.ts` 的 API 代码中修改这些限制。

## 响应

响应是一个包含以下属性的简单对象：

- `[prop]icons`，`[type]string[]` - 图标列表。每个图标名称包含图标集前缀 + 名称：`[str]mdi-light:home`
- `[prop]total`，`[type]number` - 结果数量。与 `[prop]icons` 属性的长度相同。
- `[prop]limit`，`[type]number` - 搜索设置的结果限制。如果与 `[prop]total` 匹配，则表示还有更多可用结果。
- `[prop]start`，`[type]number` - 第一个结果的索引。
- `[prop]collections`，`[type]Record<string, IconifyInfo>` - 结果中所用图标集的信息块。
- `[prop]request` - 请求参数的副本。此对象中的所有值均为 `[type]string`，因为它们是作为查询参数传递的。

## 示例

```yaml
hint: /search?query=home&pretty=1
src: api/search-home.json
```

```yaml
hint: /search?query=arrows-horizontal&pretty=1&limit=999
src: api/search-arrows.json
```

### 错误响应

如果未找到匹配项，搜索将返回一个不包含图标的对象：

```json
{
  "icons": [],
  "total": 0,
  "limit": 64,
  "start": 0,
  "collections": {},
  "request": {
    "query": "zzzz",
    "pretty": "1"
  }
}
```

如果查询无效（例如缺少 `[prop]query` 参数），服务器将返回 `[num]400` HTTP 错误。

如果搜索引擎被禁用，`[url]/search` 路由将不会被处理，服务器将返回 `[num]404` HTTP 错误。

## 类型

API 响应的类型定义：

```ts
import type { IconifyInfo } from "@iconify/types";

export interface APIv2SearchResponse {
  // 图标列表，包含前缀
  icons: string[];

  // 结果数量。如果与 `limit` 相同，则表示还有更多可用结果
  total: number;

  // 显示的结果数量
  limit: number;

  // 第一个结果的索引
  start: number;

  // 图标集信息
  collections: Record<string, IconifyInfo>;

  // 请求的副本，值为字符串
  request: Record<keyof APIv2SearchParams, string>;
}
```
