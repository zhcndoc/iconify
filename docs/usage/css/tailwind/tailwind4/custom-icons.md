```yaml
title: Tailwind CSS 的 Iconify 中的自定义图标
types:
  IconifyJSON: "/docs/types/iconify-json.md"
```

# Tailwind CSS 的 Iconify 中的自定义图标

本文档介绍了如何将 [Tailwind CSS 4 的 Iconify 插件](./index.md) 与自定义图标配合使用。

## 加载器选项

加载图标集有两种方法：

- 加载 `[type]IconifyJSON` 格式的预解析图标集。
- 加载文件夹中的所有图标。

语法类似：

```css
@plugin "@iconify/tailwind4" {
  icon-sets: from-json(test, "./icon-sets/test.json"), from-folder(test2, "./icon-sets/svgs");
}
```

在 CSS 的插件配置中添加 `[prop]icon-sets` 选项，使用逗号分隔的选项集。

## 从 JSON 文件加载

从 JSON 文件加载速度更快，因为无需进行清理操作，因此如果条件允许，请从 JSON 文件加载图标集。

文件必须为 `[type]IconifyJSON` 格式，可以使用 [Iconify Tools](/docs/libraries/tools/index.md) 创建。

要将图标集添加到配置中，请在 `[prop]icon-sets` 选项中添加 `[func]from-json()` 函数，并传入两个值：

- 图标集前缀
- .json 文件的路径，相对于项目根目录

## 从文件夹加载

从文件夹加载可以轻松使用现有图标，而无需预先解析它们。

要将包含图标的文件夹添加到配置中，请在 `[prop]icon-sets` 选项中添加 `[func]from-folder()` 函数，并传入两个值：

- 图标集前缀
- 文件夹路径，相对于项目根目录

您可以通过在 `[prop]icon-sets` 选项中添加多个具有不同前缀的条目，从多个文件夹加载图标。

### 清理

从文件夹加载的图标会经过清理和优化。

如果您不希望这样，请预先解析图标，将其导出为 `[type]IconifyJSON` 文件，然后改为加载 .json 文件。

图标的处理方式如下：

- 所有名称都会经过清理：转换为小写，并使用连字符作为分隔符。
- 检查图标调色板。如果图标包含多种颜色，则将其视为彩色图标并作为背景图像渲染。如果图标只有一种颜色，则将其视为单色图标并作为遮罩图像渲染。

## 示例

配置示例：

```css
@plugin "@iconify/tailwind4" {
  icon-sets: from-json(test, "./icon-sets/test.json"), from-folder(test2, "./assets/svg");
}

@plugin "@iconify/tailwind4" {
  prefix: "square-icon";
  square: true;
  icon-sets: from-folder(test3, "./assets/svg");
}
```
