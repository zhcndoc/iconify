```yaml
title: 渲染 SVG
```

# 渲染 SVG

Iconify API 可以动态生成 SVG，可用于 HTML 或 CSS 中。

## 查询

生成 SVG 的 API URI 为 `[url]/{prefix}/{name}.svg`，其中：

- `[str]{prefix}` 是图标集前缀。
- `[str]{name}` 是图标名称。

可选参数：

- `[prop]color`，`[type]string`。图标颜色。将 `[prop]currentColor` 替换为指定颜色，从而生成具有固定配色的图标。
- `[prop]width` 和 `[prop]height`，`[type]string | number`。图标尺寸。如果仅指定一个尺寸（例如 `[prop]height`），则另一个尺寸将自动按比例设置以匹配它。
- `[prop]flip`，`[type]string`。翻转图标。
- `[prop]rotate`，`[type]string | number`。将图标旋转 90、180 或 270 度。
- `[prop]download`，`[type]boolean`。强制浏览器下载文件。
- `[prop]box`，`[type]boolean`。向 SVG 添加一个与 `[attr]viewBox` 匹配的空矩形。

示例：

```html
<img src="https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg" />
```

```css
/* 具有固定配色的 SVG 作为伪元素的内容 */
.test:after {
	content: url('https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg?height=16');
}

/* 具有固定配色的 SVG 作为背景图像 */
.test-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-image: url('https://api.iconify.design/fluent-emoji-flat/alarm-clock.svg');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}

/* 单色 SVG 作为遮罩，使用 currentColor 作为颜色 */
.test-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
	mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	-webkit-mask-size: 100% 100%;
	mask-size: 100% 100%;
}
```

有关在 CSS 中使用图标的各种方法，请参阅[如何在 CSS 中使用图标](../usage/css/index.md)。

### 颜色

将 SVG 作为外部资源使用的一个缺点是它无法从父元素继承颜色。浏览器将使用黑色代替 `[key]currentColor`。

解决此问题有两种方法：

- 在 CSS 中将单色图像用作 `[prop]mask` 而不是 `[prop]background`。
- 使用 `[prop]color` 属性指定颜色，将图像颜色从 `[prop]currentColor` 更改为固定颜色。

```css
.test:after {
	content: url('https://api.iconify.design/bi/bell-fill.svg?height=16&color=%23ba3329');
}
```

这仅适用于单色图标。具有固定配色的图标不需要 `[attr]color` 属性。

URI 不能包含 `[str]#`，因此如果您使用十六进制颜色（例如上面示例中使用的 `[str]#ba3329`），请确保将 `[str]#` 替换为 `[str]%23`：

```raw
https://api.iconify.design/bi/bell-fill.svg?color=%23ba3329
```

### 下载

参数 `[str]download=1` 会强制浏览器下载生成的 SVG。

显示图标的网站可以使用此功能来创建下载图标的链接。

### 边界框

参数 `[str]box=1` 会向生成的 SVG 添加一个与图标 `[attr]viewBox` 匹配的空矩形。

在将 SVG 导入忽略 `[attr]viewBox` 的各种 UI 设计工具时，需要用到此参数。这些工具（如 Sketch）会创建自动调整大小以适应内容的图层组。图标周围通常有空白像素，因此此类软件会裁剪这些空白像素，导致图标的图层组比实际图标小，从而在设计中更难对齐。

结合 `[prop]download` 参数，`[prop]box` 参数可用于下载 SVG，以便在不支持 `[attr]viewBox` 的软件中正确导入：`[url]/mdi/home.svg?box=1&download=1`。

### 尺寸

您还可以将尺寸作为参数指定给 SVG URL。如果您使用 `[prop]background-size` 或 `[prop]mask-size` 来调整背景或遮罩的大小（见上文示例），则此操作毫无意义，但在将 SVG 用作伪元素内容时是必需的。

要指定自定义尺寸，请添加 width 和/或 height 参数：

```raw
https://api.iconify.design/fa-solid/home.svg?width=24&height=24
```

不带单位的数字将被视为像素，因此 `[url]width=24` 和 `[url]width=24px` 是相同的。

如果仅指定一个尺寸属性，则另一个属性将根据图标的宽高比计算得出。例如，如果原始图标为 512x1024，设置 `[prop]?height=16` 将生成包含 `[attr]width="8"` 的 SVG。

有几个特殊关键字：

- `[str]auto` 将尺寸设置为 `[prop]viewBox` 中的值。
- `[str]unset` 或 `[str]none` 移除尺寸。

```raw
https://api.iconify.design/fa-solid/home.svg?height=unset
```

无需将 width 和 height 都设置为特殊关键字，一个参数就足够了（参见上文关于宽高比的说明）。

### 变换

您可以对 Iconify API 生成的 SVG 进行变换，与占位符元素的操作相同。

可能的变换：

- 旋转：90°、180°、270°
- 水平和垂直翻转

#### 旋转图标 {#rotate}

要旋转图标，请添加 `[prop]rotate` 参数。值可以是度数：`[attr]rotate=90deg`，也可以是数字：`[attr]rotate=1`（其中 1 = 90deg，2 = 180deg，3 = 270deg）。

所有变换均使用 SVG 变换完成，而非 CSS。

```yaml
src: common/css-rotation.html
title: 'HTML：'
css: common/css-rotation.scss
cssTitle: '样式表：'
demo: true
demoFirst: false
demoTitle: '演示：'
class: css-rotation css-demo-common
```

#### 翻转图标 {#flip}

要翻转图标，请添加 `[prop]flip` 参数。值为 `[str]horizontal` 或 `[str]vertical`。如果两者都需要，请使用 `[str]horizontal,vertical` 或将图标旋转 180 度。

所有变换均使用 SVG 变换完成，而非 CSS。

```yaml
src: common/css-flip.html
title: 'HTML：'
css: common/css-flip.scss
cssTitle: '样式表：'
demo: true
demoFirst: false
demoTitle: '演示：'
class: css-flip css-demo-common
```

您可以同时对图标应用旋转和翻转。图标会先翻转，然后再旋转。
