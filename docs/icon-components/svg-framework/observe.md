```yaml
title: 'Iconify SVG 框架函数：observe'
functions:
  scan: './scan.md'
  stopObserving: './stop-observing.md'
  pauseObserver: './pause-observer.md'
  resumeObserver: './resume-observer.md'
  renderSVG: './render-svg.md'
  renderHTML: './render-html.md'
  loadIcons: './load-icons.md'
```

# SVG 框架函数：observe

本教程属于 [Iconify SVG 框架函数教程](./functions.md#scanner) 的一部分。

函数 `[func]observe()` 会告知 SVG 框架监视 HTML 元素中的图标占位符，以便 SVG 框架能够找到它们并将其替换为 `[tag]svg`。

SVG 框架会自动监视 `[prop]document.body`，因此无需为 `[prop]document.body` 调用此函数。

何时使用此函数：

- 如果你使用 `[func]stopObserving(document.body)` 移除了对 `[prop]document.body` 的监视（不建议这样做，应使用 `[func]pauseObserver()` 来暂停监视，而不是移除监视）。
- 如果你需要监视不属于 `[prop]document.body` 的元素，例如 Shadow DOM。

## 用法

该函数包含以下参数：

- `[prop]root`，`[type]HTMLElement`。要监视的元素。

## 示例

```js
// 创建元素。
const node = document.createElement('div');

// 告知 SVG 框架监视该元素。
Iconify.observe(node);

// 1 秒后添加图标 - 它将被替换为 <svg>
setTimeout(() => {
	node.innerHTML =
		'Home icon: <span class="iconify" data-icon="mdi:home"></span>';
}, 1000);
```

另一个示例：

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
	// 如果你将元素添加到 document.body 则不需要此步骤，因为 document.body 已经被
	// 自动监视。如果元素是 Shadow DOM 或其他自定义元素树的一部分，请使用此方法。
	Iconify.observe(node);

	return node;
}

// 停止监视元素。
// 如果不再需要某个元素，请务必停止对其的监视！
// SVG 框架不知道你是否仍然需要该元素。
function removeNode(node) {
	Iconify.stopObserving(node);
}
```

## 注意事项

- 图标占位符不会立即被替换。它可能会在下一个 tick 发生，或者在从 API 获取到图标数据后发生。不要期望在更改元素内容后 HTML 会立即包含 `[tag]svg` 标签。如果你想在根元素中查找图标，请通过类名 `[str]iconify` 或属性 `[attr]data-icon` 进行搜索，而不是通过标签名。如果你想完全控制渲染过程，请参阅 `[func]renderSVG()`、`[func]renderHTML()` 和 `[func]loadIcons()`。
- 当你开始监视自定义元素时，系统会自动扫描其中的占位符。无需调用 `[func]scan()`，该操作会自动完成。
