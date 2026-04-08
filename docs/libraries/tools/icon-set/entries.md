```yaml
title: 图标集中的图标数据
types:
  IconSet: './index.md'
  IconSetIconEntry: './entries.md#type'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconCategory: './categories.md'
  CommonIconProps: './entries.md#common'
functions:
  setItem: './set-item.md'
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
  remove: './remove.md'
  rename: './rename.md'
  categories: './categories.md'
```

# entries

此属性是 [Iconify Tools](../index.md) 中 `[type]IconSet` 类的一部分。

属性 `[prop]entries` 包含所有图标的数据。

请尽量避免直接访问 `[prop]entries`，建议改用以下函数：

- `[func]remove(name)` 用于移除图标。
- `[func]rename(oldName, newName)` 用于重命名图标。
- `[func]setIcon(name, icon)` 用于添加/更新图标，使用 `[type]IconifyIcon` 数据。
- `[func]setVariation(name, parent, props)` 用于为图标创建变体（带有自定义设置的别名）。
- `[func]setAlias(name, parent)` 用于为图标创建别名。

## 图标类型

`include libraries/tools/icon-set/icon-types`

## 结构

属性 `[prop]entries` 是一个简单的对象，其中键为图标名称，值为 `[type]IconSetIconEntry` 条目。

## IconSetIconEntry 类型 {#type}

类型 `[type]IconSetIconEntry` 包含 3 种类型：

- `[type]IconSetIcon` 表示图标（`[js]type = 'icon'`）。
- `[type]IconSetIconAlias` 表示别名（`[js]type = 'alias'`）。
- `[type]IconSetIconVariation` 表示图标变体（`[js]type = 'variation'`）。

要检查类型，请访问图标数据的 `[prop]type` 属性。

## 属性

以下属性仅存在于 `[type]IconSetIcon` 类型中：

- `[prop]body`，`[type]string` 类型。图标内容。

以下属性存在于 `[type]IconSetIcon` 和 `[type]IconSetIconVariation` 类型中：

- `[prop]props`，`[type]CommonIconProps` 类型。图标数据。见下文。
- `[prop]categories`，`[type]Set<IconCategory>` 类型。类别列表，参见 `[func]categories` 属性。

以下属性存在于 `[type]IconSetIconVariation` 和 `[type]IconSetIconAlias` 类型中：

- `[prop]parent`，`[type]string` 类型。父项。父项可以是任何类型，但通常是图标。

以下属性存在于所有类型中：

- `[prop]chars`，`[type]Set<string>` 类型。字符列表，参见 `[func]chars()` 函数。

### CommonIconProps 类型 {#common}

类型 `[type]CommonIconProps` 是 `[type]ExtendedIconifyIcon` 和 `[type]ExtendedIconifyAlias` 类型中共有属性的集合。它与 `[type]IconifyIcon` 类型几乎完全相同，但存在细微差异：

- 新增属性：`[prop]hidden`，`[type]boolean` 类型。
- 不存在 `[prop]body` 属性。该属性仅在 `[type]IconSetIcon` 类型中可用。
