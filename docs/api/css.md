```yaml
title: Generating CSS for icons
functions:
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
```

# 图标的 CSS

Iconify API 可以动态生成图标的 CSS，其中图标将用作背景图像或遮罩图像。

这允许使用简单的 `[tag]span` 标签渲染图标，而无需任何组件。

## 查询

生成 CSS 的 API URI 为 `[url]/{prefix}.css?icons={icons}`，其中：

- `[str]{prefix}` 是图标集前缀。要为来自多个图标集的图标生成 CSS，请为每个图标集发送单独的查询。
- `[str]{icons}` 是图标名称列表，以逗号分隔。

示例：

```yaml
hint: /openmoji.css?icons=axe,balance-scale
src: api/openmoji.css
```

```yaml
hint: /mdi.css?icons=account-box,account-cash,account,home
src: api/mdi.css
```

在 HTML 中使用图标很简单：使用带有 2 个类名的占位元素：图标集的类名和图标的类名：

```html
<span class="icon--openmoji icon--openmoji--axe"></span>
```

```html
<span class="icon--mdi icon--mdi--account"></span>
```

为什么需要 2 个类？这允许将通用样式拆分为单独的规则，减少重复，并更容易定位图标集中的所有图标。

如果您想使用 1 个简单的类来引用图标，可以使用 `[prop]selector` 和 `[prop]common` 选项。请参阅下面的示例。

### 选项

可选参数：

- `[prop]download`。如果设置为 `[str]true` 或 `[str]1`，则将 CSS 作为附件发送，强制浏览器下载文件。
- `[prop]iconSelector` 或 `[prop]selector`。图标的选择器，默认为 `[str].icon--{prefix}--{name}`。变量 `[str]{prefix}` 将被替换为图标集前缀，`[str]{name}` 将被替换为图标名称。
- `[prop]commonSelector` 或 `[prop]common`。图标的通用选择器，默认为 `[str].icon--{prefix}`。将其设置为空以禁用通用代码（请参阅下面的示例之一）。变量 `[str]{prefix}` 将被替换为图标集前缀。
- `[prop]overrideSelector` 或 `[prop]override`。混合 `[prop]iconSelector` 和 `[prop]commonSelector` 的选择器，用于生成覆盖通用样式的图标特定样式。见下文。默认值为 `[str].icon--{prefix}.icon--{prefix}--{name}`。
- `[prop]pseudoSelector` 或 `[prop]pseudo`，`[type]boolean`。如果图标的选择器是伪选择器（例如 `[str].icon--{prefix}--{name}::after`），请将其设置为 `true`。
- `[prop]varName` 或 `[prop]var`。用于图标的变量名称，对于单色图标默认为 `[str]svg`，对于带调色板的图标为 `null`。设置为 `null` 以禁用。
- `[prop]forceSquare` 或 `[prop]square`，`[type]boolean`。强制图标宽度为 `[num]1em`。
- `[prop]color`。设置单色图标的颜色。同时将图标渲染为背景图像。
- `[prop]mode`：`[str]mask` 或 `[str]background`。强制图标渲染为遮罩图像或背景图像。如果未设置，将根据图标内容检测模式：包含 `[prop]currentColor` 的图标将渲染为遮罩图像，其他图标渲染为背景图像。
- `[prop]format`。样式表格式化选项。与 Sass 中使用的选项匹配。支持的值：`[str]expanded`、`[str]compact`、`[str]compressed`。

其他可选参数与 [Iconify Utils](/docs/libraries/utils/index.md) 的 `[func]getIconsCSS()` 函数中的参数相同。

### 颜色与模式

图标有两种类型：

- 单色图标，使用 `[prop]currentColor` 作为颜色。
- 具有硬编码调色板的图标，其颜色无法更改。

您可以在 CSS 中使用这两种类型。

具有硬编码调色板的图标将渲染为背景图像：

`include common/icon-types-palette`

单色图标将渲染为遮罩图像，背景颜色设置为 `[prop]currentColor`：

`include common/icon-types-monotone`

使用 `[prop]currentColor` 作为背景颜色，可以通过更改文本颜色轻松更改图标颜色：

```html
<span class="icon--bi icon--bi--bell-fill" style="color: green"></span>
```

您可以通过添加 `[prop]mode` 参数来强制使用背景或遮罩模式：`[url]&mode=background` 或 `[url]&mode=mask`

您还可以使用 `[prop]color` 参数将单色图标转换为带调色板的图标：`[url]&color=green`。

#### CSS 变量

```yaml
include: libraries/utils/css-color
```

```html
<span class="icon--mdi icon--mdi--home" style="color: var(--icon-color)"></span>
```

### 更多示例

您可以使用各种可选参数自定义生成的样式表。

通过添加 `[prop]selector` 参数获取具有自定义选择器的单个图标的 CSS：

```yaml
hint: /openmoji.css?icons=axe&selector=.axe-icon
src: api/openmoji-axe.css
```

使用 `[prop]selector` 和 `[prop]selector` 参数获取带有伪选择器的单个图标的 CSS：

```yaml
hint: /material-symbols.css?icons=check-box-outline-rounded&selector=.checkbox-checked::after&pseudo=1
src: api/checkbox.css
```

与上述相同，但将图标颜色设置为绿色：

```yaml
hint: /material-symbols.css?icons=check-box-outline-rounded&selector=.checkbox-checked::after&pseudo=1&color=green
src: api/checkbox-color.css
```

带有伪选择器的多个图标的 CSS 需要多个参数。它需要至少使用 `[prop]icon` 和 `[prop]pseudo` 参数，可选地搭配 `[prop]common` 和 `[prop]override` 参数：

```yaml
hint: /line-md.css?icons=account-add,account-delete&selector=.icon--{prefix}--{name}::after&pseudo=1
src: api/line-md.css
```

```yaml
hint: /line-md.css?icons=account-add,account-delete&selector=.icon--{prefix}--{name}::after&common=.icon--{prefix}::after&override=.icon--{prefix}.icon--{prefix}--{name}::after&pseudo=1
src: api/line-md2.css
```

想要支持旧版浏览器？添加 `[url]&var=null`：

```yaml
hint: /openmoji.css?icons=axe,balance-scale&var=null
src: api/openmoji-novar.css
```

... 这可能会导致单色图标的内容重复：

```yaml
hint: /line-md.css?icons=account-add,account-delete&var=null
src: api/line-md-novar.css
```

有关更多示例，请参阅 [Iconify Utils](/docs/libraries/utils/index.md) 的 `[func]getIconsCSS()` 函数。
