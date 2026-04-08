```yaml
title: 无需编写代码即可为图标生成 CSS
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} 个图标集'
  - code: '70 open source'
    value: '${counters.sets} 个开源'
functions:
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
```

# 无需编写代码即可为图标生成 CSS

借助 Iconify API，您可以在不编写任何代码的情况下为图标生成 CSS。

如果您更希望通过编程方式生成 CSS，[请考虑使用 Iconify Utils](../utils/index.md)。

## API

Iconify API 是一项面向开发者的开源托管（或可自托管）服务。公共 Iconify API 服务器托管了来自 70 多个开源图标集的超过 60,000 个图标。

公共 API 可通过 `[url]https://api.iconify.design` 访问。

除其他功能外，它还可以为图标生成 CSS。CSS 的查询格式为 `[url]/{prefix}.css?icons={icons}`，其中：

- `[str]{prefix}` 是图标集前缀。若要为来自多个图标集的图标生成 CSS，请为每个图标集分别发送查询请求。
- `[str]{icons}` 是图标名称列表，以逗号分隔。

## 使用方法

获取 CSS 非常简单：

- 在浏览器中，按照上述说明（见下方示例）使用正确的图标列表创建 Iconify API 的 URL。
- 选中所有生成的 CSS，将其复制到剪贴板，然后粘贴到 `[file].css` 文件中。

要在 HTML 中使用这些图标，请使用带有 2 个类名的 `[tag]span` 元素：图标集的类名和图标的类名。

```html
<span class="icon--mdi-light icon--mdi-light--alert-circle"></span>
```

类名存在一定的重复，因为图标集和图标都包含相同的前缀部分。您可以通过选项进行更改。请见下文。

## 示例

[/mdi-light.css?icons=alert-circle,circle,help-circle](https://api.iconify.design/mdi-light.css?icons=alert-circle,circle,help-circle):

```yaml
hint: /mdi-light.css?icons=alert-circle,circle,help-circle
src: api/mdi-light.css
```

[/openmoji.css?icons=axe,balance-scale](https://api.iconify.design/openmoji.css?icons=axe,balance-scale):

```yaml
hint: /openmoji.css?icons=axe,balance-scale
src: api/openmoji.css
```

[/mdi.css?icons=account-box,account-cash,account,home](https://api.iconify.design/mdi.css?icons=account-box,account-cash,account,home):

```yaml
hint: /mdi.css?icons=account-box,account-cash,account,home
src: api/mdi.css
```

## 选项

API 查询包含可选参数，您可以使用它们来获取不同的结果。

有关更多详细信息，请参阅 [API 查询文档](/docs/api/css.md)。
