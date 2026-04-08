```yaml
title: 'Iconify SVG 框架函数：loadIcons'
functions:
  scan: './scan.md'
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# SVG 框架函数：loadIcons

本教程是 [Iconify SVG 框架函数教程](./functions.md#api) 的一部分。

`include icon-components/functions/load-icons/intro`

## 用法

`include icon-components/functions/load-icons/props`

## 图标列表

`include icon-components/functions/load-icons/props-icons`

## 回调函数

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName 类型

`include types/iconify-icon-name`

## 示例

加载单个图标的简单回调：

```js
const iconName = 'mdi:home';
Iconify.loadIcons([iconName], (loaded, missing, pending, unsubscribe) => {
	if (loaded.length) {
		console.log(
			`Icon ${iconName} have been loaded and is ready to be renderered.`
		);
		return;
	}

	if (missing.length) {
		console.log(`Icon ${iconName} does not exist.`);
		return;
	}

	if (pending.length) {
		// 在此示例中，待处理的图标列表为空。
		// 如果使用多个图标调用 loadIcons()，待处理列表可能不为空，但对于单个图标，它始终为空。
		//
		// 当发生某些变化时会调用回调函数，对于 1 个图标，只有 2 种变化类型：图标已加载或图标缺失。
	}
});
```

`[func]loadIcons()` 的异步版本：

```js
/**
 * 加载图标的函数，返回 Promise
 */
function loadIcons(icons) {
	return new Promise((fulfill, reject) => {
		Iconify.loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
			if (pending.length) {
				// 图标正在处理中，等待全部加载成功或失败
				return;
			}
			if (missing.length) {
				reject({
					loaded,
					missing,
				});
			} else {
				fulfill({
					loaded,
				});
			}
		});
	});
}

/**
 * 在异步函数中的使用示例
 */
async function test() {
	await loadIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// 对已加载的图标进行操作
	console.log('Loaded!');
}
test();
```

如果你只想加载单个图标，还可以使用更易用的 `[func]loadIcon()`。
