```yaml
title: Iconify Utils 中的 matchIconName
types:
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# matchIconName

此常量是 [Iconify Utils 包](./index.md) 的一部分。

常量 `[func]matchIconName` 用于验证图标名称的各个部分。

唯一的例外是 provider。API provider 可能为空，因此需要额外检查 provider 是否为空。

该常量由 `[func]validateIconName()` 使用。

## 用法

```ts
import { matchIconName } from '@iconify/utils';

function checkIcon(name: string): boolean {
	return !!name.match(matchIconName);
}

console.log(checkIcon('test-icon') ? 'passed' : 'failed');
```
