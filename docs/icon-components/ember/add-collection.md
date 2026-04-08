```yaml
title: 'Iconify for Ember 函数：addCollection'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addIcon: './add-icon.md'
```

# Iconify for Ember 函数：addCollection

本教程属于 [Iconify for Ember 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/add-collection/intro`

## 用法

`include icon-components/functions/add-collection/props`

## 示例

```yaml
src: icon-components/common/add-collection.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

```yaml
src: icon-components/common/add-collection2.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

`include icon-components/functions/add-collection/notes`

## API 提供方

`include icon-components/functions/add-collection/provider`

示例：

```yaml
src: icon-components/common/add-collection3.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

上述代码仅添加了一个图标：

- `[prop]provider` 为 `[str]custom`。
- `[prop]prefix` 为 `[str]md`。
- `[prop]name` 为 `[str]test`。

在组件模板中，可以按如下方式使用该图标：

```hbs
<IconifyIcon @icon='@custom:md:test' />
```

`include icon-components/functions/add-collection/custom`

## 单个图标

`include icon-components/functions/add-collection/footer`
