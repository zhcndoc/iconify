```yaml
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
```

Iconify 为多个流行的 UI 框架提供了原生图标组件。

Iconify for React 就是其中之一。

又一个图标组件？与其他图标组件相比有什么优势？

- 一种语法即可使用来自 80 多个图标集的 60,000 多个图标。
- 渲染 SVG。许多组件仅渲染图标字体，效果往往不佳。Iconify 仅使用像素级精确的 SVG。
- 按需加载图标。无需将图标打包，组件会自动从 Iconify API 加载你使用的图标数据。

