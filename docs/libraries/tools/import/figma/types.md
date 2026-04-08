```yaml
title: '从 Figma 导入 SVG：类型'
types:
  IconSet: '../../icon-set/index.md'
  FigmaImportResult: './types.md#result'
  FigmaIconNode: './types.md#icon-node'
  FigmaImportNodeData: './types.md#import-node-data'
  FigmaParentNodeData: './types.md#parent-node-data'
functions:
  importFromFigma: ./index.md
```

# importFromFigma() 中使用的类型

本文是 `[func]importFromFigma()` 文档的一部分。

## FigmaImportResult {#result}

成功时，`[func]importFromFigma()` 会返回 `[type]FigmaImportResult` 对象，该对象包含以下属性：

- `[prop]name`，`[type]string`。文档名称。
- `[prop]version`，`[type]string`。文档版本。
- `[prop]lastModified`，`[type]string`。上次修改的时间（字符串格式）。你可以将其传递给 `[prop]ifModifiedSince`，以检查文档自上次解析后是否发生过修改。
- `[prop]iconSet`，`[type]IconSet`。图标集实例。
- `[prop]nodesCount`，`[type]number`。找到的图标数量（即被 `[prop]iconNameForNode` 标记为图标的节点）。
- `[prop]generatedIconsCount`，`[type]number`。Figma API 生成的图标数量。如果与 `[prop]nodesCount` 不一致，说明某些图层被错误地标记为了图标。
- `[prop]downloadedIconsCount`，`[type]number`。已下载的图标数量。如果与 `[prop]generatedIconsCount` 不一致，说明发生了一些错误，通常是由网络连接不佳引起的。
- `[prop]missing`，`[type]FigmaIconNode`。未能获取的图标列表。详见下文。

## FigmaIconNode {#icon-node}

类型 `[type]FigmaIconNode` 用于回调函数以及 `[type]FigmaImportResult` 的 `[prop]missing` 属性中。

它代表一个图标，包含以下属性：

- `[prop]id`，`[type]string`。Figma 文档中的节点 ID。
- `[prop]name`，`[type]string`。节点名称。
- `[prop]keyword`，`[type]string`。图标的关键词，由 `[prop]iconNameForNode` 回调函数返回。

在解析图标的不同阶段，会向该对象添加以下属性：

- `[prop]url`，`[type]string`。生成图像的 URL。如果缺失，说明 Figma API 无法导出该图标。
- `[prop]content`，`[type]string`。从 `[prop]url` 下载的图标内容。如果缺失，说明导入函数无法获取已导出的图标数据。

## FigmaImportNodeData {#import-node-data}

类型 `[type]FigmaImportNodeData` 用作 `[prop]iconNameForNode` 回调函数的第一个参数。

它是一个简单的对象，包含以下属性：

- `[prop]id`，`[type]string`。节点 ID。
- `[prop]type`，`[type]string`。节点类型：`[str]FRAME`、`[str]COMPONENT` 或 `[str]INSTANCE`。
- `[prop]name`，`[type]string`。节点名称。
- `[prop]width` 和 `[prop]height`，`[type]number`。节点的尺寸。
- `[prop]parents`，`[type]FigmaParentNodeData[]`。父节点列表（第一项为页面，最后一项为图标的直接父节点）。

传递给回调函数的节点数据示例：

```json
{
	"id": "12:724",
	"type": "FRAME",
	"name": "arrow-down",
	"width": 32,
	"height": 32,
	"parents": [
		{ "id": "0:1", "type": "CANVAS", "name": "Icons" },
		{ "id": "12:479", "type": "FRAME", "name": "Regular" }
	]
}
```

## FigmaParentNodeData {#parent-node-data}

类型 `[type]FigmaParentNodeData` 用于 `[type]FigmaImportNodeData` 中，以及作为 `[prop]filterParentNode` 回调函数的第一个参数。

它是一个简单的对象，包含以下属性：

- `[prop]id`，`[type]string`。节点 ID。
- `[prop]type`，`[type]string`。节点类型：`[str]CANVAS`、`[str]FRAME` 或 `[str]GROUP`。
- `[prop]name`，`[type]string`。节点名称。

示例：

```json
{
	"id": "0:1",
	"type": "CANVAS",
	"name": "Icons"
}
```

```json
{
	"id": "12:479",
	"type": "FRAME",
	"name": "Regular"
}
```
