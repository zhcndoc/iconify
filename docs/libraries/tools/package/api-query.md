```yaml
title: 发送 API 查询
functions:
  importFromFigma: '../import/figma/index.md'
  downloadGitHubRepo: './github.md'
  downloadFile: './download-file.md'
```

# 发送 API 查询

本教程是 [Iconify Tools](../index.md) 中 [包函数文档](./index.md) 的一部分。

函数 `[func]sendAPIQuery()` 是带有缓存功能的 `[func]fetch` 的封装。

它被用于从远程源检索文本数据的函数，例如 `[func]importFromFigma()` 和 `[func]downloadGitHubRepo()`。

如需检索二进制文件，请参阅 `[func]downloadFile()`。

## 用法

该函数具有以下参数：

- `[prop]query`，`[type]APIQueryParams`。URI 和参数。
- `[prop]cache`，`[type]APICacheOptions`。缓存选项。

函数返回：

- 成功时返回 `[type]string` 类型的内容。
- 失败时返回 `[type]number` 类型的错误。

该函数是异步的。这意味着你需要将其作为 `[class]Promise` 实例进行处理，通常是在函数调用前添加 `[js]await`。

### APIQueryParams

`[type]APIQueryParams` 对象具有以下属性：

- `[prop]uri`，`[type]string`。基础 URI。
- `[prop]params`，`[type]URLSearchParams`。可选参数。
- `[prop]header`，`[type]Record<string, string>`。可选请求头。

示例：

```js
const params = {
	uri: 'https://api.whatever.com/some-file/',
	params: new URLSearchParams({
		version: '123',
	}),
	headers: {
		Accept: 'application/json',
	},
};
```

### APICacheOptions

`[type]APICacheOptions` 对象具有以下属性：

- `[prop]dir`，`[type]string`。缓存应存储的目录。
- `[prop]ttl`，`[type]number`。数据可缓存的时长，单位为秒。

## 缓存管理

如果未设置 `[prop]cache` 属性，则数据不会被缓存。

如果设置了 `[prop]cache` 属性，函数将为查询生成唯一的哈希值，并检查具有该哈希值的文件是否已存在且未过期。如果成功，它将返回缓存的数据，而不是获取新数据。

你可以随时使用 `[func]clearAPICache()` 函数清除缓存：

```ts
import { clearAPICache } from '@iconify/tools/lib/download/api/cache';

const cacheDir = 'cache';

// 异步函数，因此将其包装在匿名异步函数中。
// 对于支持顶层 await 的 Node 17+ 版本则不需要。
(async () => {
	await clearAPICache(cacheDir);
})();
```

## 示例

```yaml
src: libraries/tools/package/api.ts
title: 'example.ts'
```
