```yaml
title: React 的 SVG + CSS
replacements:
  - code: "60,000"
    value: "${counters.icons}"
  - code: "60k"
    value: "${counters.icons-short}"
```

# 在 React 中使用 SVG + CSS 格式的图标

Iconify 提供了易于使用的组件，用于[将图标渲染为 SVG + CSS 格式](../index.md)。

这些组件会渲染：

- 适用于现代浏览器的 SVG + CSS
- 适用于 Safari 浏览器的完整 SVG，按需从 Iconify API 加载

如需了解更多详情，请参阅[关于 Safari 回退机制如何工作的文章](https://cyberalien.dev/articles/safari-svg-path)。

## 使用方法

1. 安装图标集对应的软件包：

```bash
npm install @iconify-react/material-symbols
```

2. 在 React 组件中导入图标：

```js
import DraftsIcon from "@iconify-react/material-symbols/drafts";
```

3. 在代码中使用图标：

```jsx
<DraftsIcon />
```

替换：

- 将 "material-symbols" 替换为你想要使用的图标集。
- 将 "drafts" 替换为该图标集中的图标名称。
- 将 "DraftsIcon" 替换为你想要使用的组件名称（可以使用任意名称）。

浏览 [Iconify 图标集](https://icon-sets.iconify.design/) 查看所有可用图标。

## 颜色

单色图标使用文本颜色作为图标颜色。要更改图标颜色，请通过 CSS（内联或样式表）更改文本颜色：

```jsx
<DraftsIcon style={{ color: "red" }} />
```

## 尺寸

与其他组件不同，SVG + CSS 组件不会设置图标尺寸。
这既有优点也有缺点。

缺点：

- 你需要自行设置尺寸。

优点：

- 你可以完全控制图标尺寸。

你可以通过以下方式更改图标尺寸：

- 设置 `[prop]width` 和 `[prop]height` 属性。
- 使用 CSS。

### 属性

所有图标组件都支持 `[prop]width` 和 `[prop]height` 属性。

值为字符串类型。

你无需同时设置这两个属性。如果只设置其中一个，另一个属性将根据图标的宽高比自动计算。

示例：

```jsx
<DraftsIcon height="1em" />
<DraftsIcon width="1em" height="1em" />
<DraftsIcon height="24" />
```

### CSS

你可以像控制其他 SVG 一样，在 CSS 中控制图标尺寸。

```css
.drafts-icon {
  width: 1em;
  height: 1em;
}
```

```jsx
<DraftsIcon className="drafts-icon" />
```

## 回退组件

对于不支持 SVG + CSS 的浏览器，这些图标组件会使用回退组件。

回退组件会检测过时的浏览器，从 [Iconify API](../../../api/index.md) 加载完整图标并渲染，以替代小型 SVG。

回退图标按需加载，仅针对使用过时浏览器的访客。使用现代浏览器的用户不会从 API 加载任何内容。

对于 React，回退图标组件发布在 `[npm]@iconify/css-react` 包中。

未来，当 Safari 浏览器支持 `[prop]d` 属性的 `[func]path()` 函数时，将不再需要此组件，
但目前它已随图标一起打包。
