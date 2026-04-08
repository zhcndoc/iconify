```yaml
title: Tailwind CSS 中 Iconify 的选择器
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  addIconSelectors: './index.md'
```

# Tailwind CSS 中 Iconify 的选择器

本文档介绍了用于更改 [func]addIconSelectors 插件选择器的选项。

## 选项

插件设置了几个选择器：
- 遮罩图像规则的选择器，默认值为 `[str].iconify`。
- 背景图像规则的选择器，默认值为 `[str].iconify-color`。
- 每个图标的选择器，默认值为 `[str].{prefix}--{name}`。

要渲染图标，你需要使用图标选择器（提供图标数据）以及背景或遮罩选择器（用于渲染该图标）。

你可以自定义所有这些选择器。

为什么你需要这样做？
- 为了使用具有不同设置的多个插件实例。
- 为了更改类名，因为它们与其他内容发生冲突。
- 为了在从其他插件或平台迁移后继续使用旧的类名。

## 遮罩与背景图像

遮罩和背景图像选择器必须与图标名称选择器一起用于每个图标。
这些选择器包含了将图标渲染为遮罩或背景图像所需的所有规则。

要自定义遮罩或背景图像选择器，请使用以下选项：
- `[prop]maskSelector`, `[type]string` - 遮罩图像选择器，默认值为 `[str].iconify`。
- `[prop]backgroundSelector`, `[type]string` - 背景图像选择器，默认值为 `[str].iconify-color`。

将值设置为空字符串即可禁用它。

为什么你需要禁用它？
如果类已经在其他地方设置好了（例如另一个插件实例），或者你没有使用背景或遮罩模式，这会很有用。

### 额外规则

你还可以通过使用 `[prop]extraBackgroundRules` 和 `[prop]extraMaskRules` 选项为背景和遮罩选择器添加 CSS 规则。

这可用于更改尺寸、显示模式或添加垂直对齐。

## 图标选择器

图标选择器让你可以控制图标名称。要更改它，请修改选项 `[prop]iconSelector`。

值必须包含：
- `[str]{prefix}`，它会被替换为每个图标的图标集前缀。
- `[str]{name}`，它会被替换为图标名称。

默认值为 `[str].{prefix}--{name}`。

## 示例

以下配置将语法更改为 UnoCSS 使用的语法：

但请注意，你仍然必须为每个图标保留背景或遮罩选择器，而 UnoCSS 并不使用这些选择器。

```js
addIconSelectors({
    iconSelector: '.i-{prefix}-{name}',
    // UnoCSS 默认使用 1.2 的缩放比例
    scale: 1.2
})
```

```html
<span class="iconify i-mdi-light-home"></span>
```

以下配置将创建具有不同选项的多个插件实例：

```js
plugins: [
    addIconSelectors(['mdi-light']),
    addIconSelectors({
        // 更改选择器以避免冲突
        maskSelector: '.icon',
        backgroundSelector: '.icon-color',
        // 禁用宽度和高度 
        scale: 0,
        // 不使用 'prefixes'，因为图标已在前一个实例中设置
        // 是的，你可以混合使用不同插件实例的选择器：一个实例的背景或遮罩，
        // 另一个实例的图标，但前提是 `varName` 选项相同（或未自定义）。
        // 由于下面示例中使用的图标完全相同，因此无需重新解析它们。
    }),
    addIconSelectors({
        // 将图标对齐到基线下方并设置固定大小
        maskSelector: '.material-icon',
        extraMaskRules: {
            'vertical-align': '-0.125em',
            'width': '24px',
            'height': '24px',
        },
        // 本演示不使用背景选择器 - 演示仅使用单色图标
        backgroundSelector: '',
    })
]
```

```html
<p>
  大小为 1em 的图标：
  <span class="iconify mdi-light--home"></span>
</p>
<p>
  无固定大小的图标（使用自定义宽/高）：
  <span class="icon mdi-light--home h-12 w-12"></span>
</p>
<p>
  底部对齐的 24px 图标：
  <span class="material-icon mdi-light--home"></span>
</p>
```
