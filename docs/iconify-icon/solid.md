```yaml
title: '在 SolidJS 中使用 Iconify Icon Web 组件'
```

# 在 SolidJS 中使用 Iconify Icon Web 组件

本教程是 [Iconify Icon Web 组件教程](./index.md) 的一部分。

目前，SolidJS 对 Web 组件的支持较差。这是由 Web 组件规范中的问题导致的。在为 Web 组件设置属性（property）时，有时无法按预期工作。

## 解决方案

在 Solid 中使用的变通方法是强制 Solid 使用特性（attributes）而不是属性（properties）：

```html
<iconify-icon attr:icon="mdi-light:home"></iconify-icon>
```

## 适用于 Solid 的 Iconify Icon

适用于 Solid 的 Iconify Icon 通过在原生 Solid 组件中将属性映射为特性来解决此问题，因此你可以毫无问题地使用该 Web 组件。

它还为该组件提供了类型定义，使其在 JSX 中更易于使用，并支持为 `[prop]icon` 属性传入对象。

## 安装

不要安装 `[npm]iconify-icon` 包，请安装 `[npm]@iconify-icon/solid` 包：

```bash
npm install --save-dev @iconify-icon/solid
```

```bash
yarn add --dev @iconify-icon/solid
```

## 使用方法

从 `[npm]@iconify-icon/solid` 导入 `[prop]Icon` 组件，并在 `[prop]icon` 属性中设置图标：

```jsx
import { Icon } from '@iconify-icon/solid';

export default () => {
	return (
		<div class="alert">
			<Icon icon="mdi-light:alert" />
			Important notice with alert icon!
		</div>
	);
};
```

### 使用对象

你可以在 `[prop]icon` 属性中传入对象：

```jsx
import { Icon } from '@iconify-icon/solid';
import alertIcon from '@iconify-icons/mdi-light/alert';

export default () => {
	return (
		<div class="alert">
			<Icon icon={alertIcon} />
			Important notice with alert icon!
		</div>
	);
};
```

### 函数

[Iconify Icon Web 组件教程](./index.md#functions) 中列出的所有其他函数均可用。你可以直接从 `[npm]@iconify-icon/solid` 包中导入它们：

```jsx
import { Icon, addIcon } from '@iconify-icon/solid';

addIcon('alert', {
	body: '<path fill="currentColor" d="M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536ZM11 14v-4h1v4h-1Zm0 2h1v2h-1v-2Z"/>',
	width: 24,
	height: 24,
});

export default () => {
	return (
		<div class="alert">
			<Icon icon="alert" />
			Important notice with alert icon!
		</div>
	);
};
```

有关所有特性、所有函数和使用示例的列表，请参阅 [Iconify Icon Web 组件](./index.md)。`[npm]@iconify-icon/solid` 仅是 `[npm]iconify-icon` 的包装器，并非不同的组件，它支持所有相同的属性和函数。
