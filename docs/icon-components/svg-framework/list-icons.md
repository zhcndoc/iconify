```yaml
title: 'Iconify SVG 框架函数：listIcons'
```

# SVG 框架函数：listIcons

本教程属于 [Iconify SVG 框架函数教程](./functions.md#getting-icons) 的一部分。

`include icon-components/functions/list-icons/intro`

## 用法

`include icon-components/functions/list-icons/props`

## 示例

```js
// 列出所有图标
console.log(Iconify.listIcons());
```

另一个示例：

```js
// 列出所有已加载的 Material Design 图标
console.log(Iconify.listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
