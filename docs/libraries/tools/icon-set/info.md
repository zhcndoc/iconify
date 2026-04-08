```yaml
title: Icon set information
types:
  IconSet: './index.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  export: './export.md'
```

# info

此属性属于 [Iconify Tools](../index.md) 中的 `[type]IconSet` 类。

`[prop]info` 属性以 `[type]IconifyInfo` 格式包含图标集信息。
它包括图标集名称、许可证、作者信息以及在显示图标集时相关的其他一些数据。

如果图标集没有信息块，则值为 `[type]null`。

您可以直接写入该属性以更新其值。

## 值

该值在使用 `[func]export()` 函数导出图标集时使用。

运行 `[func]export()` 函数时，`[prop]info` 属性中的图标数量会自动更新，
因此无需手动更新。
