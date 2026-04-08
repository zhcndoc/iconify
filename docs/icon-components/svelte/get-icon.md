```yaml
title: 'Svelte 的 Iconify 函数：getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Svelte 的 Iconify 函数：getIcon

本教程属于 [Svelte 的 Iconify 函数教程](./index.md#functions) 的一部分。

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
  - search: react
    replace: svelte
```

另一个示例：

```yaml
src: icon-components/common/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
replacements:
  - search: react
    replace: svelte
```

图标名称无效时的示例，返回 `null`：

```yaml
src: icon-components/common/get-icon-null.js
replacements:
  - search: react
    replace: svelte
```

## Svelte 组件示例

此示例在图标加载期间会渲染 `[html]<slot />`，以模拟 React 组件的行为。由于 Svelte 中存在一个 bug，第三方组件无法使用 `[html]<slot />`，因此 Svelte 组件的行为与其他组件略有不同。

```yaml
src: icon-components/common/get-icon.svelte
```
