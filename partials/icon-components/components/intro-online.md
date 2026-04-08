```yaml
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
```

组件将自动从 Iconify API 获取 `[icon]mdi-light:home` 的数据并进行渲染。Iconify API 上提供了超过 60,000 个图标，涵盖各种免费和开源的图标集，包括所有最受欢迎的图标集。

Iconify API 的可用性是使 Iconify 组件区别于其他替代方案的最大特性。

API 按需发送图标数据。按需加载图标相比其他方法具有巨大优势：

- 图标数量可以是无限的，为您提供更多选择。您未使用的图标不会被加载。
- 没有无用数据。图标集通常包含数千个图标。组件不会打包所有图标，而是仅检索您使用的图标。
