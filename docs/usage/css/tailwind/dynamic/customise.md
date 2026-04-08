```yaml
title: 在 Iconify for Tailwind CSS 中自定义图标
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addDynamicIconSelectors: './index.md'
```

# 在 Iconify for Tailwind CSS 中自定义图标

本文档介绍了 `[func]addDynamicIconSelectors` 插件的 `[prop]customise` 选项。

## 自定义回调

`[prop]customise` 选项允许您更改图标的内容。

它有什么作用？
- 您可以更改使用描边的图标中的 `[prop]stroke-width`。
- 您可以更改使用硬编码调色板的图标（例如表情符号）中的颜色。
- 您可以更改动态图标中的动画持续时间。
- 您可以更改半透明元素的不透明度。
- 您可以向图标添加额外的形状。

……以此类推。您可以完全控制 SVG 内容。

## 用法

`[prop]customise` 选项是一个函数，包含 3 个参数：
- `[prop]content`，`[type]string`。图标内容。
- `[prop]name`，`[type]string`。图标名称。
- `[prop]prefix`，`[type]string`。图标集前缀。

该函数应返回修改后的内容。 
如果无需修改，则应返回原始的 `[prop]content` 值。

## 示例

以下是在 [Tabler 图标](https://icon-sets.iconify.design/tabler/) 中使用 `[prop]customise` 选项更改 `[prop]stroke-width` 的示例：

```js
addDynamicIconSelectors({
    // 更改前缀
    // 细线图标将用作 <span class="icon-thin-[tabler--app-window]"></span>
    // 而 <span class="icon-[tabler--app-window]"></span> 仍将保留默认的 2px 描边
    prefix: 'icon-thin',
    // 自定义内容
    customise: (content, name, prefix) => {
        switch (prefix) {
            case 'tabler':
                return content.replaceAll('stroke-width="2"', 'stroke-width="1"');
        }
        return content;
    }
})
```
