```yaml
title: Iconify Utils 中的 defaultIconProps
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyOptional: '/docs/types/iconify-icon.md#iconify-optional'
  FullIconifyIcon: './full-iconify-icon.md'
functions:
  iconToSVG: './icon-to-svg.md'
```

# defaultIconProps

此常量属于 [Iconify Utils 包](./index.md)。

常量 `[func]defaultIconProps` 包含可选 `[type]IconifyIcon` 属性的默认值。

它由两部分合并而成：

### defaultIconDimensions

常量 `[func]defaultIconDimensions` 包含图标尺寸的默认值：

```js
const defaultIconDimensions = {
	left: 0,
	top: 0,
	width: 16,
	height: 16,
};
```

### defaultIconTransformations

常量 `[func]defaultIconTransformations` 包含图标变换的默认值：

```js
const defaultIconTransformations = {
	rotate: 0,
	vFlip: false,
	hFlip: false,
};
```

## 用法

该函数具有以下参数：

- `[prop]icon`，`[type]IconifyIcon`。图标数据。

该函数返回类型为 `[type]FullIconifyIcon` 的完整图标数据。

## 示例

```yaml
src: libraries/utils/default-icon-props.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/default-icon-props.json
    title: '结果：'
```

它用于仅需部分图标数据的函数中，例如 `[func]iconToSVG()`，但其内部实际上使用的是完整图标。
