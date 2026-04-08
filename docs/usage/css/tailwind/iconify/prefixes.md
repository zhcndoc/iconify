```yaml
title: 在 Iconify for Tailwind CSS 中选择图标集
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# 在 Iconify for Tailwind CSS 中选择图标集

本文档介绍了 `[func]addIconSelectors` 插件的 `[prop]prefixes` 选项。

## 前缀列表

`[func]addIconSelectors()` 插件需要设置你想要使用的图标集列表，可以作为插件的唯一参数传入，也可以作为选项中的 `[prop]prefixes` 属性传入。

为什么需要这样做？
- Iconify 提供了海量的图标。Tailwind CSS 插件系统需要创建所有选择器，这意味着需要解析所有图标。通过选择你想要使用的图标集，插件只会解析这些图标集，从而减少构建时间。
- 它可用于自定义图标集。

前缀列表的值是一个数组，每个条目可以是：
- 包含图标集前缀的字符串。
- `[type]IconSetOptions` 对象。

如果你使用包含图标集前缀的字符串，图标集中的所有图标都将被原样解析，不做任何更改。

`[type]IconSetOptions` 对象让你对图标拥有更多控制权，允许你过滤图标、自定义图标以及加载自定义图标集。

## IconSetOptions

对象 `[type]IconSetOptions` 包含以下属性：
- `[prop]prefix`，`[type]string` 类型。图标集前缀。
- `[prop]source`，`[type]string | IconifyJSON` 类型。图标集来源。
- `[prop]icons`，`[type]string[] | function` 类型。要加载的图标列表或用于过滤图标的回调函数。
- `[prop]customise`，`[type]function` 类型。用于自定义图标的回调函数。

必须设置 `[prop]prefix` 或 `[prop]source` 中的至少一个。
如果两者都设置了，图标集将从 `[prop]source` 加载，但前缀会被设置为 `[prop]prefix` 的值。

### 来源

`[type]IconSetOptions` 的 `[prop]source` 属性可以是：
- 以 `[type]IconifyJSON` 格式加载的图标集路径。
- `[type]IconifyJSON` 格式的图标集数据。

### 图标

`[type]IconSetOptions` 的 `[prop]icons` 属性可用于过滤已加载图标集中的图标。

通过过滤未使用的图标，你可以提升解析速度，从而使构建过程更快。

### 自定义

`[type]IconSetOptions` 的 `[prop]customise` 属性可用于自定义图标。
例如，修改 `[prop]stroke-width`、更改带颜色图标中的特定颜色、修改动画图标的动画时长等。

回调函数包含两个参数：
- `[prop]content`，`[type]string` 类型。SVG 内容。
- `[prop]name`，`[type]string` 类型。图标名称。

回调函数应返回新的内容。如果图标未被修改，则应返回 `[prop]content` 属性传入的值。

## 示例

使用 `[prop]prefixes` 选项加载自定义图标集和自定义图标的示例：

```js
addIconSelectors({
    prefixes: [
        {
            // 更改 Tabler 图标中的描边宽度
            prefix: 'tabler',
            customise: (content) =>
                content.replaceAll('stroke-width="2"', 'stroke-width="1.5"'),
        },
        {
            // 更改 Twitter 表情符号中的颜色，同时重命名图标集
            
            // 通过设置 'prefix' 属性更改图标集前缀
            prefix: 'twemoji-red',
            
            // 解析 '@iconify-json/twemoji' 包中的图标集位置 
            // 下方注释的代码功能相同，但使用的是 '@iconify/json' 包
            source: require.resolve('@iconify-json/twemoji/icons.json'),
            // source: require.resolve('@iconify/json/json/twemoji.json'),
            
            // 仅过滤包含 'face' 的图标以提升插件性能
            icons: (name) => name.includes('face'),
            
            // 更改颜色
            customise: (content, name) => content.replaceAll('#ffcc4d', '#ff9667'),
        },
        {
            // 加载自定义图标集。可以使用 Iconify Tools 预先生成
            prefix: 'custom',
            source: 'data/custom.json',
            
            // 使用 Iconify Tools 图标集作为来源的示例。假设 customIconSet 是 IconSet 类的实例。 
            // source: customIconSet.export(),
        },
    ],
})
```
