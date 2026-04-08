```yaml
title: FullIconifyIcon 类型
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  defaultIconProps: './default-icon-props.md'
```

# FullIconifyIcon 类型

`[type]FullIconifyIcon` 类型用于 [Iconify Utils](./index.md) 中处理图标数据。

你可以在 [Iconify Utils 源代码](https://github.com/iconify/iconify/tree/main/packages/utils) 的 `[file]src/icon/index.ts` 文件中找到此类型。

此类型与 `[type]IconifyIcon` 相同，区别在于所有属性均为必填项。

```ts
import type { IconifyIcon } from '@iconify/types';

export type FullIconifyIcon = Required<IconifyIcon>;
```

有关详细信息，请参阅 `[type]IconifyIcon` 类型。

## 示例

```json
{
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>",
	"left": 0,
	"top": 0,
	"width": 24,
	"height": 24,
	"rotate": 0,
	"vFlip": false,
	"hFlip": false
}
```

## 用法

要将 `[type]IconifyIcon` 转换为 `[type]FullIconifyIcon`，请将 `[func]defaultIconProps` 与你的数据合并：

```yaml
src: libraries/utils/full-iconify-icon.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/full-iconify-icon.json
    title: 'Result:'
```
