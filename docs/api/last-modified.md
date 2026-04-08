```yaml
title: 图标集最后修改时间
types:
  IconifyJSON: '../types/iconify-json.md'
```

# 图标集最后修改时间

大多数图标集的最后修改时间都存储在 `[type]IconifyJSON` 对象的 `[prop]lastModified` 属性中。

如果你缓存了图标数据，可能想要检查它是否已更新。你可以通过再次请求图标数据来实现，但这样做效率较低。

通过 `[url]/last-modified` API 查询，你只需一次简单的请求即可获取多个图标集的 `[prop]lastModified` 值！

## 查询

API 查询地址为 `[url]/last-modified`。

可选参数：

- `[prop]prefix`，`[type]string`。如果你只想获取单个图标集的结果，请传入图标集前缀。
- `[prop]prefixes`，`[type]string`。以逗号分隔的图标集前缀列表。你可以使用以 `[str]-` 结尾的部分前缀，例如 `[str]mdi-` 会匹配 `[str]mdi-light`。

响应包含 `[prop]lastModified` 对象，其中键为图标集前缀，值为该图标集的 `[prop]lastModified` 属性值。

```yaml
hint: /last-modified?prefixes=mdi,mdi-light,tabler&pretty=1
src: api/last-modified.json
```

### 错误响应

如果请求的图标集未找到，服务器将返回一个空对象：

```json
{
	"lastModified": {}
}
```

## 类型

```ts
export interface APIv3LastModifiedResponse {
	lastModified: Record<string, number>;
}
```
