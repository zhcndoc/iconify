```yaml
title: Iconify Icon Web 组件中的 Icon 属性
navigation: './index.md'
functions:
  addIcon: './add-icon.md'
```

# Icon 属性

本教程是 [Iconify Icon Web 组件教程](./index.md) 的一部分。

在使用 [Iconify 图标组件](../icon-components/index.md) 时，你可以直接将图标数据传递给组件，而不是使用图标名称，如下所示：

```jsx
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	return <Icon icon={arrowLeft} />;
}
```

遗憾的是，Web 组件不支持相同的语法。
HTML 元素中的特性（attribute）不能是复杂对象，这使得将图标数据传递给 Web 组件变得更加困难。

如何解决这个问题？

## 指定图标名称

最好且最简单的解决方案是使用 `[func]addIcon()` 函数为图标分配名称：

```js
import { addIcon } from 'iconify-icon';
import arrowLeft from '@iconify-icons/bi/arrow-left';

addIcon('arrow-left', arrowLeft);

function renderLeftArrow() {
	return '<iconify-icon icon="arrow-left"></iconify-icon>';
}
```

## 序列化数据

Web 组件还支持为 `[prop]icon` 特性传递序列化后的对象：

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	const node = document.createElement('iconify-icon');
	node.setAttribute('icon', JSON.stringify(arrowLeft));
	return node.outerHTML;
}
```

或者，如果你需要渲染 HTML，可以使用以下方式：

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

const replacements = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;',
};

function stringify(data) {
	return JSON.stringify(arrowLeft).replace(
		/[&<>"']/g,
		(char) => replacements[char]
	);
}

const arrowLeftString = JSON.stringify(arrowLeft);

function renderLeftArrow() {
	return '<iconify-icon icon="' + arrowLeftString + '"></iconify-icon>';
}
```

## 使用属性（Property）

除了设置特性（attribute），你还可以直接设置属性（property），它支持接收对象：

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	const node = document.createElement('iconify-icon');
	node.icon = arrowLeft;
	return node.outerHTML;
}
```
