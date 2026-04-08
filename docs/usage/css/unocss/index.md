```yaml
title: UnoCSS 中的 Iconify
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# 在 UnoCSS 中使用图标

如果你正在使用 [UnoCSS](https://github.com/unocss/unocss)，只需极少的代码即可轻松使用 [超过 60,000 个开源图标](/docs/icons/icon-data.md) 以及自定义图标。

除了其他功能外，UnoCSS 还提供了 `[npm]@unocss/preset-icons` 包，用于动态生成图标。它使用了 [来自 Iconify 的图标数据](/docs/icons/icon-data.md)。

## 使用方法

要在 UnoCSS 中使用图标，请将 `[npm]@unocss/preset-icons` 预设添加到配置中：

```js
import presetIcons from '@unocss/preset-icons';

UnoCSS({
	presets: [
		presetIcons({
			/* 选项 */
		}),
		// ...其他预设
	],
});
```

在你的代码中，添加具有以下类名的元素：`[str]i-` + 图标集前缀 + `[str]-` + 图标名称。

示例：

```html
<span class="i-carbon-logo-github"></span>
<span class="i-mdi-light-home"></span>
```

就是这么简单。

更多信息，请参阅 [preset-icons 包中的 README 文件](https://github.com/unocss/unocss/tree/main/packages/preset-icons/)。

## 图标尺寸

请注意，默认情况下，UnoCSS 会将图标缩放至 `[num]1.2em`。

你可以通过修改 `[prop]scale` 选项来更改此设置。

如果你想分别更改 `[prop]width` 和 `[prop]height`，或者将图标设为正方形，可以使用 `[prop]customize` 选项。请见下文。 

## 自定义图标

你可以将 UnoCSS 与自定义图标结合使用。在构建过程中，你可以使用 [Iconify Tools](/docs/libraries/tools/index.md) 导入、清理和优化图标。

请参阅 [Iconify Tools 包中的演示](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss)。配置位于 `[file]unocss.config.ts` 中。

该配置文件中使用的函数已在本文档的 [Iconify Tools](/docs/libraries/tools/index.md) 部分中进行了说明。 

## 定制图标

你可以使用 `[prop]customize` 选项来定制图标。

`[prop]customize` 选项是 `[prop]customizations` 选项的一部分，它是一个包含 3 个参数的函数：
- `[prop]customisations`，可用于翻转或旋转图标。
- `[prop]data`，类型为 `[type]IconifyIcon`，包含图标数据。
- `[prop]name`，类型为 `[type]string`，包含格式为 `[str]prefix:name` 的图标名称。

第一个参数是遗留选项，实际上用处不大。

图标数据是一个可变对象，你可以修改它来定制图标。
你可以更改具有硬编码调色板的图标颜色、透明度、动画计时，添加额外的形状等等……
你还可以通过调整 `[prop]width`、`[prop]height`、`[prop]left` 和 `[prop]top` 属性来调整图标大小或添加内边距。

图标数据格式请参阅 [IconifyIcon 类型](/docs/types/iconify-icon.md)。

图标名称让你知道正在定制哪个图标。

### 示例

将所有图标设为正方形：

```js
presetIcons({
    customizations: {
        customize: (defaultCustomizations, data, name) => {
            // 将图标设为正方形
            const width = data.width ?? 16;
            const height = data.height ?? 16;
            if (height > width) {
              // 设置宽度以匹配高度
              data.width = height;
              // 通过更改 viewBox 的左侧位置使图标水平居中
              data.left = (data.left ?? 0) - (height - width) / 2;
            }
            
            return defaultCustomizations
        },
    }
})
```

更改颜色：

```js
presetIcons({
    customizations: {
        customize: (defaultCustomizations, data, name) => {
            if (name === 'twemoji:blue-square') {
                // 将蓝色方块变为红色方块
                data.body = data.body.replaceAll('#55ACEE', '#e83933')
            }
            
            return defaultCustomizations
        },
    }
})
```

如果某些功能未正常工作，别忘了你始终可以使用 `[js]console.log(data)` 来查看图标数据。
