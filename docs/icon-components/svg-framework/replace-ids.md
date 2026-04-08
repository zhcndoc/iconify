```yaml
title: 'Iconify SVG 框架函数：replaceIDs'
functions:
  renderSVG: './render-svg.md'
  renderHTML: './render-html.md'
  renderIcon: './render-icon.md'
  getIcon: './get-icon.md'
```

# SVG 框架函数：replaceIDs

本教程属于 [Iconify SVG 框架函数教程](./functions.md#render) 的一部分。

函数 `[func]replaceIDs()` 用于查找 SVG 中的 ID，并将其替换为唯一的随机 ID。

当你使用 `[func]renderIcon()` 或 `[func]getIcon()` 提供的数据自行生成 `[tag]svg` 元素时，应使用此函数。例如，当图标由某个组件生成时。

## 用法

`include icon-components/functions/replace-ids/props`

## 示例

```js
// 获取图标数据
const icon = Iconify.renderIcon('carbon:deploy', {
	height: 'auto',
});

// 创建元素
const svg = document.createElement('svg');
const svgDefaults: IconifySVGProps = {
	'xmlns': 'http://www.w3.org/2000/svg',
	'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	'aria-hidden': true,
	'focusable': false,
	'role': 'img',
};
Object.keys(svgDefaults).forEach((attr) => {
	svg.setAttribute(attr, svgDefaults[attr]);
});
Object.keys(icon.attributes).forEach((attr) => {
	svg.setAttribute(attr, icon.attributes[attr]);
});

// 设置内容
svg.innerHTML = Iconify.replaceIDs(icon.body);
```
