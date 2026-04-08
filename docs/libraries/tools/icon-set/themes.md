```yaml
title: 图标集主题
types:
  IconSet: './index.md'
functions:
  checkTheme: './check-theme.md'
```

# 主题

主题属性是 [Iconify Tools](../index.md) 中 `[type]IconSet` 类的一部分。

主题用于根据图标名称的一部分快速将图标归类，而无需逐一列出每个图标。

包含两个属性：

- `[prop]prefix` 用于前缀，例如 `[str]baseline-home` 中的 `[str]baseline`。
- `[prop]suffix` 用于后缀，例如 `[str]home-twotone` 中的 `[str]twotone`。

你可以直接对属性赋值以更新其值。

## 结构

两者均为简单的 `[type]Record<string, string>` 对象，其中：

- 键为图标名称的一部分，可为空字符串
- 值为标题

## 示例

以下示例展示了后缀。前缀的工作方式与后缀相同，只是比较的是图标名称的开头部分。

后缀列表示例：

```json
{
	"line": "Line",
	"solid": "Solid"
}
```

前缀和后缀不应以 `[str]-` 开头或结尾。

所有以 `[str]-line` 结尾的图标均属于 `[str]Line` 类别，所有以 `[str]-solid` 结尾的图标均属于 `[str]Solid` 类别。

如果图标以其他内容结尾（例如 `[str]-outline`），则它不会属于 `[str]Line` 类别，因为系统会检查图标是否匹配 `[js]'-' + suffix`（对于前缀则是 `[js]prefix + '-'`）。

### 多个相似项

可能存在多个可匹配的后缀，例如 `[str]24-line` 和 `[str]line`。

也可以设置空后缀（和前缀），用于匹配那些不匹配其他后缀的图标。

后缀示例：

```json
{
	"24-line": "Line 24",
	"line": "Line",
	"": "Other"
}
```

图标 `[str]home-24-line` 将归入 `[str]Line 24` 后缀，图标 `[str]home-20-line` 将归入 `[str]Line` 后缀，图标 `[str]home-solid` 将归入 `[str]Other` 后缀。

后缀和前缀的顺序无关紧要。在匹配图标前，它们会按长度进行排序（最长者优先），以确保无论定义顺序如何，图标都能被正确归类到对应的主题中。

## 查找图标

要查找哪些图标属于哪个主题，请使用 `[func]checkTheme()` 函数。
