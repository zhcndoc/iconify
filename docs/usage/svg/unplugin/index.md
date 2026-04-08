```yaml
title: Unplugin Icons
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Unplugin Icons

Unplugin Icons 是一个动态生成图标组件的插件。

如果您使用以下 UI 框架构建应用，可以使用它来渲染图标：

- React, Preact
- Vue 2.7+, Vue 3
- Svelte
- Solid
- Astro
- Qwik

借助 Unplugin Icons，您只需极少的代码即可轻松使用[超过 60,000 个开源图标](/docs/icons/icon-data.md)和自定义图标。

## 它是如何工作的？ {#process}

它是一个与几乎所有现代构建工具兼容的插件，可根据需要动态生成组件。

## React 示例 {#react}

```tsx
import HomeIcon from '~icons/mdi/home';

function Demo() {
	return (
		<p>
			Home icon: <HomeIcon />
		</p>
	);
}
```

## Vue 示例 {#vue}

Vue 模板示例：

```vue
<script setup lang="ts">
import MdiHome from 'virtual:icons/mdi/home';
</script>

<template>
	<p>Home icon: <MdiHome /></p>
</template>
```

## 安装与使用

安装和使用说明取决于您使用的构建工具和 UI 框架。

请参阅 [Unplugin Icons 自述文件](https://github.com/antfu/unplugin-icons) 获取说明。

## 示例

如果您想查看包含配置和模板的完整示例，
请查看 [Unplugin Icons 示例](https://github.com/antfu/unplugin-icons/tree/main/examples)。

## 自定义图标

您可以将 Unplugin Icons 与自定义图标配合使用。

借助 [Iconify Tools](/docs/libraries/tools/index.md)，您可以导入、
清理并优化图标，然后将它们与 Unplugin Icons 配合使用。

您可以在 [Iconify Tools 仓库](https://github.com/iconify/tools/tree/main/%40iconify-demo/unplugin) 中找到一个可运行的示例，
查看 `[file]vite.config.ts` 以获取加载自定义图标的配置示例。

相关函数的文档请参阅本文档的 [Iconify Tools](/docs/libraries/tools/index.md) 部分。
