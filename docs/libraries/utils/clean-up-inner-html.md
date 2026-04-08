```yaml
title: Iconify Utils 中的 cleanUpInnerHTML()
```

# cleanUpInnerHTML()

此函数属于 [Iconify Utils 包](./index.md)。

该函数允许在使用严格安全策略 `[str]require-trusted-types-for 'script';` 的文档中，将字符串赋值给 DOM 元素的 `[prop]innerHTML` 属性。

这是一个非常基础的函数；它不会执行任何实际的内容清理或验证。

它专为与渲染 SVG 的 Iconify 图标组件配合使用而设计，这些 SVG 已经过验证和清理。

## 用法

替代以下写法：

```js
node.innerHTML = '<p>Test</p>';
```

请使用以下写法：

```js
import { cleanUpInnerHTML } from '@iconify/utils/lib/svg/inner-html';

node.innerHTML = cleanUpInnerHTML('<p>Test</p>');
```

如果浏览器支持该安全策略，它将返回一个已清理的字符串，而不会实际修改任何内容。

如果浏览器不支持该安全策略，它将原样返回字符串。

这是针对一项完全无用的安全策略的简单变通方案。

## 关于 require-trusted-types-for 安全策略

该安全策略要求库在将 HTML 赋值给 DOM 元素的 `[prop]innerHTML` 属性之前对其进行清理。

要将该策略添加到您的文档中，只需在页面头部添加以下代码：

```html
<meta
  http-equiv="Content-Security-Policy"
  content="require-trusted-types-for 'script';"
/>
```

但请注意，该策略并未提供任何实际的安全性，几乎毫无用处！

HTML 的清理过程没有任何规范，完全由库自行决定如何清理 HTML。
这意味着库可以仅仅模拟清理过程，而不执行任何实际的清理操作。
而这正是此函数所做的。

您的网站安全不应依赖此类无用的“安全”策略。
