```yaml
title: 'Iconify SVG 框架函数：iconExists'
```

# SVG 框架函数：iconExists

本教程是 [Iconify SVG 框架函数教程](./functions.md#getting-icons) 的一部分。

`include icon-components/functions/icon-exists/intro`

## 用法

`include icon-components/functions/icon-exists/props`

## 示例

```js
function renderLeftArrow() {
	// 检查 'bi:arrow-left' 是否可用
	if (Iconify.iconExists('bi:arrow-left')) {
		// 返回 'bi:arrow-left' 的 HTML
		return Iconify.renderHTML('bi:arrow-left');
	}

	// 加载图标。这是一个不好的示例，因为此处应使用回调来重新渲染箭头，但
	// 此代码示例是关于 iconExists() 的，而非 loadIcons()
	Iconify.loadIcons(['bi:arrow-left']);

	// 返回 '<'
	return '&lt;';
}
```
