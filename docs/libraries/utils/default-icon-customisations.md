```yaml
title: Iconify Utils 中的 defaultIconCustomisations
types:
  FullIconifyIconCustomisations: './icon-customisations.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
  mergeCustomisations: './merge-customisations.md'
```

# defaultIconCustomisations

此常量属于 [Iconify Utils 包](./index.md)。

常量 `[func]defaultIconCustomisations` 用于提供默认的 `[type]FullIconifyIconCustomisations` 值。

它由两部分合并而成：

### defaultIconSizeCustomisations

常量 `[func]defaultIconSizeCustomisations` 表示尺寸自定义项：`[prop]width` 和 `[prop]height`：

```js
const defaultIconSizeCustomisations = {
	width: null,
	height: null,
};
```

### defaultIconTransformations

常量 `[func]defaultIconTransformations` 表示变换：

```js
const defaultIconTransformations = {
	rotate: 0,
	vFlip: false,
	hFlip: false,
};
```

变换的默认值与 `[type]IconifyIcon` 类型共享。

## 用法

```yaml
src: libraries/utils/default-icon-customisations.ts
title: 'example.ts'
```

通常它与 `[func]mergeCustomisations()` 函数一起使用。

它也用于只需要部分自定义项的函数中，例如 `[func]iconToSVG()`，但其内部实际上使用的是完整自定义项。
