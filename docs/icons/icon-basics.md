```yaml
title: "入门指南：图标清理"
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyIcon: "/docs/types/iconify-icon.md"
functions:
  getIconData: "/docs/libraries/utils/get-icon-data.md"
  parseIconSet: "/docs/libraries/utils/parse-icon-set.md"
  defaultIconProps: "/docs/libraries/utils/default-icon-props.md"
```

# 图标清理

Iconify 项目的目标之一是让图标易于使用。

这并不像将图标通过流行的优化工具处理那样简单。
Iconify 中的图标解析非常严格，且处理过程更具侵入性。

图标会被修改，以便无论属于哪个图标集，都能以相同的方式使用。

## 具体做了哪些处理？ {#process}

每个图标都会：

- 验证（见下文）。
- 清理和优化（见下文）。
- 调色板会被修正为仅包含 `[prop]currentColor` 或硬编码调色板。
- 如有需要，图标会重命名以遵循 Iconify 命名规范（见下文）。

## 命名规范

为了让图标无论来源如何都易于使用，所有图标都遵循相同的命名规范。

图标名称中允许的字符为 `[str]a-z`、数字和 `[str]-`。连字符不能用于名称的开头或结尾，也不允许连续使用两个连字符 `[str]--`。

有效图标名称示例：`[str]home-outline`、`[str]1st-place-medal`、`[str]camera-with-flash`。

## 验证

在导入和验证图标时，包含以下任何内容的图标将不被允许：

- 脚本和事件监听器。它们可能具有危害性或代码编写糟糕，因此不应出现在公共图标中。
- 位图图像。它们无法无损缩放，因此不应出现在矢量图标中。
- 外部资源。图标不应依赖于托管在其他地方的内容。
- 文本。文本在不同浏览器和操作系统中的渲染方式不同。图标应对所有访问者显示一致。请将文本转换为形状。

此外，所有不影响图标渲染的内容都会被移除。许多劣质编辑器会在生成的 SVG 中留下大量垃圾代码，这些都会被清除。

对于开源图标集，此操作在使用 [Iconify Tools](/docs/libraries/index.md) 的导入过程中完成。自定义图标集可能不遵循相同的准则。

## 清理与优化

清理与优化过程会移除所有不必要的代码，在不破坏图标的前提下，使图标体积尽可能小。

有关图标清理的更多详细信息，请参阅[图标清理流程](/docs/articles/cleaning-up-icons/index.md)。

## 调色板

调色板始终会被检查，并在必要时进行修正。

具体执行的操作取决于图标的类型。

图标分为两种类型：

- 具有硬编码调色板的图标，例如表情符号。颜色无法更改。
- 单色图标。它们只有一种可以更改的颜色。

它们有什么区别？

### 硬编码调色板

具有硬编码调色板的图标中的颜色无法更改。

示例：

```yaml
include: common/icon-types-palette
```

在 CSS 中，这些图标用作背景图像。

此类图标中的调色板将保持原样。

### 单色图标

所有单色图标都会被修改为使用 `[prop]currentColor` 作为颜色。

这使得在 CSS 中通过更改文本颜色来轻松更改图标颜色成为可能。

示例：

```yaml
include: common/icon-types-monotone
```

将鼠标悬停在上方示例上以查看颜色变化。

为什么不使用 `[prop]fill`？主要原因是许多图标使用 `[prop]stroke` 来定义颜色。使用 `[prop]fill` 设置颜色是一种不良实践，因为它会将你的图标限制为仅使用 `[prop]fill` 的图标。它还会阻止图标用作遮罩图像，因为背景颜色无法设置为填充颜色。

在 CSS 中，这些图标用作遮罩图像，有关详细信息，请参阅[在 CSS 中使用 SVG](/docs/usage/css/index.md)。

#### 请勿设置 fill！ {#fill}

某些图标集建议通过更改 `[prop]fill` 来改变颜色，但在使用 Iconify 时绝对不要这样做！

这是一种非常糟糕的做法，因为并非所有图标都使用填充。许多图标使用 `[prop]stroke`，但你不能更改 `[prop]stroke`，因为这会给没有 `[prop]stroke` 的图标添加描边。

为了避免所有这些混乱，Iconify 将单色图标中的颜色更改为 `[prop]currentColor`，因此无论图标结构如何，你都可以通过更改文本颜色来更改图标颜色。

### 混合 currentColor 和自定义颜色

虽然可以混合单色和硬编码调色板，但这是一个非常糟糕的主意。混合了 `[prop]currentColor` 和硬编码颜色的图标将无法使用，原因如下：

- 它无法在 CSS 中使用。如果用作背景图像，`[prop]currentColor` 会变成黑色。如果用作遮罩图像，自定义调色板会消失。
- 它仅适用于特定的配色方案，通常仅针对白色背景设计。

因此，Iconify 开源图标集仓库中不允许使用混合调色板的图标。

## 格式

图标会被转换为 `[type]IconifyIcon` 格式进行存储，然后以 `[type]IconifyJSON` 格式存储在图标集中。

数据存储在易于使用的 JSON 文件中。

### 自定义类型

为什么图标以自定义的 `[type]IconifyIcon` 类型存储，而不是 SVG？

该格式将 `[tag]svg` 元素的属性与内容分开。
这使得无需解析 XML 即可轻松修改 SVG：调整大小、更改 `[prop]viewBox`、无需解析 JSX 即可渲染为组件、在图标中追加/前置形状等。

## 图标集

多个图标存储在一个图标集中。有关详细信息，请参阅[图标集文档](./icon-set-basics.md)。
