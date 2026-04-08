```yaml
title: Iconify API 提供商
types:
  APIConfig: ./providers.md#api-config
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
  - code: '*$/;' # 避免正则表达式被自动格式化
    value: '*$/'
  - code: 'https://github.com/iconify/iconify/issues'
    value: '${links.issues}'
  - code: 'https://github.com/iconify/iconify/sponsors'
    value: '${links.sponsor}'
```

# Iconify API 提供商

如果你正在发布图标，你可以托管自己的 Iconify API 服务器，其中仅包含你的图标，并向其他用户提供访问权限。Iconify 图标组件可以从多个独立的 Iconify API 服务器检索图标数据。

它是如何实现的？

<namespaces-animation></namespaces-animation>

## 图标名称中的提供商

Iconify 图标组件中的图标名称包含 3 个部分：

<namespaces-name></namespaces-name>

所有部分均由 `[str]:` 分隔，提供商是可选的，如果为空则可以省略。

示例：

- `[icon]@my-icons:line-24:home`：图标从提供商 `[str]my-icons` 检索。该提供商的图标名称为 `[icon]line-24:home`。
- `[icon]mdi-light:home`：图标没有提供商，因此提供商为空。空值用于公共 Iconify API。

提供商的命名规则与前缀和名称相同，但例外情况是它可以为空：

```txt
/^[a-z0-9]+(-[a-z0-9]+)*$/;
```

该正则表达式表示名称必须以字母或数字开头，后跟字母、数字和连字符的组合。不允许使用其他字符。

## 添加 API 提供商

所有图标组件都具有 `[func]addAPIProvider()` 函数。对于 SVG 框架，它是 `[func]Iconify.addAPIProvider()`；对于其他组件，你需要从组件中导入它。

[React 组件](../icon-components/react/index.md) 示例：

```js
import { addAPIProvider } from '@iconify/react';

addAPIProvider('local', {
	// 主机名数组。
	// 多个主机提供冗余：如果一个主机宕机，组件将查询另一个主机。
	resources: ['http://localhost:3000'],
});
```

该函数有 2 个参数：

- provider，`[type]string`。提供商名称。你也可以使用空字符串来覆盖默认提供商的配置。
- config，`[type]APIConfig`。API 配置。

更多详细信息请参阅 [SVG 框架的 addAPIProvider 文档](../icon-components/svg-framework/add-api-provider.md)。

### IconifyProviders

有时使用 `[func]addAPIProvider()` 函数并不简单。例如，如果你使用的 SVG 框架被放置在文件末尾的 `[tag]</body>` 之前。

有一个替代方案：在加载 SVG 框架之前，将 API 提供商分配给全局变量 `[var]IconifyProviders`。当 SVG 框架加载时，它会检查该变量是否存在，并自动从中导入所有提供商。

格式很简单：它是一个对象，其中键是提供商名称，值是配置。示例（与上面的示例功能相同）：

```html
<script>
	IconifyProviders = {
		local: {
			resources: ['http://localhost:3000'],
		},
	};
</script>
<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
```

组件也支持此功能，但组件通常会被打包，因此你应该能够使用 `[func]addAPIProvider()` 而不是污染全局变量。

## 使用 API 提供商

添加 API 提供商配置（只需一次简单的函数调用）后，你就可以使用该 API 提供商的图标。

你所要做的就是在图标名称中添加提供商。图标名称中的提供商必须与 `[func]addAPIProvider()` 的第一个参数匹配：

```html
<span class="iconify" data-icon="@icons8:ios-glyphs:color-dropper"></span>
```

```yaml
src: icon-components/common/add-api-provider.jsx
```

## 身份验证

目前 Iconify 不提供身份验证选项。

如果你想使用 API 提供商功能来托管高级图标集或限制访问，你应该在 API 和客户端中添加自己的身份验证逻辑。由于内部代码缺乏文档，这样做可能会有些棘手。如果你需要任何帮助，请[在 Iconify GitHub 仓库中提交 issue](https://github.com/iconify/iconify/issues)。

它已被列入 Iconify API 软件高级版的路线图中，该版本将使托管高级图标集变得非常容易。然而，由于缺乏开发资源，该功能距离实现还很遥远。你可以通过[在 GitHub 上赞助 Iconify](https://github.com/iconify/iconify/sponsors)（点击“Sponsor”按钮）来提供帮助。

## API 配置

传递给 `[func]addAPIProvider()` 的 `[type]APIConfig` 类型是一个对象。

属性：

- `[prop]resources`，`[type]string[]`。主机名列表，必填。必须以 `[str]https://` 或 `[str]http://` 开头，不应包含路径。
- `[prop]path`，`[type]string`。根目录路径。默认值为 `[str]/`。
- `[prop]rotate`，`[type]number`。切换到下一个主机之前的超时时间，单位为毫秒。默认值为 `[num]750`。
- `[prop]timeout`，`[type]number`。API 查询被视为失败之前的超时时间，单位为毫秒。默认值为 `[num]5000`。

示例：

```js
import { addAPIProvider } from '@iconify/svelte';

// 使用托管在 'https://iconify.my-project.com' 的 Iconify API 覆盖默认 API 提供商
addAPIProvider('', {
	resources: ['https://iconify.my-project.com'],
});
```

```html
<script>
	// 定义全局变量
	IconifyProviders = {
		// 空前缀：覆盖默认 API 提供商配置
		'': {
			// 优先使用自定义 API，将 Iconify 公共 API 作为备用
			resources: [
				'https://iconify.my-project.com',
				'https://api.iconify.design',
			],
			// 切换 API 主机前等待 1 秒
			rotate: 1000,
		},
	};
</script>
<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
```

## 提供商名称

提供商名称特定于你的代码。它仅用于将图标与 API 配置关联起来。实际的 API 服务器对你如何称呼提供商没有影响。

这意味着你可以将其更改为任何你想要的名称。请确保在你的所有代码中使用相同的提供商 ID。
