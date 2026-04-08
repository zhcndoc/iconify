```yaml
title: 使用 Iconify Utils 为图标生成 CSS
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
functions:
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
  getIconCSS: '/docs/libraries/utils/get-icon-css.md'
  getIconsContentCSS: '/docs/libraries/utils/get-icons-content-css.md'
  getIconContentCSS: '/docs/libraries/utils/get-icon-content-css.md'
```

# 使用 Iconify Utils 为图标生成 CSS

此方法需要编写少量代码，并使用 Node.js。

如果您不使用 Node.js 或不熟悉以下代码，
[请考虑其他为图标生成 CSS 的方法](../index.md#tools)。

## Node.js {#node}

如果您还没有 Node.js 应用，则需要创建一个来生成 CSS。

关于 Node.js 工作原理的教程有很多，简要步骤如下：

- 在您的计算机上安装 Node.js。
- 创建一个空目录，运行 `[bash]npm init -y` 以创建基础项目。

## 依赖项

您需要安装两个依赖项：

- `[npm]@iconify/utils` 用于安装包含生成 CSS 函数的 [Iconify Utils](/docs/libraries/utils/index.md)。
- `[npm]@iconify/json` 用于安装[所有开源图标集的数据](/docs/icons/icon-data.md)。

要安装它们，请运行

```bash
npm install --save-dev @iconify/utils @iconify/json
```

## 函数

Iconify Utils 提供了几个用于为图标生成 CSS 的函数：

- `[func]getIconsCSS()` 为图标集中选定的图标生成 CSS。
- `[func]getIconCSS()` 为单个图标生成 CSS（使用图标作为源，而非图标集）。
- `[func]getIconsContentCSS()` 将图标集中选定的图标渲染为伪元素的内容。
- `[func]getIconContentCSS()` 将单个图标渲染为伪元素的内容（使用图标作为源）。

本教程展示了如何使用 `[func]getIconsCSS()`，它适用于大多数使用场景。

## 构建脚本

构建 CSS 的过程很简单：

- 加载图标集。
- 为该图标集中您需要的图标生成 CSS。
- 将其保存到 `[file].css` 文件中。

```yaml
src: usage/css-utils.js
```

修改图标列表和 `[file].css` 文件的位置，然后运行它以构建 CSS。

## 使用方法

要在 HTML 中使用这些图标，请使用带有两个类名的 `[tag]span` 元素：
图标集的类名，以及图标的类名。

```html
<span class="icon--mdi-light icon--mdi-light--alert-circle"></span>
```

## 选项

`[func]getIconsCSS()` 提供了可用于自定义生成 CSS 的选项。

请参阅 [getIconsCSS() 文档](/docs/libraries/utils/get-icons-css.md)。
