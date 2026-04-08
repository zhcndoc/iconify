```yaml
title: Iconify Info 类型
```

# IconifyInfo 类型

所有 Iconify 库都共享通用的对象结构。它们在 `[npm]@iconify/types` NPM 包中被定义为类型。

有关类型的描述和 TypeScript 的简要说明，请参阅[类型文档](./index.md)。

本文介绍了 `[type]IconifyAlias` 类型。

## 结构

类型 `[type]IconifyInfo` 用于描述图标集的相关信息。

它具有以下必需属性：

- `[prop]name`，`[type]string`。图标集名称。
- `[prop]author`，`[type]object`。作者信息（见下文）。
- `[prop]license`，`[type]object`。许可证信息（见下文）。

此外，它还包含许多可选属性，其中大多数属性用于在图标集列表中展示图标集数据：

- `[prop]total`，`[type]number`。图标集中的图标数量（见下文）。
- `[prop]version`，`[type]string`。版本字符串。
- `[prop]samples`，`[type]string[]`。要作为示例展示的图标名称数组。
- `[prop]height`，`[type]number | number[]`。图标网格尺寸。如果图标集混合了不同高度的图标，例如一半图标高 `[num]16` 像素，另一半高 `[num]24` 像素，则该值可以是数组。
- `[prop]displayHeight`，`[type]number`。展示示例时使用的高度。值应介于 `[num]16` 和 `[num]24` 之间。
- `[prop]category`，`[type]string`。图标集列表中的分类。
- `[prop]tags`，`[type]string[]`。标签列表，可用于筛选图标集（在版本 2 中添加）。
- `[prop]palette`，`[type]boolean`。如果所有图标均使用硬编码颜色，则设置为 `true`；如果所有图标均使用 `[attr]currentColor`，则设置为 `false`。

## 作者

`[prop]author` 属性是一个对象，包含以下属性：

- `[prop]name`，`[type]string`。作者名称，必填。
- `[prop]url`，`[type]string`。指向图标集网站的可选链接。通常指向 GitHub 仓库。

## 许可证

`[prop]license` 属性是一个对象，包含以下属性：

- `[prop]title`，`[type]string`。人类可读的许可证名称，必填。
- `[prop]spdx`，`[type]string`。可选的 SPDX 许可证标识符。
- `[prop]url`，`[type]string`。指向许可证文件的可选链接。

## 示例

```json
{
	"name": "Phosphor",
	"total": 5206,
	"version": "1.3.2",
	"author": {
		"name": "Phosphor Icons",
		"url": "https://github.com/phosphor-icons/phosphor-icons"
	},
	"license": {
		"title": "MIT",
		"spdx": "MIT"
	},
	"samples": [
		"folder-notch-open-duotone",
		"check-square-offset-thin",
		"pencil-line-fill"
	],
	"height": 24,
	"displayHeight": 24,
	"category": "General",
	"palette": false
}
```

```json
{
	"name": "Emoji One (Colored)",
	"total": 1834,
	"version": "2.3.0",
	"author": {
		"name": "Emoji One",
		"url": "https://github.com/EmojiTwo/emojitwo"
	},
	"license": {
		"title": "CC BY 4.0",
		"spdx": "CC-BY-4.0",
		"url": "https://creativecommons.org/licenses/by/4.0/"
	},
	"samples": [
		"anxious-face-with-sweat",
		"cloud-with-snow",
		"studio-microphone"
	],
	"height": 32,
	"displayHeight": 16,
	"category": "Emoji",
	"palette": true
}
```
