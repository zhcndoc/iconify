```yaml
title: IconSet Functions
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyInfo: '/docs/types/iconify-info.md'
  FullIconifyIcon: '/docs/libraries/utils/full-iconify-icon.md'
  Color: '/docs/libraries/utils/color.md'
  FullIconCustomisations: '/docs/libraries/utils/icon-customisations.md'
  IconCustomisations: '/docs/libraries/utils/icon-customisations.md'
  SVG: '../svg/index.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
functions:
  list: './list.md'
  forEach: './for-each.md'
  exists: './exists.md'
  count: './count.md'
  remove: './remove.md'
  rename: './rename.md'
  setItem: './set-item.md'
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
  entries: './entries.md'
  prefix: './prefix.md'
  resolve: './resolve.md'
  load: './load.md'
  export: './export.md'
  toSVG: './to-svg.md'
  fromSVG: './from-svg.md'
  toString: './to-string.md'
  info: './info.md'
  chars: './chars.md'
  toggleCharacter: './toggle-character.md'
  listCategory: './list-category.md'
  toggleCategory: './toggle-category.md'
  categories: './categories.md'
  checkTheme: './check-theme.md'
  suffixes: './themes.md'
  prefixes: './themes.md'
  validateIconSet: '../../utils/validate-icon-set.md'
  mergeIconSets: './merge.md'
  getTree: './get-tree.md'
```

处理图标：

- `[func]list()` 列出所有图标。
- `[func]forEach()` 为所有图标运行回调函数。支持异步回调。
- `[func]exists(name)` 检查图标是否存在。
- `[func]count()` 统计图标集中的图标数量。
- `[func]remove(name)` 移除图标。
- `[func]rename(oldName, newName)` 重命名图标。
- `[func]setItem(name, item)` 在 `[func]entries` 属性中添加/更新条目。
- `[func]setIcon(name, icon)` 使用 `[type]IconifyIcon` 数据添加/更新图标。
- `[func]setVariation(name, parent, props)` 为图标创建变体（带自定义设置的别名）。
- `[func]setAlias(name, parent)` 为图标创建别名。
- `[func]getTree()` 返回每个图标的父图标列表，如果图标无效则返回 `null`。
- `[func]entries` 属性包含所有图标和别名的数据。你可以直接访问它，但大多数更改可以使用上述列出的函数完成。

导入/导出图标集的函数：

- `[func]prefix` 属性包含图标集前缀，在导出图标集时使用。要更改前缀，直接写入该属性即可。
- `[func]resolve(name)` 返回图标的 `[type]ResolvedIconifyIcon` 对象，失败时返回 `null`。
- `[func]load(data)` 从 `[type]IconifyJSON` 类型加载数据。这与创建新的 `[type]IconSet` 实例相同，但它会修改当前实例而不是创建新实例。
- `[func]export()` 将图标集导出为 `[type]IconifyJSON`。
- `[func]toSVG(name)` 返回图标的 `[type]SVG` 实例，失败时返回 `null`。
- `[func]fromSVG(name, svg)` 从 `[type]SVG` 实例添加/更新图标。
- `[func]toString(name)` 将图标导出为 SVG 字符串，失败时返回 `null`。

处理元数据的函数：

- `[func]info` 属性包含 `[type]IconifyInfo` 类型的图标集信息（如果信息不可用则为 `[type]null`）。要更新信息，直接写入该属性即可。
- `[func]chars()` 返回字符映射，其中键为字符（十六进制代码），值为图标名称。
- `[func]toggleCharacter(name, char, add)` 为图标添加或移除字符。
- `[func]listCategory(category)` 列出类别中的所有图标，不包括别名和隐藏的图标。
- `[func]toggleCategory(name, category, add)` 为图标添加或移除类别。
- `[func]categories` 属性包含类别的数据。如果需要，你可以直接访问它。
- `[func]checkTheme()` 检查前缀或后缀，返回属于每个主题的图标列表以及不属于任何主题的图标列表。
- `[func]suffixes` 和 `[func]prefixes` 属性包含前缀和后缀。直接访问这些属性以更新主题。

其他：

- `[func]mergeIconSets()` 合并两个 `[type]IconSet` 实例，并返回新实例。此函数旨在用于更新图标集。
