```yaml
title: Astro Icon
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Astro Icon and Astro Iconset

There are two components for [Astro](https://astro.build/):

- Astro Icon
- Astro Iconset

With those components, you can easily use [over 60,000 open source icons](/docs/icons/icon-data.md) and custom icons in Astro with minimal code.

## Installation

When it comes to Iconify icons, both packages are very similar.

### Astro Icon

Install `[npm]astro-icon`:

```sh
npm i -D astro-icon
```

Register the component in your `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
	integrations: [icon()],
});
```

### Astro Iconset

Install `[npm]astro-iconset`:

```sh
npm i -D astro-iconset
```

Register the component in your `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import icon from 'astro-iconset';

export default defineConfig({
	integrations: [icon()],
});
```

## Usage

Usage is almost identical for both packages.

### Astro Icon

Astro Icon can inline SVG directly in your HTML:

```astro
---
import { Icon } from 'astro-icon/components'
---

<Icon name="mdi:home" />
```

It can also generate SVG sprites.

See [Astro Icon readme](https://github.com/natemoo-re/astro-icon) for more details.

### Astro Iconset

Astro Icon can inline SVG directly in your HTML:

```astro
---
import { Icon } from "astro-iconset/components";
---

<Icon name="mdi:home" />
```

It can also generate SVG sprites.

See [Astro Icon readme](https://github.com/natemoo-re/astro-icon) for more details.
