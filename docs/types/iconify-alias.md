```yaml
title: Iconify Alias 类型
types:
  IconifyIcon: './iconify-icon.md'
  IconifyJSON: './iconify-json.md'
```

# IconifyAlias 类型

所有 Iconify 库都共享通用的对象结构。它们在 `[npm]@iconify/types` NPM 包中被定义为类型。

有关类型的描述和 TypeScript 的简要说明，请参阅[类型文档](./index.md)。

本文介绍 `[type]IconifyAlias` 类型。

## IconifyAlias 类型 {#iconify-alias}

`[type]IconifyAlias` 类型表示图标的别名。它用于 Iconify JSON 文件中。

什么是别名？别名是复用另一个图标属性的图标。

`[icon]arrow-left` 可以是启用了水平翻转的 `[icon]arrow-right` 的别名。
当现有形状可以通过简单变换复用时，无需创建新形状。

`[icon]battery-empty` 可以是没有任何更改的 `[icon]battery-0` 的别名。
这使得为同一个图标分配多个名称成为可能。

## 结构

`[type]IconifyAlias` 类型与 `[type]IconifyIcon` 类似。

属性：

- `[prop]parent`，`[type]string`。父图标的名称，必填。

其他属性来自 `[type]IconifyOptional` 类型，它们与 `[type]IconifyIcon` 类型共享。

`include types/iconify-optional`

### 父图标

父图标名称不应包含图标集前缀，且父图标必须存在于该图标集中。

如果使用另一个别名作为父级，请确保不存在循环依赖。
例如，如果 `[icon]arrow-left` 是 `[icon]arrow-right`（带水平翻转）的别名，
而 `[icon]arrow-right` 又是 `[icon]arrow-up`（旋转 90 度）的别名，
而 `[icon]arrow-up` 又是 `[icon]arrow-down`（带垂直翻转）的别名，
那么 `[icon]arrow-down` 就不能是 `[icon]arrow-left` 的别名，因为那样会形成循环。

为安全起见，请仅使用图标作为父级，不要使用其他别名。

## 合并图标和别名的属性

如果在合并属性时，图标别名具有父图标也拥有的属性，则适用以下规则：

- `[prop]hFlip` 和 `[prop]vFlip`。结果为 `[js]icon.hFlip !== alias.hFlip`。这意味着如果图标和别名都进行了水平翻转，则结果将不会翻转（水平翻转 + 水平翻转相互抵消）。如果只有一项进行了水平翻转，则结果将翻转（水平翻转 + 无翻转 = 水平翻转）。
- `[prop]rotate`。结果为旋转角度的总和。这意味着 90 度旋转 + 180 度旋转 = 270 度旋转。

对于所有其他属性，别名将覆盖父图标的值。

合并图标和别名的示例：

```yaml
src: types/icon-merge1.json
title: '图标：'
extra:
  - src: types/icon-merge1-alias.json
    title: '别名：'
  - src: types/icon-merge1-result.json
    title: '合并后：'
```

在上面的示例中，`[js]hFlip + hFlip = false`，`[js]!vFlip /* 默认值 */ + vFlip = true`，图标别名覆盖了其他属性。

## 示例

```yaml
src: types/alias-raw.json
title: 'IconifyAlias：'
extra:
  - src: types/alias-json.json
    title: 'IconifyJSON：'
  - src: types/alias-merged.json
    title: '合并后的 "arrow-right" 图标（作为 IconifyIcon）：'
```

```yaml
src: types/alias2-raw.json
title: 'IconifyAlias：'
extra:
  - src: types/alias2-json.json
    title: 'IconifyJSON：'
  - src: types/alias2-merged.json
    title: '合并后的 "home" 图标（作为 IconifyIcon）：'
```

```yaml
src: types/alias3-raw.json
title: 'IconifyAlias：'
extra:
  - src: types/alias3-json.json
    title: 'IconifyJSON：'
  - src: types/alias3-merged.json
    title: '合并后的 "house-32" 图标（作为 IconifyIcon）：'
```
