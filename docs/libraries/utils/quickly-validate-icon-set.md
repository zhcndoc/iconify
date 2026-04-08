```yaml
title: Iconify Utils 中的 quicklyValidateIconSet()
types:
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  validateIconSet: './validate-icon-set.md'
```

# quicklyValidateIconSet()

此函数属于 [Iconify Utils 包](./index.md)。

函数 `[func]quicklyValidateIconSet()` 用于验证图标集，并返回清理后的 `[type]IconifyJSON` 对象。

如果提供的数据存在错误，它将返回 `null`。

此函数不会检查元数据。

## 用法

该函数包含以下参数：

- `[prop]data`，`[type]object`。需要验证的数据。

函数返回值：

- 成功时返回 `[type]IconifyJSON` 对象（与传入的第一个参数相同）。
- 出错时返回 `[type]null`。

## 示例

```yaml
src: libraries/utils/quickly-validate.ts
title: 'usage.ts'
```

## 高级验证

此函数针对包体积和性能进行了优化，因此仅执行基本验证。

如果您想完全验证图标集，请改用 `[func]validateIconSet()`。
