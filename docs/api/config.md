```yaml
title: 配置自定义 Iconify API
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
```

# 配置自定义 Iconify API

本文介绍如何配置 [Iconify 图标组件](/docs/icon-components/index.md) 以使用自定义 API 服务器。

所有 Iconify 图标组件都可以连接到多个 Iconify API 服务器。这是通过 [API 提供程序](./providers.md) 实现的。

<namespaces-animation></namespaces-animation>

如果您正在托管 Iconify API 服务器，有两种方式可以使用您的图标：

- 用您的 API 替换公共 Iconify API。
- 通过使用 API 提供程序，将您的图标作为备用图标源。

就代码而言，这两种选择实际上几乎完全相同。
唯一的区别在于，在第一种选项中，提供程序 ID 是空字符串 `[str]""`，
因此您是在覆盖现有配置，而不是添加新配置。

您的用户可以随心所欲：覆盖默认 API 提供程序或添加新的 API 提供程序。
他们可以使用任何想要的提供程序 ID，只要他们在图标名称中使用相同的提供程序 ID 即可。

## 示例

例如，您已在 `[url]https://iconify.myproject.tld` 设置了您的 Iconify API 服务器。

您托管的其中一个图标集的前缀为 `[icon]material-icons`，其中包含图标 `[icon]home`。

您的用户该如何配置它？

### 覆盖默认 API

用户可以按如下方式覆盖默认 API 提供程序：

```js
import { addAPIProvider } from '@iconify/react';

addAPIProvider('', {
	resources: ['https://iconify.myproject.tld'],
});
```

然后在组件中按如下方式使用您的图标：

```js
import React from 'react';
import { Icon } from '@iconify/react';

function renderHomeIcon() {
	return <Icon icon="material-icons:home" />;
}
```

### 使用自定义 ID

用户也可以为您的 API 设置任意 ID：

```js
import { addAPIProvider } from '@iconify/react';

addAPIProvider('awesome-icons', {
	resources: ['https://iconify.myproject.tld'],
});
```

然后在组件中按如下方式使用您的图标：

```js
import React from 'react';
import { Icon } from '@iconify/react';

function renderHomeIcon() {
	return <Icon icon="@awesome-icons:material-icons:home" />;
}
```

无论用户选择什么，都由他们自己决定。API 服务器不知道用户在图标名称中使用了什么 ID，也无法更改它。

因此，一个用户可以覆盖公共 Iconify API 配置，另一个用户可以将 ID 设置为 `[icon]awesome-icons`，再一个用户可以将 ID 设置为 `[icon]more-icons`，依此类推。

### 使用 IconifyProviders

用户可以使用全局变量 `[var]IconifyProviders` 来设置配置，而不是使用 `[func]addAPIProvider()`。

```html
<script>
	// 定义全局变量
	IconifyProviders = {
		// 用于覆盖公共 API
		'': {
			resources: ['https://iconify.myproject.tld'],
		},

		// 用于创建备用 API 提供程序
		// 'awesome-icons': {
		// 	resources: ['https://iconify.myproject.tld'],
		// },
	};
</script>
<script src="/assets/bundle.min.js"></script>
```

此示例假设 `[url]/assets/bundle.min.js` 是一个包含所有使用图标的组件以及 Iconify 组件的打包文件。

SVG 框架的类似示例：

```html
<head>
	<script>
		// 定义全局变量
		IconifyProviders = {
			// 用于覆盖公共 API
			// '': {
			// 	resources: ['https://iconify.myproject.tld'],
			// },

			// 用于创建备用 API 提供程序
			'awesome-icons': {
				resources: ['https://iconify.myproject.tld'],
			},
		};
	</script>
	<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
</head>
<body>
	<span class="iconify" data-icon="@awesome-icons:material-icons:home"></span>
</body>
```

有关 API 提供程序的更多信息，请参阅 [API 提供程序文档](./providers.md)。
