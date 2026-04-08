```yaml
title: 'Iconify for Vue 2 函数：iconExists'
```

# Iconify for Vue 2 函数：iconExists

本教程属于 [Iconify for Vue 2 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-exists/intro`

## 用法

`include icon-components/functions/icon-exists/props`

## 示例

```js
import { iconExists } from '@iconify/vue2';

const icon = 'bi:arrow-left';
console.log(`Is ${icon} available?`, iconExists(icon) ? 'yes' : 'no');
```
