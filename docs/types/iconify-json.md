```yaml
title: Iconify JSON 类型
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
functions:
  getIconData: '/docs/libraries/utils/get-icon-data.md'
  parseIconSet: '/docs/libraries/utils/parse-icon-set.md'
  defaultIconProps: '/docs/libraries/utils/default-icon-props.md'
```

# IconifyJSON 类型

所有 Iconify 库都共享通用的对象结构。它们在 `[npm]@iconify/types` NPM 包中被定义为类型。

有关类型的描述和 TypeScript 的简要说明，请参阅[类型文档](./index.md)。

本文介绍 `[type]IconifyJSON` 类型。

## 用法

`[type]IconifyJSON` 格式的图标集由 Iconify Tools 创建，或从预解析的 JSON 文件加载。

有关解析图标集的信息，请参阅 [Iconify Utils 文档](/docs/libraries/utils/index.md) 和 [图标集包文档](/docs/icons/all.md)。

有关创建自定义图标集的信息，请参阅 [Iconify Tools 文档](/docs/libraries/tools/index.md)。

## 结构

`[type]IconifyJSON` 类型是一个包含以下必需属性的对象。

### 必需属性

- `[prop]prefix`，`[type]string`。JSON 文件中图标的前缀。图标集中的所有图标都具有相同的前缀，且图标集不能包含来自其他图标集的图标。
- `[prop]icons`，`[type]Record<string, IconifyIcon>`。图标列表。键为图标名称，值为 `[type]IconifyIcon` 图标数据。

示例：

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	}
}
```

其他属性为可选：别名、所有图标的默认值、元数据。

### 图标

`[prop]icons` 对象包含图标的数据。

键为图标名称。值为图标数据，其中 `[prop]body` 为必需项，其他属性为可选项：

`include types/iconify-optional`

在代码中，你可以从 [Iconify Utils](/docs/libraries/utils/index.md) 的 `[var]defaultIconProps` 常量获取默认值。

### 别名

`[type]IconifyJSON` 类型的一个可选属性是 `[prop]alias`，其类型为 `[type]Record<string, IconifyAlias>`。
键为别名名称，值为 `[type]IconifyAlias` 别名数据。
它表示图标别名的列表。

什么是别名？它们是其他图标的变体。别名用于减少重复。

例如，如果图标 `[icon]home` 和 `[icon]house` 完全相同，
则 `[prop]icons` 属性中只能存在其中一个图标，另一个图标可以列在 `[prop]aliases` 中，
并指向原始图标：

```json
{
	"prefix": "mdi",
	"icons": {
		"house": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	},
	"aliases": {
		"home": {
			"parent": "house"
		}
	}
}
```

别名还可以包含变换：水平和/或垂直翻转，90/180/270 度旋转。
这允许通过复用另一个图标来创建图标变体，
例如通过使用水平翻转的左箭头来创建右箭头：

```json
{
	"prefix": "bi",
	"icons": {
		"arrow-left": {
			"body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></g>",
			"width": 16,
			"height": 16
		}
	},
	"aliases": {
		"arrow-right": {
			"parent": "arrow-left",
			"hFlip": true
		}
	}
}
```

除了 `[prop]body` 之外，别名具有与图标相同的属性。
它还有一个额外的必需属性 `[prop]parent`，用于指向父图标。

解析别名属性的逻辑：

- 对于图标尺寸，别名中设置的值会覆盖父图标中的值。
- 对于图标变换，如果别名和父图标中都设置了值，则它们会合并：水平翻转 + 水平翻转 = 无水平翻转，90 度旋转 + 180 度旋转 = 270 度旋转。

```yaml
src: types/alias-json.json
title: '源图标集：'
hint: '作为 IconifyJSON 的图标集'
extra:
  - src: types/alias-merged.json
    title: '提取的别名：'
    hint: '合并为 IconifyIcon 的 "arrow-right" 图标'
```

另一个示例：

```yaml
src: types/alias3-json.json
title: '源图标集：'
hint: '作为 IconifyJSON 的图标集'
extra:
  - src: types/alias3-merged.json
    title: '提取的别名：'
    hint: '合并为 IconifyIcon 的 "house-32" 图标'
```

### 默认尺寸

如果图标集中的大多数图标具有相同的尺寸，为每个图标都列出它们是没有意义的：

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path fill=\"currentColor\" d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z\"/>",
			"width": 24,
			"height": 24
		},
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z\"/>",
			"width": 24,
			"height": 24
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z\"/>",
			"width": 24,
			"height": 24
		}
	}
}
```

为了减少这种重复，`[type]IconifyJSON` 对象的根节点可以包含图标尺寸的默认值：

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path fill=\"currentColor\" d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z\"/>"
		},
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z\"/>"
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z\"/>"
		}
	},
	"width": 24,
	"height": 24
}
```

这些默认值仅用于没有指定尺寸的图标：

```yaml
src: types/json-defaults-source.json
title: '包含默认值：'
extra:
  - src: types/json-defaults-merged.json
    title: '不包含默认值：'
    hint: '两个示例完全相同，第一个示例包含默认值，第二个示例不包含。'
```

如果图标中缺少尺寸，且根对象中也缺少默认值，
则会使用该属性的默认值（请参阅上面的属性列表）：

```yaml
src: types/json-defaults2-source.json
title: '无尺寸的图标，默认值为 16：'
extra:
  - src: types/json-defaults2-merged.json
    title: '有尺寸的图标：'
    hint: '两个示例完全相同，第一个示例使用默认属性值，第二个示例使用显式尺寸。'
```

在上面的所有示例中，使用 `[prop]width` 和 `[prop]height` 来演示尺寸。
但还有 `[prop]left` 和 `[prop]top` 属性以及变换属性，这些在所有示例中均未显示。
以下是解析了所有属性的上述示例：

```json
{
	"prefix": "bi",
	"icons": {
		"arrow-left": {
			"body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></g>",
			"width": 16,
			"height": 16,
			"left": 0,
			"top": 0,
			"hFlip": false,
			"vFlip": false,
			"rotate": false
		}
	}
}
```

## 元数据

`[type]IconifyJSON` 还可以包含用于显示图标列表的附加数据。

这是可选数据，对渲染图标没有影响，因此已移至单独的文档中。

有关详细信息，请参阅 [IconifyJSON 元数据](./iconify-json-metadata.md)。

## 函数

为了解析图标集，[Iconify Utils](/docs/libraries/utils/index.md) 提供了以下函数：

- `[func]parseIconSet()` 解析整个图标集，并为每个图标调用自定义函数。
- `[func]getIconData()` 以 `[type]IconifyIcon` 格式提取图标的数据。

要将图标转换为图标集，请使用 [Iconify Tools](/docs/libraries/tools/index.md)。
