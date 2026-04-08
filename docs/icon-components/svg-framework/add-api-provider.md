```yaml
title: 'Iconify SVG 框架函数：addAPIProvider'
```

# SVG 框架函数：addAPIProvider

本教程属于 [Iconify SVG 框架函数教程](./functions.md#api) 的一部分。

```yaml
include: icon-components/functions/add-api-provider/intro
replacements:
  - search: component
    replace: SVG 框架
```

## API 提供商

`include icon-components/api-providers`

## 用法

`include icon-components/functions/add-api-provider/props`

## 示例

```js
Iconify.addAPIProvider('local', {
	// 主机名数组
	resources: ['http://localhost:3000'],
});
```

```html
<span class="iconify" data-icon="@local:material-icons:home"></span>
```

`include icon-components/functions/add-api-provider/footer`
