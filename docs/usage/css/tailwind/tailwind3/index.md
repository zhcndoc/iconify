```yaml
title: Iconify for Tailwind CSS 版本 3
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
functions:
  addDynamicIconSelectors: "../dynamic/index.md"
  addIconSelectors: "../iconify/index.md"
```

# 适用于 Tailwind CSS 的 Iconify

适用于 Tailwind CSS 的 Iconify 插件让您能够轻松地在 Tailwind CSS 中使用图标。

您只需编写极少的代码，即可使用[超过 60,000 个开源图标](/docs/icons/icon-data.md)和自定义图标。

## Tailwind CSS 版本

本文档涵盖适用于 Tailwind 3 的插件。

如需了解较新的 Tailwind 4 插件，请参阅 [Tailwind 4 插件文档](../tailwind4/index.md)。

不过，Tailwind 3 插件同样可以在 Tailwind 4 中使用，但您需要创建一个配置文件。

## 插件

目前提供多个插件，它们使用不同的语法并具有不同的选项。

主要有 2 个插件：

- `[func]addDynamicIconSelectors()`
- `[func]addIconSelectors()`

这些插件使用不同的语法，并提供不同的选项。

例如，以下是在 HTML 中使用图标 `[icon]mdi-light:home` 的语法：

```yaml
src: usage/tailwind/syntax-iconify.html
hint: "Usage with addDynamicIconSelectors"
```

```yaml
src: usage/tailwind/syntax-iconify2.html
hint: "Usage with addIconSelectors"
```

### 安装

要安装插件，请将 `[npm]@iconify/tailwind` 添加为开发依赖：

```sh
npm i -D @iconify/tailwind
```

然后您需要对其进行配置。

#### Tailwind 3 配置

对于 Tailwind CSS 3，请打开 `[file]tailwind.config.js`，从 `[npm]@iconify/tailwind` 导入 `[func]addIconSelectors`（主插件）或 `[func]addDynamicIconSelectors`（动态选择器），并将其添加到插件列表中。

包含 `[func]addIconSelectors()` 插件的 `[file]tailwind.config.js` 示例：

```js
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // 用于简洁选择器的 Iconify 插件，需要编写要加载的图标集列表
    // HTML 中的图标用法：
    //  <span class="iconify mdi-light--home"></span>
    //  <span class="iconify-color vscode-icons--file-type-tailwind"></span>
    addIconSelectors(["mdi-light", "vscode-icons"]),
  ],
};
```

包含 `[func]addDynamicIconSelectors()` 插件的 `[file]tailwind.config.js` 示例：

```js
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // 用于动态选择器的 Iconify 插件，无需额外配置
    // HTML 中的图标用法：
    //  <span class="i-[mdi-light--home]"></span>
    addDynamicIconSelectors(),
  ],
};
```

#### Tailwind 4 配置

对于 Tailwind 4，您需要创建一个新文件（例如 `[file]icons.mjs`）来存放配置：

```js
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default addDynamicIconSelectors();
```

然后在您的 CSS 文件中导入该插件：

```css
@plugin './icons.mjs';
```

文档中的所有代码示例均针对 Tailwind CSS 3。

Tailwind CSS 4 的配置类似，不同之处在于您不需要将插件添加到 Tailwind 配置的 `[prop]plugins` 属性中，而是需要将其作为默认导出。

这需要对模块和导出（exports）的工作原理有基本的了解。

### 图标集

插件本身不包含图标。您需要添加想要使用的图标集。

要添加所有开源图标集，请将 `[npm]@iconify/json` 添加为开发依赖：

```sh
npm i -D @iconify/json
```

您也可以通过安装 `[npm]@iconify-json/{prefix}` 依赖项（其中 `[str]{prefix}` 为图标集前缀）来仅安装您想要使用的图标集，例如 `[npm]@iconify-json/mdi-light`。

请参阅[图标数据文档](/docs/icons/icon-data.md)。

#### 自定义图标集

插件同样支持自定义图标集，请参阅下方的详细文档。

## 使用方法

如需了解更多详情，请参阅各插件的文档：

- [`[func]addIconSelectors()` 插件文档](../iconify/index.md)。
- [`[func]addDynamicIconSelectors()` 插件文档](../dynamic/index.md)。
