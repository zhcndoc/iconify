```yaml
title: 适用于 Tailwind CSS 4 的 Iconify
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# 适用于 Tailwind CSS 的 Iconify

适用于 Tailwind CSS 的 Iconify 插件让你可以轻松地在 Tailwind CSS 中使用图标。

只需极少的代码，你就可以使用[超过 60,000 个开源图标](/docs/icons/icon-data.md)以及自定义图标。

## 插件

本文档涵盖适用于 Tailwind 4 的插件。

如需了解较旧的 Tailwind 3 插件，请参阅 [Tailwind 3 插件文档](../tailwind3/index.md)。
它同样适用于 Tailwind 4，目前比新插件拥有更多选项，但需要创建配置文件。

## 安装

要安装该插件，请将 `[npm]@iconify/tailwind4` 添加为开发依赖：

```sh
npm i -D @iconify/tailwind4
```

该插件不包含图标。你需要添加你想要使用的图标集。

要添加所有开源图标集，请将 `[npm]@iconify/json` 添加为开发依赖：

```sh
npm i -D @iconify/json
```

你也可以通过安装 `[npm]@iconify-json/{prefix}` 依赖（其中 `[str]{prefix}` 是图标集前缀）来仅安装你想要使用的图标集，例如 `[npm]@iconify-json/mdi-light`。

请参阅[图标数据文档](/docs/icons/icon-data.md)。

## 基本用法

将此添加到你的 CSS 中：

```css
@plugin "@iconify/tailwind4";
```

要使用图标，请为图标添加动态选择器，例如

```yaml
src: usage/tailwind/syntax-iconify.html
```

在 [Iconify 图标集网站](https://icon-sets.iconify.design/solar/) 浏览或搜索图标，点击你想要使用的图标，在代码选项中选择 "CSS" -> "Tailwind CSS" 并复制代码。

### 选项

该插件支持多个选项：

- 使用 `[prop]prefix` 设置自定义图标前缀，以替代默认的 `[str]icon`。
- 使用 `[prop]scale` 设置默认图标大小。如果你未设置图标大小，其高度将为 `[str]1em`。

配置示例：

```css
@plugin "@iconify/tailwind4" {
  prefix: "iconify";
  scale: 1.2;
}
```

### 自定义图标

该插件通过 `[prop]icon-sets` 选项支持自定义图标和图标集。

请参阅[自定义图标](./custom-icons.md)文档。

### 简洁选择器

实际上，它包含两个插件：

- 用于动态选择器的插件，如上述代码示例所示
- 用于简洁选择器的插件

用于简洁选择器的插件使用更简洁的图标语法，但需要添加配置：

```yaml
src: usage/tailwind/syntax-iconify2.html
```

需要什么配置？

你需要指定想要渲染哪些图标集。

这可以通过设置前缀列表来完成：

```css
@plugin "@iconify/tailwind4" {
  prefixes: mdi-light, vscode-icons;
}
```

### 额外类名

每个图标都有 2 个类名：

- 图标类名，例如 `[str]mdi-light--home`。
- 渲染模式类名：`[str]iconify` 或 `[str]iconify-color`（可配置）。

除图片 URL 外，所有图标共享相同的规则。

为避免重复，通用规则被拆分到了工具类中。
此外，这允许你选择图标的渲染方式：

- `[str]iconify` 将图标渲染为遮罩图像，因此图标使用与文本相同的颜色。要更改图标颜色，只需更改文本颜色。这适用于没有硬编码配色的图标。
- `[str]iconify-color` 将图标渲染为背景图像。这适用于具有硬编码配色的图标。

#### 为什么需要配置？ {#config-explanation}

为什么需要它？

Tailwind CSS 的工作原理是在你的代码中查找类名，并为这些类名生成 CSS。

当使用动态类名（如 `[str]icon-[mdi-light--home]`）时，Tailwind CSS 会找到所有此类类名并将它们传递给插件以生成 CSS。这意味着插件知道使用了哪些图标，并且仅加载所需的图标。

然而，当使用普通类名（如 `[str]mdi-light--home`）时，Tailwind CSS 要求插件先在项目中查找类名之前，为所有可能的类名生成 CSS，然后再移除未使用的类名。这意味着插件必须为每一个可能存在的图标生成 CSS。

为每一个图标生成 CSS 并不是一个快速的过程。在拥有超过 60,000 个可用图标的情况下，这可能会耗费大量时间。随后 Tailwind CSS 会将所有内容保留在内存中，这可能导致 Tailwind CSS 内存溢出。为避免这种情况，你必须指定想要使用的图标集列表。
