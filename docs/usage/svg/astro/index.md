```yaml
title: Astro Icon
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Astro Icon

Astro Icon 是一个用于 [Astro](https://astro.build/) 的简单图标组件。

借助 Astro Icon，你可以轻松使用[超过 60,000 个开源图标](/docs/icons/icon-data.md)和自定义图标，且只需极少的代码。

## 安装

安装 `[npm]astro-icon`：

```sh
npm i -D astro-icon
```

## 用法

Astro Icon 可以直接在你的 HTML 中内联 SVG：

```astro
---
import { Icon } from 'astro-icon/components'
---

<Icon name="mdi:home" />
```

它还可以生成 SVG 精灵图。

有关更多详细信息，请参阅 [Astro Icon 自述文件](https://github.com/natemoo-re/astro-icon)。
