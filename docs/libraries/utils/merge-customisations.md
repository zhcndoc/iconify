```yaml
title: Iconify Utils 中的 mergeCustomisations()
types:
  FullIconCustomisations: './icon-customisations.md'
  IconifyIconCustomisations: './icon-customisations.md'
  IconifyIconName: './icon-name.md'
functions:
  validateIconName: './validate-icon.md'
```

# mergeCustomisations()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]mergeCustomisations()` 用于合并默认自定义配置（以 `[type]FullIconCustomisations` 对象形式呈现）与部分自定义配置。它还会验证类型，因此可用于清理用户输入。

## 用法

该函数包含以下参数：

- `[prop]defaults`，`[type]FullIconCustomisations`。完整自定义配置。
- `[prop]item`，`[type]IconifyIconCustomisations`。需要与 `[prop]defaults` 合并的部分自定义配置。

函数返回合并后的自定义配置，其类型与第一个参数传入的类型相同（这使得该函数可用于扩展类型）。

## 示例

```yaml
src: libraries/utils/merge-customisations2.ts
title: 'example.ts'
```

## 合并

为什么不直接像这样合并对象呢？

```yaml
src: libraries/utils/merge-customisations.ts
title: 'bad-example.ts'
```

这种方法仅适用于默认自定义配置，但如果两个对象都包含变换，则无法正常工作。

例如，当你合并来自图标的自定义配置（可能包含变换）与用户的自定义配置时，应使用 `[func]mergeCustomisations()` 函数。它也可用于在解析图标别名时合并自定义配置。
