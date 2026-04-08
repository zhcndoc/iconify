1. 安装 `[npm]cross-fetch`（如果你使用的是 CommonJS）或 `[npm]node-fetch`（如果你使用的是模块）作为依赖。
2. 在使用任何图标组件函数之前，使用内部的 `[func]setFetch()` 函数来设置第三方 Fetch API。

```js
import { _api } from '@iconify/svelte';
import fetch from 'cross-fetch';
//  import fetch from 'node-fetch';

// 在执行任何操作之前设置 Fetch API
_api.setFetch(fetch);
```
