```yaml
title: 清理和验证 SVG
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  validateIconSet: '../../utils/validate-icon-set.md'
```

# 图标清理与验证

清理函数用于 [Iconify Tools](../index.md) 中，以验证和清理导入的图标。

遗憾的是，许多编辑器会在 SVG 文件中留下大量冗余代码，有时甚至会使图标文件大小增加数倍。

SVG 文件还可能包含脚本和指向外部资源的链接。

## 使用方法

要清理和验证图标，请运行 `[func]cleanupSVG()`。

该函数包含一个必需参数：

- `[prop]svg`，`[type]SVG`。图标实例。

以及一个可选参数：

- `[prop]options`，`[type]object`。选项，见下文。

该函数不返回任何内容，它会直接对 `[type]SVG` 实例应用更改。

如果发生错误，函数将抛出异常。

### 选项

`[prop]options` 参数包含以下属性：

- `[prop]keepTitles`，`[type]boolean`。如果设置为 `true`，则不会移除标题。

默认情况下会移除标题，因为几乎所有图标都可以代表多种含义，因此硬编码的标题对大多数用户来说并不适用。保留标题的选项旨在用于处理特定于某个网站的自定义图标集。

## 清理流程

清理流程会运行多个函数来执行各种任务：

- `[func]cleanupInlineStyle()` 检查内联样式并移除不需要的样式。
- `[func]convertStyleToAttrs()` 将样式转换为属性。
- `[func]cleanupSVGRoot()` 清理 `[tag]svg` 元素。
- `[func]checkBadTags()` 检查图标中是否存在不良标签。
- `[func]removeBadAttributes()` 移除不良属性。

如果需要，你可以按上述顺序运行上述列出的函数。其效果与运行 `[func]cleanupSVG()` 完全相同。

## 优化

清理函数不会优化图标数据，也不会重写任何形状。这些函数仅移除大部分无用代码，从而使图标更易于处理。

优化应单独进行。请参阅 [图标操作函数](../icon/index.md)。

## 预设验证规则

该验证具有预设规则。它旨在用于生成可供任何人使用的图标，因此规则相当严格。

如果图标存在以下情况，验证将失败：

- 包含任何脚本。不受信任的脚本具有危险性。
- 包含任何文本。这是一项非常严格的预设规则。原因是使用文本的图标通常是设计师在未意识到所用字体并未安装在每台电脑上的情况下导出的，因此图标显示效果会与预期不同。请在从编辑器导出前将文本转换为形状。
- 包含任何位图图像。矢量形状中包含位图是不可接受的，因为它们无法无损缩放。图标的设计初衷就是能够无限制地缩放。

## 示例

```yaml
src: libraries/tools/svg/cleanup.ts
title: 'cleanup.ts'
extra:
  - src: libraries/tools/svg/cleanup.svg
    title: 'Result:'
```
