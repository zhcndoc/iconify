```yaml
title: Iconify Utils 中的 parseIconSet()
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  validateIconSet: './validate-icon-set.md'
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
```

# parseIconSet()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]parseIconSet()` 和 `[func]parseIconSetAsync()` 用于解析图标集，并为每个图标调用自定义函数。

## 用法

该函数具有以下参数：

- `[prop]data`，`[type]IconifyJSON`。图标集数据。
- `[prop]callback`，`[type]function`。回调函数，为图标集中找到的每个图标调用。

函数以 `[type]string[]` 形式返回已解析图标的名称。

### 回调

回调函数具有 2 个参数：

- `[prop]name`，`[type]string`。图标名称。
- `[prop]data`，`[type]IconifyIcon | null`。图标数据，如果图标无效则为 `null`。

回调会为图标集中的每个条目调用：所有图标、别名以及 `[prop]not_found` 属性中的所有条目。

如果回调中的 `[prop]data` 参数为 `null`，则表示图标无效或缺失。

## parseIconSetAsync

函数 `[func]parseIconSetAsync()` 与 `[func]parseIconSet()` 完全相同，不同之处在于它是异步的，且回调函数也是异步函数：

```js
await parseIconSetAsync(iconSet, async (name, data) => {
	// 执行异步操作
});
```

## 示例

从图标集中导出所有图标：

```yaml
src: libraries/utils/parse.ts
title: 'usage.ts'
```

统计图标集中的图标数量：

```yaml
src: libraries/utils/count.ts
title: 'count.ts'
```

在计算 `[type]IconifyInfo` 数据的图标数量时，应使用上述示例中的代码来统计图标集中的图标。它会统计所有图标，但不包括隐藏的图标和基本别名。

### 验证

该函数不会检查图标集是否存在错误。在使用之前，请使用 `[func]validateIconSet()` 或 `[func]quicklyValidateIconSet()` 验证图标集。

### JSON 模块

在使用 ES 模块时，上述示例可能需要使用 `[str]--experimental-json-modules` 标志运行 node。

在 Node.js 对 JSON 模块的支持稳定之前，你可以通过将 `[func]import` 替换为 `[func]require()` 来避免使用该标志，因为 `[func]require()` 支持 JSON 文件：

```js
const { icons } = require('@iconify-json/codicon');
```
