```yaml
title: '入门：图标集'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  getIconData: '/docs/libraries/utils/get-icon-data.md'
  parseIconSet: '/docs/libraries/utils/parse-icon-set.md'
  defaultIconProps: '/docs/libraries/utils/default-icon-props.md'
```

# 图标集

什么是图标集？

图标集是由同一作者或作者组创建，并以相同名称和许可证发布的一组图标。

## 示例

以下是几个图标集的示例：

- [Material Design 图标](https://icon-sets.iconify.design/mdi/)
- [Material Design 图标 Light](https://icon-sets.iconify.design/mdi-light/)
- [Tabler 图标](https://icon-sets.iconify.design/tabler/)
- [Twitter Emoji](https://icon-sets.iconify.design/twemoji/)

图标集中的所有图标必须具有以下共同点：

- 相同的许可证。许可证是针对整个图标集，而不是单个图标。
- 均为单色或具有硬编码调色板。一个图标集中只存储一种类型的图标。请参阅[图标基础](./icon-basics.md)。

此外，开源图标集中的图标还具有以下共同点：

- 图标使用相同的设计原则：网格、内边距。
- 图标在主题上相互契合。

## 格式

在 Iconify 中，图标不是以 SVG 格式逐个存储的，而是以易于阅读的自定义 JSON 格式作为图标集存储，该格式使用 `[type]IconifyJSON` 类型。

使用 `[type]IconifyJSON` 存储图标集的优势：

- 每个图标集只需一个文件，而不是多个 SVG 文件。
- 易于阅读，受所有编程语言支持。
- 仅存储图标内容，不包含 `[tag]svg` 元素。这使得无需解析 XML 即可轻松操作图标，为 `[tag]svg` 添加自定义属性，并在 React 等框架中使用框架原生代码创建 SVG 元素。
- 存储元数据，例如图标集作者信息、许可证、用于筛选图标的分类和主题，在浏览可用图标时使用。
- 通过别名防止重复，别名支持基本变换：翻转和 90/180/270 度旋转。例如，无需设计 `[icon]arrow-left`，你只需设计 `[icon]arrow-right` 并为其创建一个水平翻转的别名即可。

## 命名

每个图标集都有一个前缀。该前缀对于每个图标集都是唯一的。

前缀命名规则与图标命名规则相同：允许的字符为 `[str]a-z`、数字和 `[str]-`。连字符不能用于名称的开头或结尾，不允许连续使用两个连字符 `[str]--`。

有效前缀示例：`[str]mdi`、`[str]mdi-light`、`[str]fluent-emoji-flat`。

## 函数

要解析图标集，[Iconify Utils](/docs/libraries/utils/index.md) 提供了以下函数：

- `[func]parseIconSet()` 解析整个图标集，为每个图标调用自定义函数。
- `[func]getIconData()` 以 `[type]IconifyIcon` 格式提取图标的数据。

要将图标转换为图标集，请使用 [Iconify Tools](/docs/libraries/tools/index.md)。
