```yaml
title: 'Iconify SVG 框架函数：resumeObserver'
functions:
  scan: './scan.md'
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  pauseObserver: './pause-observer.md'
```

# SVG 框架函数：resumeObserver

本教程是 [Iconify SVG 框架函数教程](./functions.md#scanner) 的一部分。

函数 `[func]resumeObserver()` 会告知 SVG 框架继续监视 HTML 元素中的图标占位符，这些监视之前已通过 `[func]pauseObserver()` 暂停。

## 用法

该函数包含以下可选参数：

- `[prop]root`，`[type]HTMLElement`。要恢复监视的元素。如果省略，SVG 框架将恢复所有已暂停的监视器。

## 示例

```js
// 暂停监视器
Iconify.pauseObserver();

// 执行一些繁重的 DOM 操作
// ...
// ...

// 恢复监视器
Iconify.resumeObserver();
```

## 注意事项

- 暂停计数器是一个数字，每次调用都会递增。如果您多次调用 `[func]pauseObserver()`，则需要调用相同次数的 `[func]resumeObserver()` 才能恢复监视。
- 此函数仅对使用 `[func]pauseObserver()` 暂停的元素有效。如果您想监视新的自定义元素的变化，请改用 `[func]observe()`。
