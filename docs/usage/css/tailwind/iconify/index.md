```yaml
title: 在 Tailwind CSS 中使用 Iconify
types:
  IconifyJSON: "/docs/types/iconify-json.md"
  IconifyInfo: "/docs/types/iconify-info.md"
functions:
  addDynamicIconSelectors: "../dynamic/index.md"
```

# 在 Tailwind CSS 中使用 Iconify 插件

[Iconify Tailwind CSS 插件包](../index.md) 包含多个插件。
本文档介绍 `[func]addIconSelectors` 插件。

此插件适用于 Tailwind 3，也可用于 Tailwind 4，但需要创建配置文件。

如需了解较新的 Tailwind 4 插件，请参阅 [Tailwind 4 插件文档](../tailwind4/index.md)。

## 区别

此插件与 `[func]addDynamicIconSelectors()` 有何不同？

- CSS 更紧凑，复用通用代码。
- 图标名称更简洁。
- 你可以将同一图标用作遮罩或背景图像。

缺点：

- 需要配置。你必须列出想要使用的图标集。

## HTML

要在 HTML 中添加图标，只需创建一个带有两个类名的 `[tag]span` 元素：

- 用于将图标渲染为背景或遮罩图像的类名。
- 包含图标名称的类名（CSS 中包含图标数据）。

示例：

```html
<span class="iconify ph--alarm-duotone"></span>
<span class="iconify-color fluent-emoji-flat--alarm-clock"></span>
<span class="iconify carbon--edit-off"></span>
```

为什么需要两个类名？为了减少重复并使 CSS 体积大幅缩小。
一个类仅包含图标数据，另一个可复用的类告诉浏览器如何渲染该图标数据。

### 图标类名

每个渲染的图标都与其他图标共享大部分规则。
通过将这些规则拆分为独立的类，CSS 体积会大幅减小。

#### 图标名称选择器

图标名称选择器用于设置图标数据。
语法为 `[str]{prefix}--{name}`，其中 `[str]{prefix}` 是图标集前缀，`[str]{name}` 是图标名称。
该语法可在 [插件选项](./prefixes.md) 中轻松更改。

插件为图标生成的 CSS：

```css
.mdi-light--home {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='black' d='m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z'/%3E%3C/svg%3E");
}
```

#### Iconify 选择器

图标可以渲染为背景图像或遮罩图像。

