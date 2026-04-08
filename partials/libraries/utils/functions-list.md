```yaml
title: Iconify Utils
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: './color.md'
  FullIconCustomisations: './icon-customisations.md'
  IconCustomisations: './icon-customisations.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  validateIconSet: './validate-icon-set.md'
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
  getIcons: './get-icons.md'
  getIconData: './get-icon-data.md'
  minifyIconSet: './minify-icon-set.md'
  expandIconSet: './expand-icon-set.md'
  convertIconSetInfo: './convert-info.md'
  parseIconSet: './parse-icon-set.md'
  parseIconSetAsync: './parse-icon-set.md'
  mergeIconData: './merge-icon-data.md'
  defaultIconProps: './default-icon-props.md'
  mergeCustomisations: './merge-customisations.md'
  toBoolean: './to-boolean.md'
  rotateFromString: './rotate-from-string.md'
  flipFromString: './flip-from-string.md'
  defaultIconCustomisations: './default-icon-customisations.md'
  iconToSVG: './icon-to-svg.md'
  iconToHTML: './icon-to-html.md'
  calculateSize: './calculate-size.md'
  replaceIDs: './replace-ids.md'
  matchIconName: './match-name.md'
  stringToIcon: './string-to-icon.md'
  validateIconName: './validate-icon.md'
  stringToColor: './string-to-color.md'
  compareColors: './compare-colors.md'
  colorToString: './color-to-string.md'
  getIconCSS: './get-icon-css.md'
  getIconsCSS: './get-icons-css.md'
  getIconsContentCSS: './get-icons-content-css.md'
  getIconContentCSS: './get-icon-content-css.md'
  cleanUpInnerHTML: './clean-up-inner-html.md'
  getSVGViewBox: './get-svg-viewbox.md'
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
  splitSVGDefs: './split-svg-defs.md'
  mergeDefsAndContent: './merge-defs-and-content.md'
  wrapSVGContent: './wrap-svg-content.md'
```

图标集以 `[type]IconifyJSON` 格式存储。用于处理图标集的函数：

- `[func]validateIconSet(data)` 验证图标集。如果你不确定源是否为有效的图标集，请运行此函数进行验证。它会将数据转换为正确的 `[type]IconifyJSON` 格式，并尝试修复错误。
- `[func]quicklyValidateIconSet(data)` 与上述函数类似，但仅执行基本验证。如果你不关心元数据是否无效、不想尝试修复图标集中的错误，或者希望减小打包体积，请使用此函数。
- `[func]getIcons(data, icons)` 从图标集中提取少量图标。可用于将图标集缩减为项目中实际使用的少数图标。
- `[func]getIconData(data, icon)` 从图标集中提取单个图标的数据。
- `[func]minifyIconSet(data)` 压缩图标集，移除冗余数据。用于减小文件大小。
- `[func]expandIconSet(data)` 与上述函数功能相反。
- `[func]convertIconSetInfo(data)` 将旧版图标集格式转换为正确的 `[type]IconifyInfo` 类型。
- `[func]parseIconSet(data, callback)` 解析图标集，为每个图标调用 `[attr]callback` 函数。可用于从图标集中提取所有图标。解析前请先验证图标集。
- `[func]parseIconSetAsync(data, callback)` 是 `[func]parseIconSet()` 的异步版本，该函数及其回调均为异步。

用于处理表示单个图标的 `[type]IconifyIcon` 格式的函数：

- `[func]mergeIconData(icon, alias)` 合并图标及其别名的数据。供从图标集中提取图标数据的函数使用。
- `[func]defaultIconProps` 包含 `[type]IconifyIcon` 对象可选属性的默认值。
- `[func]convertParsedSVG(data)` 可用于将 SVG 字符串转换为 `[type]IconifyIcon` 对象。

渲染图标时，可对其应用自定义设置。例如，更改尺寸、旋转或翻转图标。它们由 `[type]IconCustomisations` 类型表示。用于处理自定义设置的函数：

