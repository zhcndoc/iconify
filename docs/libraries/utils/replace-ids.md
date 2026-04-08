```yaml
title: Iconify Utils 中的 replaceIDs()
functions:
  iconToSVG: './icon-to-svg.md'
```

# replaceIDs()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]replaceIDs()` 用于将图标内容中的 ID 替换为随机生成的字符串。

所有图标组件在渲染每个图标时都会使用此函数。

## 为什么需要它？ {#explanation}

ID 用于图标元素中，例如可复用的路径、遮罩、动画。它们应该是唯一的。

当你从图像编辑器导出 SVG 时，编辑器通常会根据图层名称生成 ID，因此如果图层名为 `[str]Mask`，形状的 ID 很可能就是 `[str]mask`。图标优化工具（如 SVGO）默认会缩短 ID，因此图标最终会带有类似 `[str]a` 的 ID。

当图标作为外部资源链接时，这不是问题。但是，当图标嵌入到文档中时，来自不同图标的多个元素具有相同的 ID 可能会并且确实会导致混乱。即使在不更改 ID 的情况下在文档的多个位置使用同一个图标，也可能导致错误。

这就是为什么在嵌入图标时，确保每个图标中那些在其他图标中不存在的元素拥有不同的 ID 非常重要。

## 用法

该函数具有以下参数：

- `[prop]content`，`[type]string`。图标内容。
- `[prop]prefix`，`[type]string | function`。生成 ID 的可选前缀。如果你希望自定义 ID 以降低其随机性，请使用此选项。

函数返回替换了 ID 的内容。

在第一个参数中，你可以传递由 `[func]iconToSVG()` 生成的数据的 `[prop]body` 属性，也可以传递完整的 `[tag]svg`。

## 示例

```yaml
src: libraries/utils/replace-ids.ts
title: 'example.ts'
extra:
  - src: libraries/utils/replace-ids.svg
    title: '结果：'
```

## 前缀

对于第二个参数，你可以使用字符串，它将作为前缀。

如果在上面的示例中，将以下代码：

```ts
const svg = replaceIDs(`<svg ${svgAttributesStr}>${renderData.body}</svg>`);
```

替换为：

```ts
const svg = replaceIDs(
	`<svg ${svgAttributesStr}>${renderData.body}</svg>`,
	'my-prefix-'
);
```

结果将包含类似以下内容：

```html
<svg ...>
	<linearGradient id="my-prefix-0" x1="4.416" ...>...</linearGradient>
	<path ... fill="url(#my-prefix-0)" />
</svg>
```

图标将使用自定义前缀并在其后添加一个数字。计数器不会重置，因此每个图标将拥有不同的 ID。

## 回调函数

你也可以为第二个参数使用回调函数。回调函数接受旧 ID 作为参数，并应返回新 ID：

```ts
let counter = 0;
const svg = replaceIDs(
	`<svg ${svgAttributesStr}>${renderData.body}</svg>`,
	() => {
		return 'my-prefix-' + counter++;
	}
);
```

结果将与上面使用前缀字符串的示例完全相同。

另一个示例：

```ts
let counter = 0;
const svg = replaceIDs(
	`<svg ${svgAttributesStr}>${renderData.body}</svg>`,
	(id: string) => {
		switch (id) {
			case 'a':
				// 将 id="a" 替换为 id="b"
				return 'b';

			default:
				// 对其他 ID 使用 'whatever-' 前缀
				return 'whatever-' + counter++;
		}
	}
);
```

## 注意事项

每个图标可以包含任意数量的带有 ID 的元素。如果你使用回调函数生成新 ID，请确保回调函数在每次调用时返回不同的值。
