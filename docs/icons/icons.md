```yaml
title: Split Icon Packages
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconifyInfo: '/docs/types/iconify-info.md'
functions:
  exportIconPackage: '/docs/libraries/tools/export/icon-package.md'
```

# Split icon packages

For developer's convenience, [full icon sets package](./all.md) was also available as smaller packages.

This documentation is for packages that contain many files, one per icon. These packages can be used if you need to import only few icons without parsing the whole icon set.

## Packages

Packages are published as `[npm]@iconify-icons/{prefix}`, where `[str]{prefix}` is icon set prefix.

Packages are automatically generated from [big icon sets package](./all.md) whenever it is updated.

## Contents

Each package contains one icon set, with separate files for each icon (`[str]{name}` is icon name).

Icon data in `[type]IconifyIcon` format looks like this:

```yaml
src: icons/sample.json
copy: false
```

You can import data for any icon using default import from file, like this:

```js
import mdiHome from '@iconify-icons/mdi/home';
```

Example of React component using icon from such package:

```yaml
src: icon-components/common/offline.jsx
```

## Info

Additionally, each package contains default export with information about icon set in `[type]IconifyInfo` format.

Usage:

```js
import mdiLightInfo from '@iconify-icons/mdi';

console.log('Icon set name:', mdiLightInfo.name);
```

## Creating packages

If you want to create a package for your icon set, see `[func]exportIconPackage()` of [Iconify Tools](/docs/libraries/tools/index.md).

## Icon sets list

If you need to get list of available open source icon sets, see [icon sets list package](./collections.md).
