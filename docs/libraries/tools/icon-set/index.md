```yaml
title: IconSet 类
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  validateIconSet: '../../utils/validate-icon-set.md'
  forEach: './for-each.md'
  forEachSync: './for-each.md'
```

# IconSet 类

`[type]IconSet` 类在 [Iconify Tools](../index.md) 中表示一个图标集。

## 使用方法

要创建实例，请使用以下代码导入现有的 `[type]IconifyJSON` 数据：

```ts
import { IconSet } from '@iconify/tools';

const iconSet = new IconSet({
	prefix: 'codicon',
	icons: {
		'add': {
			body: '<g fill="currentColor"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/></g>',
		},
		'chrome-maximize': {
			body: '<g fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></g>',
		},
		'chrome-minimize': {
			body: '<g fill="currentColor"><path d="M14 8v1H3V8h11z"/></g>',
		},
	},
});
```

或使用以下代码创建空的图标集：

```ts
import { blankIconSet } from '@iconify/tools';

const iconSet = blankIconSet('some-prefix');
```

构造函数不会对图标集进行验证。 
如果你不确定数据来源，
则需要使用 [Iconify Utils](../../utils/index.md) 中的 `[func]validateIconSet()` 对其进行验证。

## 函数

`include libraries/tools/icon-set/methods-list`

## 处理图标

所有图标优化和解析函数都作用于 `[type]SVG` 实例。如何将这些函数应用于整个图标集？

可以通过使用 `[func]forEach()` 方法遍历图标来实现：

```yaml
src: libraries/tools/icon/icon-set.ts
```
