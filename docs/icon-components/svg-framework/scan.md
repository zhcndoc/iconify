```yaml
title: 'Iconify SVG 框架函数：scan'
functions:
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  pauseObserver: './pause-observer.md'
  resumeObserver: './resume-observer.md'
```

# SVG 框架函数：scan

本教程属于 [Iconify SVG 框架函数教程](./functions.md#scanner) 的一部分。

函数 `[func]scan()` 会扫描文档中的图标占位符，并将其替换为图标。

SVG 框架会自动监听 `[prop]document.body` 并在每次更改后扫描 DOM，因此在更改 DOM 后无需使用此函数。

何时使用此函数：

- 如果你已使用 `[func]stopObserving(document.body)` 或 `[func]pauseObserver()` 禁用了观察器。
- 如果你需要扫描不属于 `[prop]document.body` 的元素，例如 Shadow DOM。

如果你希望 SVG 框架监听自定义根元素的更改，请不要使用此函数，而应使用 `[func]observe()`。此函数会在所有占位符被替换后停止监听元素，而 `[func]observe()` 会持续监听元素，直到你使用 `[func]stopObserving()` 告知其停止。

## 用法

该函数具有以下可选参数：

- `[prop]root`，`[type]HTMLElement`。要扫描的元素。如果省略，函数将扫描所有被监听的根元素。

## 示例

```js
const node = document.createElement('div');
node.innerHTML =
	'Home icon: <span class="iconify" data-icon="mdi:home"></span>';
Iconify.scan(node);
```

## 注意事项

- 函数可能不会立即替换占位符。如果图标尚未加载，SVG 框架将从 Iconify API 异步加载图标，然后再次扫描 DOM 并替换占位符。
- 请勿将占位符用作根元素。该函数仅检查子元素，不检查根元素。