遮罩图像会以文本颜色渲染图标。请参阅 [CSS 中单色图标的工作原理](../index.md#monotone)。
要将图标渲染为遮罩图像，请添加 `[str]iconify` 选择器。

背景图像会以图标中设置的颜色渲染图标（适用于具有硬编码调色板的表情符号等）。
要将图标渲染为背景图像，请添加 `[str]iconify-color` 选择器。

选择器可在 [插件选项](./prefixes.md) 中轻松更改。

插件为可复用选择器生成的 CSS：

```css
.iconify {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.iconify-color {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-image: var(--svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
```

### 颜色与尺寸

要更改图标的颜色和尺寸，请像处理普通文本一样使用颜色和尺寸类名：

```html
<span class="iconify ph--alarm-duotone text-red-600 text-2xl"></span>
```

你也可以使用宽度和高度来调整图标大小：

```html
<span class="iconify-color twemoji--cat-face w-12 h-12"></span>
```

请确保宽度和高度相同，因为
某些浏览器（如 Safari）在使用 SVG 作为遮罩图像时无法保持比例。

如果将选项 `[prop]square` 设置为 `false`，图标将不是正方形，且你使用了自定义的宽度和高度
类，请确保宽高比与图标的原始宽高比匹配。

请参阅 [尺寸文档](./size-color.md#custom)。

## 使用方法

要将插件添加到 Tailwind CSS，你需要打开 `[file]tailwind.config.js`，从 `[npm]@iconify/tailwind` 导入 `[func]addIconSelectors`
并将其添加到插件列表中。

### 基本用法

```js
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify 插件，需要编写要加载的图标集列表
    addIconSelectors(["mdi", "mdi-light"]),
  ],
};
```

传递给 `[func]addIconSelectors` 的参数是你想要使用的图标集数组。

为了避免生成过多图标（这将耗费大量时间），
你需要告知插件你想要使用哪些图标集。

条目可以是图标集前缀或 [自定义图标集](./prefixes.md)。

#### 尺寸与颜色

请参阅 [尺寸与颜色文档](./size-color.md)。

### 高级用法

该插件也接受包含选项的对象作为参数。

唯一必需的选项是 `[prop]prefixes`，它是一个前缀列表，与上述示例中的数组相同。

```js
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  plugins: [
    // Iconify 插件，需要编写要加载的图标集列表
    addIconSelectors({
      // 前缀列表，必填
      prefixes: ["mdi", "mdi-light"],

      // 以下所有其他属性均为可选。此示例显示默认值。
      // 遮罩和背景选择器
      maskSelector: ".iconify-color",
      backgroundSelector: ".iconify",
      // 图标选择器，必须包含 "{prefix}" 和 "{name}"
      iconSelector: ".{prefix}--{name}",
      // 用于图标数据的变量名
      varName: "svg",
      // 缩放图标，用于设置背景/遮罩选择器中的宽/高
      scale: 1,
      // 使图标为正方形
      square: true,
      // 添加到遮罩和背景选择器的额外规则
      extraMaskRules: {},
      extraBackgroundRules: {},
      // 用于自定义图标的回调函数（例如更改描边宽度、颜色等...）。
      // 第一个参数是内容，第二个是图标名称，第三个是图标集前缀。
      // 函数应返回修改后的内容。
      customise: (content, name, prefix) => content,
    }),
  ],
};
```

## 选项

插件选项：

- `[prop]prefixes`，`[type](string | IconSetOptions)[]` - [要加载的图标集数组](./prefixes.md)。
- `[prop]maskSelector`，`[type]string` - 自定义遮罩选择器。设置为空字符串可禁用它。
- `[prop]backgroundSelector`，`[type]string` - 自定义背景选择器。设置为空字符串可禁用它。
- `[prop]iconSelector`，`[type]string` - 自定义图标选择器。必须包含 `[str]{prefix}` 和 `[str]{name}`。
- `[prop]varName`，`[type]string` - 用于图标数据的 CSS 变量名。
- `[prop]scale` - 缩放图标。见下文。
- `[prop]square`，`[type]boolean` - 使图标为正方形。设置为 `false` 可生成非正方形图标。
- `[prop]extraMaskRules` - 添加到遮罩选择器的额外规则。
- `[prop]extraBackgroundRules` - 添加到背景选择器的额外规则。
- `[prop]customise` - 用于自定义图标的回调函数。你可以使用它来 [更改描边宽度、颜色](./customise.md) 等。

除 `[prop]prefixes` 外，所有选项的默认值均显示在上面的代码示例中。
`[prop]prefixes` 的默认值为空数组。

### 前缀列表

此插件要求设置你想要使用的图标集列表，
可以将其设置为插件的唯一参数，或作为选项中的 `[prop]prefixes` 属性。

你可以使用它来：

- 选择你想要使用的图标集。
- 过滤图标，仅渲染你需要的图标，从而提升插件性能。
- 自定义图标。
- 导入自定义图标集。

有关详细信息和使用示例，请参阅 [前缀选项文档](./prefixes.md)。

### 自定义选项

自定义选项可用于自定义图标。

你可以更改图标颜色、描边宽度、动画持续时间等。

有关详细信息和使用示例，请参阅 [自定义选项文档](./customise.md)。

### 选择器

选项 `[prop]maskSelector` 和 `[prop]backgroundSelector` 可用于自定义用于背景和遮罩的选择器。

有关详细信息和使用示例，请参阅 [选择器选项文档](./selectors.md)。

## 常见问题

如果一切配置正确，图标应该能正常工作。

可能遇到的问题：

### 构建 CSS 时出错

如果缺少图标集或图标，插件将抛出错误。

请查看错误信息。如果插件找不到图标集，请安装依赖项。如果插件找不到图标，说明你使用了错误的图标名称。

### 选择器不生效

你已添加类名并构建了 CSS，但图标不显示？

首先，确保类名正确。如果正确，很可能是 Tailwind CSS 未检测到你的类名。
如果你熟悉 Tailwind CSS，修复此问题的过程与处理其他缺失类名完全相同：

- 你可以检查文件是否已被扫描。
- 你可以在配置中将其添加到 `[prop]safelist`。
