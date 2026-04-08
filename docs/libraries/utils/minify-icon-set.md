```yaml
title: Iconify Utils 中的 minifyIconSet()
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyDimensions: '../../types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
```

# minifyIconSet()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]minifyIconSet()` 用于优化图标集，从而减小文件大小。

## 用法

该函数仅有一个参数：

- `[prop]data`，`[type]IconifyJSON` 类型。图标集数据。

该函数不会创建新对象，而是直接修改传入函数的对象。

## 它具体做了什么？ {#explanation}

图标集中的图标通常具有公共属性，例如 `[prop]width` 和 `[prop]height`：

```json
{
	"prefix": "foo",
	"icons": {
		"icon1": {
			"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		},
		"icon2": {
			"body": "<path d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		},
		"icon3": {
			"body": "<path d=\"M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z\" fill=\"currentColor\"/>",
			"width": 16,
			"height": 16
		}
	}
}
```

在上面的示例中，图标 `[str]icon1` 和 `[str]icon2` 具有相同的 `[prop]width` 和 `[prop]height`。为了避免重复，可以将这些值移至根对象：

```json
{
	"prefix": "foo",
	"icons": {
		"icon1": {
			"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
		},
		"icon2": {
			"body": "<path d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z\" fill=\"currentColor\"/>"
		},
		"icon3": {
			"body": "<path d=\"M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z\" fill=\"currentColor\"/>",
			"width": 16,
			"height": 16
		}
	},
	"width": 24,
	"height": 24
}
```

函数 `[func]minifyIconSet()` 会查找图标集中的公共属性，并将它们移至根对象。

哪些属性可以被精简？在 `[type]IconifyDimensions` 类型中定义的属性：`[prop]left`、`[prop]top`、`[prop]width` 和 `[prop]height`。

有关更多信息，请参阅 `[type]IconifyJSON` 类型。

在此示例中，原始文件与精简后文件的差异并不大，但对于包含数千个图标的大型图标集而言，它确实能显著减小文件大小。

## 示例

```yaml
src: libraries/utils/minify.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/minify.json
    title: 'Result:'
```
