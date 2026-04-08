```yaml
title: 图标列表
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyInfo: '../types/iconify-info.md'
```

# 图标列表

您可以使用 `[url]/collection` API 查询获取图标集中的图标列表。

## 查询

API 查询为 `[url]/collection`。

必需参数：

- `[prop]prefix`，`[type]string`。图标集前缀。

可选参数：

- `[prop]info`，`[type]boolean`。如果启用，响应将包含图标集信息。
- `[prop]chars`，`[type]boolean`。如果启用，响应将包含字符映射表。字符映射表仅存在于从图标字体导入的图标集中。

## 响应

响应是一个复杂对象，包含以下必需属性：

- `[prop]prefix`，`[type]string` - 图标集前缀。
- `[prop]total`，`[type]number` - 可见图标的总数。

此外还有许多可选属性。

### 图标

与图标列表相关的属性：

- `[prop]uncategorized`，`[type]string[]` - 不属于任何类别的图标名称列表。
- `[prop]categories`，`[type]Record<string, string[]>` - 按类别排序的图标列表。键为类别标题，值为属于该类别的图标名称列表。
- `[prop]hidden`，`[type]string[]` - 隐藏图标的列表。通常，如果图标在某个时间点从图标集中被移除，则会被标记为隐藏。为了防止用户应用崩溃，图标永远不会被删除，而是被标记为隐藏，但仍可在应用中使用。
- `[prop]aliases`，`[type]Record<string, string>` - 别名列表。键为别名，值为父图标名称。

要获取所有应显示的图标名称列表，请使用以下逻辑：

- 如果存在，获取 `[prop]uncategorized` 属性的值。
- 如果存在，遍历 `[prop]categories` 属性中的所有类别。一个图标可能存在于多个类别中，因此需要检查重复项，最简单的方法是在 JavaScript 中使用 `[type]Set` 类而不是 `[type]Array`。

要获取所有图标名称，请在上述结果中添加：

- 如果存在，`[prop]aliases` 对象的键。它们不应显示在图标列表中，因为它们是其他图标的重复名称。
- 如果存在，`[prop]hidden` 属性的值。它们不应显示在图标列表中，因为这些是隐藏图标。为了防止用户应用崩溃，图标永远不会被删除，而是被标记为隐藏，但仍可在应用中使用。

### 其他属性

其他可选属性：

- `[prop]info`，`[type]IconifyInfo` - 图标集信息，在启用 `[prop]info` 参数时设置。
- `[prop]title`，`[type]string` - 图标集名称，通常是 `[prop]info.name` 的副本。
- `[prop]chars`，`[type]Record<string, string>` - 字符映射表，其中键为十六进制字符串形式的字符，值为图标名称。它仅存在于从图标字体导入的图标集中。可用于允许用户通过字符代码搜索图标名称。
- `[prop]themes`、`[prop]prefixes` 和 `[prop]suffixes` - 图标集主题。属性 `[prop]themes` 已弃用，因此可以忽略。

请参阅 `[type]IconifyJSON` 类型和[元数据文档](../types/iconify-json-metadata.md)。

只有包含 info 的图标集才能被浏览。如果您想隐藏某个图标集，请在导入时不要设置 info 对象。

## 简单示例

这是一个基础图标集，不包含类别或任何额外元数据：

```yaml
hint: /collection?prefix=mdi-light&pretty=1
src: api/collection-mdi-light.json
```

实际的 API 响应要大得多。此处示例已进行精简。

## 类别示例

以下示例中的图标集：

- 使用类别对图标进行排序（`[prop]categories` 可与上述示例中的 `[prop]uncategorized` 结合使用，因此请检查这两个属性以获取所有图标）。
- 包含隐藏图标。
- 包含别名。
- 包含[主题后缀](../types/iconify-json-metadata.md)。

```yaml
hint: /collection?prefix=line-md&pretty=1
src: api/collection-line-md.json
```

实际的 API 响应要大得多。此处示例已进行精简。

### 错误响应

如果未找到图标集或无法浏览，服务器将返回 `[num]404` HTTP 错误。

如果禁用了图标浏览功能，路由将不被处理，服务器将返回 `[num]404` HTTP 错误。

## 类型

API 响应的类型：

```ts
import type { IconifyInfo, IconifyJSON } from '@iconify/types';

export interface APIv2CollectionResponse {
	// 图标集前缀
	prefix: string;

	// 图标数量（与 info?.total 重复）
	total: number;

	// 图标集标题（如果可用，与 info?.name 重复）
	title?: string;

	// 图标集信息
	info?: IconifyInfo;

	// 未分类的图标列表
	uncategorized?: string[];

	// 按类别排序的图标列表
	categories?: Record<string, string[]>;

	// 隐藏图标列表
	hidden?: string[];

	// 别名列表，键 = 别名，值 = 父图标
	aliases?: Record<string, string>;

	// 字符映射，键 = 字符，值 = 图标名称
	chars?: Record<string, string>;

	// 主题
	themes?: IconifyJSON['themes'];
	prefixes?: IconifyJSON['prefixes'];
	suffixes?: IconifyJSON['suffixes'];
}
```
