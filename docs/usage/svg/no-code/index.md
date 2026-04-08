```yaml
title: 无需编写代码即可获取图标 SVG
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} icon sets'
  - code: '70 open source'
    value: '${counters.sets} open source'
functions:
  getIconsCSS: '/docs/libraries/utils/get-icons-css.md'
```

# 无需编写代码即可获取图标 SVG

无需编写任何代码，即可获取图标的 SVG。

有两种选择：

- 你可以从 Iconify 网站下载 SVG（非常简单）。
- 你可以使用 Iconify API 生成 SVG（可能过于复杂或效率较低）。

如果你更倾向于以编程方式生成 SVG，[请考虑使用 Iconify Utils](../utils/index.md)。

## 网站

你可以在以下网站上浏览所有可用图标，并复制代码或 SVG：

`include usage/options/websites`

找到你想要的图标，选中它，将 SVG 复制到剪贴板，然后粘贴到你的 HTML 中。

## API

如果你知道要使用的图标名称，可以从 Iconify API 下载 SVG。

Iconify API 是一项面向开发者的开源托管（或自托管）服务。公共 Iconify API 服务器托管了来自 70 多个开源图标集的 60,000 多个图标。

你可以通过访问如下 URL 从公共 API 获取图标：`[url]https://api.iconify.design/mdi-light/home.svg`。

将 `[icon]mdi-light` 替换为图标集前缀，将 `[icon]home` 替换为图标名称。

可选参数：

- `[url]?height=none` - 移除宽度和高度。
- `[url]?height=auto` - 将宽度和高度设置为与 `[prop]viewBox` 相同。
- `[url]?color=black` - 将 `[prop]currentColor` 更改为指定颜色，仅适用于单色图标。如果颜色包含 `[str]#`，请将其替换为 `[str]%23`（参见 URL 编码）。
- `[url]?box=1` - 添加与 `[prop]viewBox` 匹配的空矩形。将 SVG 导入某些软件（如 Sketch）时，需要此操作以在导入后保持图标尺寸。
- `[url]?download=1` - 强制浏览器下载文件。

示例：`[url]https://api.iconify.design/ri/account-box-line.svg?height=none&color=%23000&box=1`

操作流程：

- 从 API 获取 SVG。
- 下载并保存。
- 将其复制到剪贴板，粘贴到你的 HTML 中。

有关详细信息和更多参数，请参阅 [Iconify API 文档](/docs/api/svg.md)。
