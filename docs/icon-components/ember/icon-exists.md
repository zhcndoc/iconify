```yaml
title: 'Iconify for Ember 函数：iconExists'
functions:
  getIcon: './get-icon.md'
  loadIcons: './load-icons.md'
```

# Iconify for Ember 函数：iconExists

本教程是 [Iconify for Ember 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-exists/intro`

## 用法

`include icon-components/functions/icon-exists/props`

## 示例

```js
import { iconExists } from '@iconify/ember/components/iconify-icon';

const icon = 'bi:arrow-left';
console.log(`Is ${icon} available?`, iconExists(icon) ? 'yes' : 'no');
```
