许多图标是正方形的。对于此类图标，如果您设置了其中一个尺寸，另一个尺寸将具有相同的值。

然而，也有许多图标并非正方形。例如，从图标字体和 Font Awesome 导入的图标。

以下是 `[icon]fa-regular:address-book` 的数据：

```yaml
src: common/fa-address-book.json
hint: 图标尺寸为 448 x 512
```

如果您不设置任何尺寸，`[prop]height` 将被设置为 `[str]1em`，而 `[prop]width` 将被设置为 `[num]448 / 512` = `[str]0.875em`。但是，小数点后超过两位的数值会进行四舍五入，因此实际的 `[prop]width` 将为 `[str]0.88em`：

```html
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-hidden="true"
	focusable="false"
	role="img"
	class="iconify iconify--fa-regular"
	width="0.88em"
	height="1em"
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 448 512"
>
	<path d="..." fill="currentColor"></path>
</svg>
```

如果您将 `[prop]width` 设置为 `[num]56`，但不设置 `[prop]height`，则 `[prop]height` 将被设置为 `[num]56 * 512 / 448` = `[num]64`：

```html
<svg width="56" height="64" ...>...</svg>
```

如果您同时设置这两个值：将 `[prop]width` 设置为 `[num]56`，将 `[prop]height` 设置为 `[num]128`，则数值将按您设置的那样生效（另请参阅下方的 `[str]Alignment` 部分）：

```html
<svg width="56" height="128" ...>...</svg>
```
