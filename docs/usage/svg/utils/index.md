```yaml
title: 使用 Iconify Utils 生成 SVG
functions:
  parseIconSetAsync: '/docs/libraries/utils/parse-icon-set.md'
  getIconData: '/docs/libraries/utils/get-icon-data.md'
  iconToSVG: '/docs/libraries/utils/icon-to-svg.md'
  iconToHTML: '/docs/libraries/utils/icon-to-html.md'
```

# 使用 Iconify Utils 生成 SVG

此方法需要编写少量代码，并使用 Node.js。

如果您不使用 Node.js 或不熟悉下面的代码，请[考虑其他生成图标 CSS 的方法](../index.md#tools)。

## 流程

工作原理：

- 加载图标集数据。
- 将图标导出为 SVG 文件。

最终，您将得到数千个 SVG 文件，可以将它们嵌入到 HTML 中。

如何将 SVG 嵌入 HTML 取决于您的项目。如果无法实现自动化，只需将 `[file].svg` 文件中的代码复制/粘贴到您想要使用图标的 `[file].html` 文件中即可。

## Node.js {#node}

如果您还没有 Node.js 应用，则需要创建一个来生成 CSS。

关于 Node.js 工作原理的教程有很多，简要步骤如下：

- 在您的计算机上安装 Node.js。
- 为项目创建目录，运行 `[bash]npm init -y` 进行初始化。

## 依赖项

您需要安装 2 个依赖项：

- `[npm]@iconify/utils` 用于安装包含生成 CSS 功能的 [Iconify Utils](/docs/libraries/utils/index.md)。
- `[npm]@iconify/json` 用于安装[所有开源图标集的数据](/docs/icons/icon-data.md)。

要安装它们，请运行

```bash
npm install --save-dev @iconify/utils @iconify/json
```

## 脚本

这里有两个示例脚本，请根据您的用例选择更合适的一个：

- 将图标集中的所有图标导出为 `[file].svg` 文件的脚本。
- 包含为选定图标生成 SVG 功能的脚本。

### 导出所有图标

此脚本将图标集中的所有图标导出为 `[file].svg` 文件。

生成 SVG 文件的流程很简单：

- 加载图标集。
- 解析它以列出所有图标。
- 在回调中为每个图标生成 `[file].svg` 文件。

```yaml
src: usage/svg-utils.js
```

修改选项后运行它，即可导出 SVG 文件。

示例中使用的 [Iconify Utils](/docs/libraries/utils/index.md) 函数：

- `[func]parseIconSetAsync()` 用于解析图标集。
- `[func]iconToSVG()` 和 `[func]iconToHTML()` 用于生成 SVG。

### 获取图标的 SVG

此脚本为选定的图标生成 SVG。

您可以在构建过程中使用该函数来生成 SVG，然后将其嵌入到 HTML 中。

生成 SVG 的流程：

- 加载图标集。
- 获取选定图标的数据。
- 生成 SVG。

```yaml
src: usage/svg-func-utils.js
```

示例中使用的 [Iconify Utils](/docs/libraries/utils/index.md) 函数：

- `[func]getIconData()` 用于从图标集中提取图标数据。
- `[func]iconToSVG()` 和 `[func]iconToHTML()` 用于生成 SVG。
