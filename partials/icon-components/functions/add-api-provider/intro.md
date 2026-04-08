函数 `[func]addAPIProvider()` 用于添加 API 提供商。

请确保在从 API 提供商获取图标之前调用它，否则组件将无法获取图标。如果不确定代码的执行顺序，也可以在单独的脚本中加载组件之前，使用全局变量 `[var]IconifyProviders` 来设置 API 提供商的配置。有关详细信息，请参阅 [API 提供商文档](/docs/api/providers.md)。
