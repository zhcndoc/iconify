```yaml
title: 优化 SVG
functions:
  cleanupSVG: './cleanup.md'
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# 使用 SVGO 优化图标

此函数属于 [Iconify Tools](../index.md) 中的 [图标操作函数](./index.md) 的一部分。

函数 `[func]runSVGO()` 使用流行的 SVG 优化工具 SVGO 来优化图标。

它旨在用于已经通过 `[func]cleanupSVG()` 处理过的图标，该函数会完成大部分的清理工作。

此函数用于执行 SVGO 擅长的高级操作：转换变换、清理数值、移除未使用的 SVG 元素等。

## 插件

默认情况下，该函数使用预配置的 SVGO 插件列表，其中排除了一些存在缺陷的插件。

如果图标包含 SVG 动画，则会排除修改形状的插件。

## 用法

该函数具有以下参数：

- `[prop]svg`，`[type]SVG`。图标实例。
- `[prop]options`，`[type]object`。选项（可选）。

## 选项

设置选项有两种方式：

- 使用自定义的 SVGO 插件列表。
- 通过多个选项切换插件组。

### 自定义插件列表

你可以使用选项的 `[prop]plugins` 属性来设置自定义插件。该值是一个插件数组，将直接传递给 SVGO（请参阅 SVGO 文档）。

示例：

```ts
runSVGO(svg, {
	plugins: ['convertStyleToAttrs', 'inlineStyles'],
	multipass: true,
});
```

### 插件选项

你也可以通过设置以下选项从预设的插件列表中进行选择：

- `[prop]animated`，`[type]boolean`。如果为 `true`，则不会使用已知在处理动画图标时会出现问题的 SVGO 插件。
- `[prop]keepShapes`，`[type]boolean`。如果为 `true`，则不会使用修改形状的插件。如果你需要保持形状原样（例如在对形状进行动画处理时），这会很有用，但它不如设置 `[prop]animated` 选项那么严格。
- `[prop]cleanupIDs`，`[type]string | false | function`。用于重写 ID 的自定义前缀，设置为 `false` 可禁用更改 ID 的插件。也可以是一个回调函数，根据旧 ID 返回新 ID。

这些选项不能与 `[prop]plugins` 选项同时使用。

### 其他选项

可与上述任何选项配合使用的选项：

- `[prop]multipass`，`[type]boolean`。如果为 `true`，插件将运行多次以获得更好的优化效果。默认启用。

## 示例

```yaml
src: libraries/tools/icon/svgo.ts
title: 'svgo.ts'
extra:
  - src: libraries/tools/icon/svgo.svg
    title: '结果：'
```

该示例展示了在未经清理和验证的图标上运行 SVGO 的情况。并非所有无用属性都已被移除，且 SVGO 不会检查图标中不应包含的某些内容，例如文本、光栅图像和事件。

因此，所有图标在加载后都必须进行清理。

带有清理操作的相同代码：

```yaml
src: libraries/tools/icon/svgo2.ts
title: 'svgo.ts'
extra:
  - src: libraries/tools/icon/svgo2.svg
    title: '结果：'
```
