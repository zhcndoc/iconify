```yaml
title: 'Iconify Icon Web 组件函数：getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Web 组件函数：getIcon

本教程属于 [Iconify Icon Web 组件教程](./index.md#functions) 的一部分。

`include icon-components/functions/get-icon/intro`

## 用法

`include icon-components/functions/get-icon/props`

## 示例

```yaml
src: icon-components/common/get-icon.js
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

另一个示例：

```yaml
src: icon-components/common/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

图标名称错误的示例，返回 `null`：

```yaml
src: icon-components/common/get-icon-null.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```
