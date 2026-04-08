```yaml
title: "Iconify for Svelte 函数：iconLoaded"
functions:
  getIcon: "./get-icon.md"
```

# Iconify for Svelte 函数：iconLoaded

本教程属于 [Iconify for Svelte 函数教程](./index.md#functions) 的一部分。

`include icon-components/functions/icon-loaded/intro`

## 用法

`include icon-components/functions/icon-loaded/props`

## 示例

此示例在图标加载期间渲染 `[prop]fallback` 代码片段。

```yaml
src: icon-components/common/icon-exists.svelte
```

使用示例：

```svelte
<IconWrapper icon="mdi-light:alert">
    {#snippet fallback()}
        <small>!</small>
    {/snippet}
</IconWrapper>
```

此示例使用 `[func]iconLoaded()` 来展示该函数，但为此目的，最好使用 `[func]getIcon()`。有关更好的示例，请参阅 `[func]getIcon()` 文档。

## 旧版

`include icon-components/functions/icon-loaded/legacy`
