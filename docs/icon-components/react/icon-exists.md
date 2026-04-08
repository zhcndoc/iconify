```yaml
title: "Iconify for React 函数：iconLoaded"
```

# Iconify for React 函数：iconLoaded

本教程属于 [Iconify for React 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-loaded/intro`

## 用法

`include icon-components/functions/icon-loaded/props`

## 示例

```jsx
import { iconLoaded, loadIcons, Icon } from "@iconify/react";

function renderLeftArrow() {
  // 检查 'bi:arrow-left' 是否可用
  if (iconLoaded("bi:arrow-left")) {
    // 返回 'bi:arrow-left' 的 HTML
    return <Icon icon="bi:arrow-left" />;
  }

  // 加载图标。这是一个不好的示例，因为在有状态组件中本应使用回调来重新渲染箭头，
  // 但此代码示例旨在演示 iconLoaded()，而非 loadIcons()

  // loadIcons() 函数是异步的，因此在此示例中它仅会触发加载操作，但
  // 图标数据不会立即可用
  loadIcons(["bi:arrow-left"]);

  // 返回 '<'
  return <span>&lt;</span>;
}
```

## 旧版

`include icon-components/functions/icon-loaded/legacy`
