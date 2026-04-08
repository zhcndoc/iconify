```yaml
title: Iconify JSON 元数据
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# IconifyJSON 元数据

`[type]IconifyJSON` 还可以包含用于显示图标列表的附加数据：

- 最后修改时间（自版本 2 起）。
- 图标集信息。
- 分类。每个图标可以属于多个分类。
- 主题。它们用于表示同一图标具有不同开头或结尾部分的变体。
- 字符映射表。这用于从图标字体导入的图标。

## 最后修改时间 {#last-modified}

最后修改时间用于检查图标集是否已更新。图标组件使用它来使旧缓存失效。

该值是一个数字，需要高于图标集先前发布的版本中的值。

## 信息 {#iconify-info}

信息存储在 `[prop]info` 对象中。

请参阅 `[type]IconifyInfo` 文档。

## 分类 {#iconify-categories}

分类存储在 `[prop]categories` 对象中。

在 TypeScript 中，分类由类型 `[type]IconifyCategories` 表示，该类型可从 `[npm]@iconify/types` 导入。

这是一个简单的对象，其中键是分类名称，值是属于该分类的图标名称数组。

示例：

```json
{
	"categories": {
		"Accessibility": ["accessible-icon"],
		"Audio & Video": ["youtube"],
		"Communication": ["bluetooth", "bluetooth-b"],
		"Currency": ["bitcoin", "btc", "ethereum", "gg", "gg-circle"],
		"Games": [
			"playstation",
			"steam",
			"steam-square",
			"steam-symbol",
			"twitch",
			"xbox"
		]
	}
}
```

## 主题：前缀和后缀 {#themes}

主题用于显示具有不同前缀或后缀的同一图标的变体。它类似于分类，但数据不包含每个图标的列表，而仅包含前缀或后缀。

主题存储在 `[prop]prefixes` 和 `[prop]suffixes` 对象中。

在 TypeScript 中，`[prop]prefixes` 和 `[prop]suffixes` 都是简单的 `[type]Record<string, string>` 对象，其中：
- 键是图标中的前缀或后缀。
- 值是主题的名称。

[Google Material Icons](https://icon-sets.iconify.design/ic/) 中使用的前缀示例：

```json
{
    "prefixes": {
        "baseline": "Baseline",
        "outline": "Outline",
        "round": "Round",
        "sharp": "Sharp",
        "twotone": "Two-Tone"
    }
}
```

在上面的示例中，所有以 `[icon]baseline-` 开头的图标都属于 `[str]Baseline` 主题，依此类推。

在检查图标是否属于某个前缀时，需在前缀后添加 `[str]-`。
例如，在上面的示例中，`[str]baseline-home` 属于 `[str]Baseline` 主题，
而 `[str]baselinehome` 不属于，因为 `[str]-` 应该用于分隔前缀和图标名称。

[Ant Design Icons](https://icon-sets.iconify.design/ant-design/) 中使用的后缀示例：

```json
{
    "suffixes": {
        "filled": "Filled",
        "outlined": "Outlined",
        "twotone": "TwoTone"
    }
}
```

在上面的示例中，所有以 `[str]-filled` 结尾的图标都属于 `[str]Filled` 主题，
所有以 `[str]-outlined` 结尾的图标都属于 `[str]Outlined` 主题，所有以
`[str]-twotone` 结尾的图标都属于 `[str]TwoTone` 主题。

### 默认主题

前缀和后缀都可以有一个默认条目，其键为空字符串。
不符合其他主题的图标应放入该主题中。

示例：

```json
{
    "suffixes": {
        "": "Filled",
        "outline": "Outline",
        "negative": "Negative"
    }
}
```

以 `[str]-outline` 结尾的图标属于 `[str]Outline` 主题， 
以 `[str]-negative` 结尾的图标属于 `[str]Negative` 主题，
所有其他图标都属于 `[str]Filled` 主题。

### 旧版主题

在旧版本的元数据中，主题存储在 `[prop]themes` 属性中。
该属性已被弃用，应忽略。

## 字符映射表 {#chars}

字符映射表存储在 `[prop]chars` 对象中。

在 TypeScript 中，字符由类型 `[type]IconifyChars` 表示，该类型可从 `[npm]@iconify/types` 导入。

这是一个简单的对象，其中键是十六进制形式的字符代码，值是图标名称。

示例：

```json
{
	"chars": {
		"e007": "firefox-browser",
		"e013": "ideal",
		"e01a": "microblog",
		"e01e": "pied-piper-square",
		"e049": "unity",
		"e052": "dailymotion",
		"e055": "instagram-square",
		"e056": "mixer",
		"e057": "shopify"
	}
}
```
