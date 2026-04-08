```yaml
title: 'Iconify SVG 框架函数：addIcon'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# SVG 框架函数：addIcon

本教程属于 [Iconify SVG 框架函数教程](./functions.md#adding-icons) 的一部分。

```yaml
include: icon-components/functions/add-icon/intro
replacements:
  - search: component
    replace: SVG framework
```

## 用法

`include icon-components/functions/add-icon/props`

## 示例

```js
Iconify.addIcon('mdi:account-box', {
	body: '<path d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

## 注意事项

- 通过此函数添加的图标不会缓存在 `[prop]localStorage` 和 `[prop]sessionStorage` 中。
- 调用此函数将在下一个 tick 触发 DOM 重新扫描。

## API 提供者

`include icon-components/functions/add-icon/provider`

示例：

```js
Iconify.addIcon('@custom:md:test', {
	body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

上述代码添加了以下图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在 HTML 代码中，可以按如下方式使用此图标：

```html
<span class="iconify" data-icon="@custom:md:test"></span>
```

`include icon-components/functions/add-icon/custom`

## 单个图标

`include icon-components/functions/add-icon/footer`
