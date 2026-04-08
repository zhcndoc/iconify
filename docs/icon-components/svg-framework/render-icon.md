```yaml
title: "Iconify SVG 框架函数：renderIcon"
functions:
  renderSVG: "./render-svg.md"
  renderHTML: "./render-html.md"
  replaceIDs: "./replace-ids.md"
  getIcon: "./get-icon.md"
  loadIcon: "./load-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
```

# SVG 框架函数：renderIcon

本教程属于 [Iconify SVG 框架函数教程](./functions.md#render) 的一部分。

函数 `[func]renderIcon()` 生成 `[func]renderSVG()` 和 `[func]renderHTML()` 函数所使用的数据。

当您自行生成 `[tag]svg` 元素时，应使用此函数。例如，当它由某个组件生成时。

## 用法

函数包含以下参数：

- `[prop]name`，`[type]string` 类型。图标名称。
- `[prop]customisations`。可选的自定义配置对象。

函数返回包含图标数据的 `[type]object` 对象，如果图标不可用则返回 `null`。

## 结果

```yaml
include: icon-components/functions/build-icon/result
replacements:
  - search: "icon component"
    replace: "SVG framework"
```

## 更改 ID！ {#important}

使用此函数提供的数据生成图标时，请使用 `[func]replaceIDs()` 函数。

它将确保每个图标内部的元素具有唯一的 ID。

## 示例

```yaml
src: icon-components/iconify/render-icon.js
extra:
  - src: icon-components/iconify/render-icon.json
    title: "结果："
```

另一个示例：

```js
// 获取图标数据
const icon = Iconify.renderIcon("carbon:deploy");

// 创建元素
const svg = document.createElement("svg");
const svgDefaults: IconifySVGProps = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  focusable: false,
  role: "img",
};
Object.keys(svgDefaults).forEach((attr) => {
  svg.setAttribute(attr, svgDefaults[attr]);
});
Object.keys(icon.attributes).forEach((attr) => {
  svg.setAttribute(attr, icon.attributes[attr]);
});

// 设置内容
svg.innerHTML = Iconify.replaceIDs(icon.body);
```

## 自定义配置

第二个参数是可选的图标自定义配置。请勿将其与占位符 `[attr]data-` 属性混淆。

可用的自定义配置：

`include icon-components/customisations`

有关尺寸和对齐的更多详细信息，请参阅 [图标尺寸文档](./dimensions.md)。

有关变换的更多详细信息，请参阅 [图标变换文档](./transform.md)。

## 渲染 SVG 或 HTML

此函数创建 `[type]object` 对象。如果您想创建 `[tag]svg` 元素，请改用 `[func]renderSVG()`。如果您想获取 HTML `[type]string` 字符串，请改用 `[func]renderHTML()`。
