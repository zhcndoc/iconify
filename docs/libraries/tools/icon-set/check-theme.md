```yaml
title: 检查图标集中的主题
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
  CommonIconProps: './entries.md#common'
functions:
  themes: './themes.md'
  prefixes: './themes.md'
  suffixes: './themes.md'
  export: './export.md'
```

# checkTheme()

此函数属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

函数 `[func]checkTheme()` 用于查找属于特定主题的所有图标。它可用于验证主题，以确保不存在空主题或缺失的主题。

## 用法

该函数包含以下参数：

- `[prop]prefix`，`[type]boolean` 类型。指定要检查的内容。如果为 `true`，函数将检查 `[func]prefixes`。如果为 `false`，函数将检查 `[func]suffixes`。

该函数返回一个包含以下属性的对象：

- `[prop]valid`，`[type]Record<string, string[]>` 类型。匹配主题的图标。键为主题名称（而非标题！），值为图标名称数组。
- `[prop]invalid`，`[type]string[]` 类型。不匹配任何主题的图标。

## 示例

```yaml
src: libraries/tools/icon-set/check-theme.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/check-theme1.json
    title: 'Results:'
  - src: libraries/tools/icon-set/check-theme2.json
```
