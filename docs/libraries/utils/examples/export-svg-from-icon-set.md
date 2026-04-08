```yaml
title: 'Iconify Utils 代码示例：导出 SVG'
functions:
  getIconData: '../get-icon-data.md'
  iconToSVG: '../icon-to-svg.md'
  iconToHTML: '../icon-to-html.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# 使用 Iconify Utils 导出 SVG

本教程是 [Iconify Utils 代码示例](./index.md) 的一部分。

## 导出 SVG

这是一个使用 Iconify Utils 从图标集生成 SVG 的示例：

```yaml
src: libraries/utils/svg-from-set.ts
title: 'demo.ts'
```

## 异步示例

这是另一个示例，它：

- 使用异步函数解析图标集。
- 使用 `[npm]@iconify/json` 作为数据源。
- 使用现代 JavaScript 编写，而非 TypeScript。

```yaml
src: usage/svg-utils.js
title: 'demo.js'
```

## 函数

此代码示例中使用的函数：

- `[func]getIconData()` 用于从图标集中提取单个图标的数据。
- `[func]iconToSVG()` 用于生成 SVG 的属性和 HTML。
- `[func]iconToHTML()` 用于将 `[func]iconToSVG()` 的结果转换为字符串。

## 数据源

对于图标集数据源，本示例使用 [独立图标集包](/docs/icons/json.md)。

如果你需要从其他文件读取，可以将该代码替换为类似以下内容：

```ts
import { readFileSync } from 'fs';

const icons = JSON.parse(readFileSync('whatever.json', 'utf8'));
```

如果你使用的是 TypeScript，请将其类型转换为 `[type]IconifyJSON`：

```ts
import type { IconifyJSON } from '@iconify/types';
import { readFileSync } from 'fs';

const icons = JSON.parse(readFileSync('whatever.json', 'utf8')) as IconifyJSON;
```

## 输出

示例将 SVG 输出到控制台。

如果你需要将其写入文件，请使用文件系统函数，例如 `[func]writeFileSync()` 或其对应的异步函数之一。

## 图标尺寸

在此示例中，所有生成的图标都具有 `[prop]height="1em"`。

你可以通过向 `[func]iconToSVG()` 添加自定义配置作为第二个参数来移除它：

```js
const renderData = iconToSVG(iconData, {
	// 'unset' 会移除图标的尺寸
	height: 'unset',
});
```
