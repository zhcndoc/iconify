```yaml
title: 图标集列表
types:
  IconifyInfo: '/docs/types/iconify-json-metadata.md'
```

# 可用图标集列表

如果您没有使用包含 `[file]collections.json` 的[完整图标集包](./all.md)，您可能需要了解可用的开源图标集列表。

有几种获取方式：

- 从 `[npm]@iconify/collections` NPM 包获取。
- [从 Iconify API 获取](../api/collections.md)。

在 `[npm]@iconify/collections` 和完整图标集包中，您将找到包含所有图标集列表的 `[file]collections.json` 文件。

## 结构

数据存储为一个对象，其中键是图标集前缀，值是 `[type]IconifyInfo` 格式的图标集信息。

## 导入

如果您使用的是 `[npm]@iconify/collections` 包，可以直接从 `[file]@iconify/collections/collections.json` 导入图标集列表作为默认导入，或使用命名导入：

```js
import { collections } from '@iconify/collections';
```

上述代码使用了 JSON 模块，这在旧版本的 Node.js 中无法正常工作。如果您使用的是较旧版本的 Node，导入 JSON 文件需要使用 `[str]--experimental-json-modules` 标志运行脚本。

或者，对于较旧版本的 Node.js，您可以使用 `[func]require()":"` -> `或者，对于较旧版本的 Node.js，您可以使用 `[func]require()":"` -> I'll just output the clean version now.

```js
const collections = require('@iconify/collections/collections.json');
```
