```yaml
title: Iconify 在 Tailwind CSS 中的简洁类名
types:
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  addDynamicIconSelectors: './index.md'
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
```

# Tailwind CSS 的简洁类名

[Iconify 的 Tailwind CSS 插件包](./index.md) 包含多个插件。
本文档介绍 `[func]addCleanIconSelectors` 插件。

函数 `[func]addCleanIconSelectors()` 用于创建具有简洁类名的图标。

## 弃用通知

此插件已弃用！

它已被 [addIconSelectors](./iconify/index.md) 插件取代。

## 使用方法

打开 `[file]tailwind.config.js`，从 `[npm]@iconify/tailwind` 导入 `[func]addCleanIconSelectors`，并将其添加到插件列表中。

示例 `[file]tailwind.config.js`：

```js
const { addCleanIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.html'],
	plugins: [
		// Iconify 插件：简洁版本
		addCleanIconSelectors(['mdi-light:home']),
	],
};
```

具有简洁类名的图标示例：

```html
<span class="icon--mdi-light icon--mdi-light--home"></span>
```

请注意，该元素包含两个类名：

- `[str]icon--mdi-light`：包含该图标集中所有图标的通用 CSS。
- `[str]icon--mdi-light--home`：仅包含特定图标的 SVG。

通过将通用规则放在 `[str]icon--mdi-light` 中，生成的 CSS 中重复代码更少，从而更加简洁。

## 参数

`[func]addCleanIconSelectors()` 包含 2 个参数：

- 图标名称列表。
- 选项对象（可选）。

### 图标名称

与 `[func]addDynamicIconSelectors()` 不同，此插件需要提供已使用的图标列表。

这是由于 Tailwind CSS 的限制所致。对于像 `[str]icon--mdi-light--home` 这样的类，无法创建能够匹配部分类名（例如所有以 `[str]icon--` 开头的类）的 Tailwind CSS 插件。此类功能仅适用于包含 `[str]-[something]` 格式的类，例如 `[str]icon-[mdi-light--home]`。

第一个参数的值可以是字符串数组，也可以是以逗号分隔的名称字符串。支持的字符串格式如下：

- 图标名称，例如 `[str]mdi-light:home`。
- 类名，例如 `[str].icon--mdi-light--home` 或 `[str]icon--mdi-light--home`（带或不带开头的点）。

请注意，如果使用类名，无论选项如何，格式始终为：`[str]icon--` + 图标集前缀 + `[str]--` + 图标名称。

### 安全列表或 HTML

遗憾的是，仅在插件参数中列出图标名称是不够的。Tailwind CSS 需要看到这些类名在某个地方被使用，否则它会忽略插件生成的 CSS。因此，你需要将这些类名添加到 Tailwind CSS 扫描的 HTML 中，或者像其他类名一样将其添加到配置的 `[prop]safelist` 属性中。

这可能会比较麻烦，因此这也是该插件仅被列为高级用法的原因之一。Tailwind CSS 的开发人员并没有让插件开发人员的工作变得轻松。

### 选项

选项参数可用于自定义类名。

它包含以下属性：

- Iconify Utils 包中 `[func]getIconsCSS()` 的所有选项。
- 用于图标集的 `[prop]iconSets` 属性，与 [addDynamicIconSelectors 选项](./options.md) 中的相同。

## 多个实例

你可以在 Tailwind CSS 配置的插件列表中多次添加该插件，每次使用不同的选项或不同的图标列表。
