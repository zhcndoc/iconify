```yaml
title: 'Iconify SVG 框架函数：pauseObserver'
functions:
  scan: './scan.md'
  observe: './observe.md'
  stopObserving: './stop-observing.md'
  resumeObserver: './resume-observer.md'
```

# SVG 框架函数：pauseObserver

本教程是 [Iconify SVG 框架函数教程](./functions.md#scanner) 的一部分。

函数 `[func]pauseObserver()` 会告知 SVG 框架暂时停止监视 HTML 元素中的图标占位符。

当你需要进行大量 DOM 操作，并且希望在使用 `[func]resumeObserver()` 恢复监视之前阻止 SVG 框架扫描 DOM 时，请使用此函数。

## 用法

该函数包含以下可选参数：

- `[prop]root`，`[type]HTMLElement`。要暂停监视的元素。如果省略，SVG 框架将暂停所有活动的监视器。

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

- 暂停计数器是一个数字，每次调用都会递增。如果你多次调用 `[func]pauseObserver()`，则需要调用相同次数的 `[func]resumeObserver()` 才能恢复监视。
- 如果你正在移除自定义节点且不打算重新使用它，你需要停止监视器，而不是暂停它。请参阅 `[func]stopObserving()`。
