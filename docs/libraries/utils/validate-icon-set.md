```yaml
title: Iconify Utils 中的 validateIconSet()
types:
  IconifyJSON: '../../types/iconify-json.md'
functions:
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
```

# validateIconSet()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]validateIconSet()` 用于验证图标集，并返回清理后的 `[type]IconifyJSON` 对象。

如果提供的数据中存在错误：

- 如果错误是严重的，函数将抛出异常。
- 如果错误可以修复，函数将抛出异常，除非提供了 `[prop]fix` 选项。

此函数会检查所有内容，包括元数据。

## 用法

函数具有以下参数：

- `[prop]data`，`[type]object`。要验证的数据。
- `[prop]options`，`[type]object`。可选的配置对象。

函数返回：

- 成功时返回 `[type]IconifyJSON` 对象（与第一个参数传入的对象相同）。

如果函数遇到无法修复的错误，将抛出异常。

### 选项 {#options}

选项对象具有以下属性：

- `[prop]fix`，`[type]boolean`。如果设置为 `true`，函数将尽可能尝试修复错误，而不是抛出异常。默认值为 `false`。
- `[prop]prefix`，`[type]string`。图标集 `[prop]prefix` 属性的默认值。如果设置，函数将用你提供的值覆盖图标集中的 `[prop]prefix`。
- `[prop]provider`，`[type]string`。图标集 `[prop]provider` 属性的默认值。如果设置，函数将用你提供的值覆盖图标集中的 `[prop]provider`。

## 示例

```yaml
src: libraries/utils/validate.ts
title: 'usage.ts'
```

## 快速验证

此函数体积较大，因此不建议将其打包用于浏览器环境。

如果你想在浏览器中验证图标集（例如在图标组件中从 API 加载数据时），请改用 `[func]quicklyValidateIconSet()`。它更小、更快，因为它不检查元数据，也不尝试修复错误。
