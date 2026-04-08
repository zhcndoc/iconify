```yaml
title: "Iconify Icon Web 组件函数：iconLoaded"
```

# Web 组件函数：iconLoaded

本教程属于 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-loaded/intro`

## 用法

`include icon-components/functions/icon-loaded/props`

## 示例

```js
import { iconLoaded, loadIcons } from "iconify-icon";

function renderLeftArrow() {
  // 检查 'bi:arrow-left' 是否可用
  if (iconLoaded("bi:arrow-left")) {
    // 返回 'bi:arrow-left' 的 HTML
    return '<iconify-icon icon="bi:arrow-left"></iconify-icon>';
  }

  // 加载图标。这是一个不好的示例，因为在有状态组件中应该使用回调来重新渲染箭头，
  // 但此代码示例是关于 iconLoaded() 的，而不是 loadIcons()

  // loadIcons() 函数是异步的，因此在此示例中它只会触发加载，但
  // 图标数据不会立即可用
  loadIcons(["bi:arrow-left"]);

  // 返回 '<'
  return "<span>&lt;</span>";
}
```

## 旧版

`include icon-components/functions/icon-loaded/legacy`
