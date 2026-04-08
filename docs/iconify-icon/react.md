```yaml
title: '在 React 中使用 Iconify Icon Web 组件'
```

# 在 React 中使用 Iconify Icon Web 组件

本教程是 [Iconify Icon Web 组件教程](./index.md) 的一部分。

Iconify 图标 Web 组件与 React 配合良好，但存在几个问题：

- 在 React 中使用 Web 组件时，需要使用 `[prop]class` 而不是 `[prop]className` 来传递类名。
- `[prop]icon` 属性只能是字符串。
- 没有 JSX 提示。

## 适用于 React 的 Iconify Icon

这些问题可以通过适用于 React 的 Iconify Icon 来解决。

它是 Web 组件的封装，提供了对 `[prop]className` 的支持，允许在 `[prop]icon` 中使用对象，并为 React 组件提供类型定义。

## 安装

请安装 `[npm]@iconify-icon/react` 包，而不是 `[npm]iconify-icon` 包：

```bash
npm install --save-dev @iconify-icon/react
```

```bash
yarn add --dev @iconify-icon/react
```

## 使用方法

从 `[npm]@iconify-icon/react` 导入 `[prop]Icon` 组件，并在 `[prop]icon` 属性中设置图标：

```jsx
import React from 'react';
import { Icon } from '@iconify-icon/react';

export function Alert() {
	return (
		<div className="alert">
			<Icon icon="mdi-light:alert" />
			Important notice with alert icon!
		</div>
	);
}
```

### 使用对象

你可以在 `[prop]icon` 属性中传递对象：

```jsx
import React from 'react';
import { Icon } from '@iconify-icon/react';
import alertIcon from '@iconify-icons/mdi-light/alert';

export function Alert() {
	return (
		<div className="alert">
			<Icon icon={alertIcon} />
			Important notice with alert icon!
		</div>
	);
}
```

### 函数

[Iconify Icon Web 组件教程](./index.md#functions) 中列出的所有其他函数均可用。你可以直接从 `[npm]@iconify-icon/react` 包中导入它们：

```jsx
import React from 'react';
import { Icon, addIcon } from '@iconify-icon/react';

addIcon('alert', {
	body: '<path fill="currentColor" d="M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536ZM11 14v-4h1v4h-1Zm0 2h1v2h-1v-2Z"/>',
	width: 24,
	height: 24,
});

export function Alert() {
	return (
		<div className="alert">
			<Icon icon="alert" />
			Important notice with alert icon!
		</div>
	);
}
```

有关所有属性、函数和使用示例的列表，请参阅 [Iconify Icon Web 组件](./index.md)。`[npm]@iconify-icon/react` 仅仅是 `[npm]iconify-icon` 的封装，并非不同的组件，它支持所有相同的属性和函数。
