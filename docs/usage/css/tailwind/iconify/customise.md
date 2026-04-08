```yaml
title: 在 Tailwind CSS 的 Iconify 中自定义图标
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# 在 Tailwind CSS 的 Iconify 中自定义图标

本文档介绍了 `[func]addIconSelectors` 插件的 `[prop]customise` 选项。

## 自定义回调

`[prop]customise` 选项允许您更改图标的内容。

它的用途是什么？
- 您可以更改使用描边的图标中的 `[prop]stroke-width`。
- 您可以更改使用硬编码调色板的图标（例如表情符号）中的颜色。
- 您可以更改动态图标中的动画持续时间。
- 您可以更改半透明元素的不透明度。
- 您可以向图标添加额外的形状。

……以此类推。您可以完全控制 SVG 内容。

## 用法

`[prop]customise` 选项是一个函数，包含 3 个参数：
- `[prop]content`，`[type]string` 类型。图标内容。
- `[prop]name`，`[type]string` 类型。图标名称。
- `[prop]prefix`，`[type]string` 类型。图标集前缀。

该函数应返回修改后的内容。 
如果无需修改，则应返回原始的 `[prop]content` 值。

## 示例

以下示例展示了如何使用 `[prop]customise` 选项更改 [Tabler 图标](https://icon-sets.iconify.design/tabler/) 中的 `[prop]stroke-width`：

```js
addIconSelectors({
    prefixes: ['tabler'],
    customise: (content, name, prefix) => {
        switch (prefix) {
            case 'tabler':
                return content.replaceAll('stroke-width="2"', 'stroke-width="1.5"');
        }
        return content;
    }
})
```

## 冲突

如果您在 [`[prop]prefixes` 选项](./prefixes.md) 的配置项中也使用了 `[prop]customise` 选项，则该回调具有优先权，主 `[prop]customise` 将不会用于该图标集。
