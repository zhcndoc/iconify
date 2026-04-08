```yaml
title: Iconify for Tailwind CSS 中的自定义图标集
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addDynamicIconSelectors: './index.md'
```

# Iconify for Tailwind CSS 中的自定义图标集

本文档介绍了 `[func]addDynamicIconSelectors` 插件的 `[prop]iconSets` 选项。

## iconSets 选项

选项 `[prop]iconSets` 允许你在插件中使用自定义图标集。

该选项是一个对象，其中键为图标集前缀，值为以下类型之一：

- `[type]string`：`[type]IconifyJSON` 格式的图标集 JSON 文件路径。
- `[type]IconifyJSON`：已加载的图标集。
- `[type]function`：返回 `[type]IconifyJSON` 图标集的回调函数。由于 Tailwind 插件系统的限制，回调函数必须是同步的。

请确保图标集包含 `[prop]info` 属性，且已设置 `[prop]palette`。
插件通过此属性来判断图标集包含的是硬编码调色板的图标还是单色图标。
无法使用混合图标集。
请参阅 `[type]IconifyInfo` 类型。

```js
addDynamicIconSelectors({
	iconSets: {
		test: './icon-sets/test.json',
	},
});
```
