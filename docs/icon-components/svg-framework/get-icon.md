```yaml
title: 'Iconify SVG 框架函数：getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# SVG 框架函数：getIcon

本教程是 [Iconify SVG 框架函数教程](./functions.md#getting-icons) 的一部分。

`include icon-components/functions/get-icon/intro`

## 用法

`include icon-components/functions/get-icon/props`

## 示例

```yaml
src: icon-components/iconify/get-icon.js
extra:
  - src: icon-components/iconify/get-icon.json
    title: '结果：'
```

另一个示例：

```yaml
src: icon-components/iconify/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: '结果：'
```

使用错误图标名称的示例，返回 `null`：

```js
// null
const data = Iconify.getIcon('no-such-icon');
```
