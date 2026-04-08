```yaml
title: 'Iconify SVG 框架函数：stopObserving'
functions:
  scan: './scan.md'
  observe: './observe.md'
  pauseObserver: './pause-observer.md'
  resumeObserver: './resume-observer.md'
```

# SVG 框架函数：stopObserving

本教程是 [Iconify SVG 框架函数教程](./functions.md#scanner) 的一部分。

函数 `[func]stopObserving()` 用于告知 SVG 框架停止监视 HTML 元素中的图标占位符。

何时使用此函数：

- 如果您想移除对 `[prop]document.body` 的监视。不过，建议改用 `[func]pauseObserver()`。
- 如果您正在监视自定义元素（例如 Shadow DOM），并且希望停止监视它（例如，当您准备移除该元素时）。

## 用法

该函数包含以下参数：

- `[prop]root`，`[type]HTMLElement`。要停止监视的元素。

## 示例

```js
// 创建元素并开始监视它。
function createNode() {
	let clicked = false;

	// 创建元素，设置内容。
	const node = document.createElement('a');
	node.innerHTML =
		'<span class="iconify" data-icon="carbon:circle-dash"></span>';

	// 点击时更改图标。
	node.addEventListener('click', () => {
		clicked = !clicked;
		node
			.querySelector('.iconify')
			.setAttribute(
				'data-icon',
				clicked ? 'carbon:circle-filled' : 'carbon:circle-dash'
			);
	});

	// 监视更改。
	// 如果您将元素添加到 document.body，则不需要此操作，因为 document.body 已经被
	// 自动监视。如果元素是 Shadow DOM 或其他自定义元素树的一部分，请使用此方法。
	Iconify.observe(node);

	return node;
}

// 停止监视元素。
// 如果不再需要某个元素，请务必停止监视它！
// SVG 框架不知道您是否仍然需要该元素。
function removeNode(node) {
	Iconify.stopObserving(node);
}
```
