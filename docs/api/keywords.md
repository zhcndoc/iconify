```yaml
title: 图标关键词
```

# 图标关键词

API 查询 `[url]/keywords` 旨在用于提供搜索查询建议。

## 查询

API 查询地址为 `[url]/keywords`。

根据传递的参数，此查询有两种变体。

您必须设置以下参数之一：

- `[prop]prefix`，`[type]string`。关键词前缀。API 返回所有以请求关键词开头的关键词。
- `[prop]keyword`，`[type]keyword`。部分关键词。API 返回所有以请求关键词开头或结尾的关键词。

如果同时设置了 `[prop]prefix` 和 `[prop]keyword` 参数，`[prop]keyword` 参数将被忽略。

### 关键词

这是一个非常基础的功能。它一次只能处理一个关键词，不能处理多个关键词。

关键词要求：

- 只能包含字母 `[str]a` - `[str]z`、数字和 `[str]-`。
- 如果包含 `[str]-`，则仅检查 `[str]-` 之后的最后一部分，其余部分将被忽略。
- 长度必须至少为 2 个字符。

## 响应

响应是一个对象，包含查询中传递的所有属性以及以下属性：

- `[prop]invalid`，`[type]boolean`。如果关键词无效，则设置为 `[bool]true`。
- `[prop]exists`，`[type]boolean`。如果关键词作为完整关键词存在（在图标名称中其前后无内容或为 `[str]-`），则设置为 `[bool]true`。
- `[prop]matches`，`[type]string[]`。匹配项列表。

## 示例

```yaml
hint: /keywords?prefix=hom&pretty=1
src: api/keywords-hom.json
```

```yaml
hint: /keywords?keyword=home&pretty=1
src: api/keywords-home.json
```

### 错误响应

如果未找到匹配项或关键词过短，将返回正确的响应，其中 `[prop]matches` 对象为空：

```json
{
	"keyword": "qwerty",
	"exists": false,
	"matches": []
}
```

如果关键词无效，响应将包含设置为 `[bool]true` 的 `[prop]invalid` 属性：

```json
{
	"keyword": "_",
	"invalid": true,
	"exists": false,
	"matches": []
}
```

如果搜索引擎被禁用，`[url]/keywords` 路由将不被处理，服务器将返回 `[num]404` HTTP 错误。

## 类型

API 响应的类型：

```ts
/**
 * `/keywords` 查询的参数
 *
 * 必须设置 `prefix` 或 `keyword` 参数之一
 */
export interface APIv3KeywordsPrefixQuery {
	// 要测试的前缀：'foo' 的匹配项包括 'foobar'，但不包括 'barfoo'
	prefix: string;
}

export interface APIv3KeywordsFullQuery {
	// 要测试的关键词：'foo' 的匹配项包括 'foobar' 和 'barfoo'
	keyword: string;
}

export type APIv3KeywordsQuery =
	| APIv3KeywordsPrefixQuery
	| APIv3KeywordsFullQuery;

/**
 * /keywords 查询的响应
 *
 * 包含请求 + 响应
 */
export type APIv3KeywordsResponse = APIv3KeywordsQuery & {
	// 如果关键词无效，则设置为 true
	invalid?: true;

	// 如果部分关键词原样存在，则为 true
	exists: boolean;

	// 包含部分关键词的关键词列表
	matches: string[];
};
```
