```yaml
title: 2025年4月 Iconify 图标组件迁移指南
```

# 图标组件迁移指南

以下迁移指南适用于：

- [Iconify 图标 Web 组件](/docs/iconify-icon/index.md) 版本 2 到 3。
- [Iconify Vue 图标组件](/docs/icon-components/vue/index.md) 版本 4 到 5。
- [Iconify Svelte 图标组件](/docs/icon-components/svelte/index.md) 版本 4 到 5。
- [Iconify React 图标组件](/docs/icon-components/react/index.md) 版本 5 到 6。

上述所有组件的新主版本已于 2025 年 4 月发布。

这是一次破坏性更新，本迁移指南将帮助您修改代码。

## 变更内容

本次更新引入了以下变更：

- 之前已弃用的函数 `[func]disableCache()` 和 `[func]enableCache()` 已被移除。
- 之前已弃用的函数 `[func]iconExists()` 已被移除。请改用 `[func]iconLoaded()`（见下文）。

Vue 和 Svelte 组件还有更多变更，请见下文。

### 移除 iconExists

不用担心，该函数并未消失，只是重命名为了 `[func]iconLoaded()`。

重命名该函数的原因是其原名非常不恰当。
它是组件初始版本中的内部名称，用于存储模块内部。
它用于检查图标是否存在于存储中，这在存储模块内部是合理的。
然而，当从组件导出时，该函数不再特定于存储，因此会让人误以为它可以用来检查图标是否存在于 Iconify API 中。

为避免混淆，该函数后来被重命名为 `[func]iconLoaded()`，但为了向后兼容，旧名称 `[func]iconExists()` 仍被支持。

发布新主版本正是彻底移除它的好时机。

迁移非常简单：只需更改代码中的函数名称即可。

### 缓存函数

存储中的缓存功能已不再可用。

要进行迁移，只需移除对这些函数的调用即可。

有关移除这些函数的详细原因，请参阅 [2025年1月新闻](/news/2025.md#components-storage)。

### Vue 变更

Vue 组件已使用 Vue 的组合式 API（Composition API）重写。这不会改变其行为，但如果其他组件未使用选项式 API（Options API），现在您可以将其从打包文件中移除。

其他变更：

#### onLoad

Vue 组件中的回调 `[prop]onLoad` 已被 `[prop]load` 事件取代。

旧代码：

```vue
<template>
  <Icon icon="mdi:home" :onLoad="(icon) => console.log('Loaded', icon)" />
</template>
```

新代码：

```vue
<template>
  <Icon icon="mdi:home" @load="(icon) => console.log('Loaded', icon)" />
</template>
```

### Svelte

Svelte 组件已使用 Svelte 5 的 runes 语法重写。

如果您仍在使用 Svelte 4 或更早版本，新的 Svelte 组件将无法正常工作。

您需要使用组件的第 5 版：

```bash
npm install --save-dev @iconify/svelte@4
```

或使用 [Web 组件](/docs/iconify-icon/index.md)。

#### onLoad

Svelte 组件中的事件 `[prop]on:load` 已被 `[prop]onload` 回调取代。

旧代码：

```svelte
<Icon icon="mdi:home" on:load={(event) => console.log('Loaded', event.detail.icon)} />
```

新代码：

```svelte
<Icon icon="mdi:home" onload={(icon) => console.log('Loaded', icon)} />
```
