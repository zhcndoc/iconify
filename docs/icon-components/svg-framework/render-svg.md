```yaml
title: 'Iconify SVG 框架函数：renderSVG'
functions:
  renderHTML: './render-html.md'
  renderIcon: './render-icon.md'
```

# SVG 框架函数：renderSVG

本教程是 [Iconify SVG 框架函数教程](./functions.md#render) 的一部分。

函数 `[func]renderSVG()` 用于创建 `[tag]svg` 元素。

## 用法

该函数包含以下参数：

- `[prop]name`，`[type]string` 类型。图标名称。
- `[prop]customisations`。可选的自定义配置对象。

函数返回 `[tag]svg` 元素，如果图标不可用则返回 `null`。

## 示例

```yaml
src: icon-components/iconify/render-svg.js
demo: true
extra:
  - src: icon-components/iconify/render-svg.html
    hint: 'Generated HTML'
```

另一个示例：

```js
const node = document.createElement('div');
const icon = Iconify.renderSVG('bi:stopwatch', { rotate: 1, height: 'auto' });
node.appendChild(icon);
```

## 自定义配置

第二个参数是可选的图标自定义配置。请勿将其与占位符 `[attr]data-` 属性混淆。

可用的自定义配置：

`include icon-components/customisations`

有关尺寸和对齐的更多详细信息，请参阅 [图标尺寸文档](./dimensions.md)。

有关变换的更多详细信息，请参阅 [图标变换文档](./transform.md)。

## 渲染 HTML

此函数创建 `[tag]svg` 元素。如果您想获取 `[type]string` 类型的字符串，请改用 `[func]renderHTML()`。