- `[func]mergeCustomisations(defaultIconCustomisations, custom)` 函数将对象转换为 `[type]FullIconCustomisations` 类型。它还会验证类型，因此可用于清理用户输入。
- `[func]defaultIconCustomisations` 从 `[file]lib/customisations/defaults` 导出，包含默认的自定义设置。
- `[func]toBoolean(name, value, defaultValue)` 将各种字符串转换为布尔值。供图标组件使用，以清理可能为布尔值或字符串的参数。
- `[func]rotateFromString(value)` 将各种图标旋转表示法（如 `[str]90deg` 或 `[str]25%`）转换为数字。
- `[func]flipFromString(customisations, value)` 将翻转字符串（如 `[attr]flip="horizontal,vertical"`）应用到自定义设置中。

用于渲染图标的函数：

- `[func]iconToSVG(icon, customisations)` 生成渲染 SVG 所需的数据。它不会生成完整的 SVG，仅生成内容以及需添加到 SVG 元素的属性列表，便于在自定义组件中使用。
- `[func]iconToHTML(body, attributes)` 将 `[func]iconToSVG()` 的结果转换为 SVG 字符串。
- `[func]calculateSize(size, ratio)` 计算图标尺寸。在使用 `[func]iconToSVG()` 构建图标时使用。
- `[func]replaceIDs(content)` 将 SVG 中的 ID 替换为唯一 ID。遮罩等元素会使用 ID，且它们必须唯一，因此在同一页面上显示多个使用相同 ID 的图标会导致混乱。此函数可避免该问题。
- `[func]getIconCSS(icon)` 生成将图标用作背景图像或遮罩图像的样式表。
- `[func]getIconsCSS(iconSet, names)` 生成将同一图标集中的多个图标用作背景图像或遮罩图像的样式表。
- `[func]getIconContentCSS(icon, options)` 生成将图标用作伪元素内容的样式表。
- `[func]getIconsContentCSS(iconSet, names, options)` 生成将同一图标集中的多个图标用作伪元素内容的样式表。
- `[func]cleanUpInnerHTML()` 允许在严格环境中使用 `[prop]innerHTML` 将 SVG 分配给现有的 DOM 元素。

用于解析图标的函数：

- `[func]parseSVGContent(content)` 解析 SVG 字符串，提取 `[tag]svg` 属性和主体内容。
- `[func]buildParsedSVG(data)` 将 `[func]parseSVGContent(content)` 的结果转换为与 `[func]iconToSVG()` 生成的相同数据。
- `[func]convertParsedSVG(data)` 将 `[func]parseSVGContent(content)` 的结果转换为 `[type]IconifyIcon` 对象。
- `[func]splitSVGDefs(content)` 将图标内容拆分为定义部分和其他数据。供 `[func]wrapSVGContent()` 使用。
- `[func]mergeDefsAndContent(defs, content)` 将定义和内容重新合并为一个字符串。
- `[func]wrapSVGContent(body, start, end)` 包装图标内容，但不包装定义部分。供各种函数将内容包装在组中使用。
- `[func]getSVGViewBox(value)` 解析并验证 `[prop]viewBox` 属性，成功时返回数字数组，失败时返回 `[type]undefined`。

用于处理图标名称的函数：

- `[func]matchIconName` 常量是一个正则表达式，用于测试图标名称的各个部分。
- `[func]stringToIcon(value)` 将图标名称（如 `[str]mdi-light:home`）转换为 `[type]IconifyIconName` 对象，并可选择性地对其进行验证。
- `[func]validateIconName(icon)` 验证 `[type]IconifyIconName` 对象。

用于处理颜色的函数：

- `[func]stringToColor(value)` 将字符串转换为 `[type]Color` 对象，出错时返回 `null`。可用于验证用户输入。支持颜色关键字、十六进制颜色、RGB、HSL、LAB 和 LCH 颜色。不支持变量，因为此函数旨在解析 SVG，而 SVG 不应引用任何外部变量。
- `[func]compareColors(color1, color2)` 比较颜色。必要时还会将 RGB 转换为 HSL。
- `[func]colorToString(color)` 将 `[type]Color` 对象转换为字符串。与 `[func]stringToColor()` 结合使用，可用于验证和清理用户输入。
