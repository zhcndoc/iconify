```yaml
title: Iconify for Sketch
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '60,000'
    value: '${counters.icons}'
  - code: '70+'
    value: '${counters.sets}+'
```

# Iconify for Sketch

想在设计中添加图标吗？

Iconify for Sketch 能帮您轻松搞定。一个插件即可提供来自 70 多个图标集的 60,000 多个图标。

使用 Sketch 插件，您可以：

- 浏览图标集。
- 搜索图标集。
- 将任意图标作为矢量形状导入 Sketch 文档。

它完全免费！与其他提供大量图标但使用 SVG 需要付费的插件不同，Iconify 始终将图标作为 SVG 导入。Iconify 项目是开源的，仅提供开源图标集。

## 安装

前往[插件发布页面](https://github.com/iconify/iconify-sketch/releases)，下载最新文件，解压后在 Finder 中打开 `[file]iconify.sketchplugin`。Finder 应该会启动 Sketch 并自动安装该插件。

如果插件安装失败，请将 `[file]iconify.sketchplugin` 复制到 `[file]~/Library/Application Support/com.bohemiancoding.sketch3/Plugins/`。

## 使用方法

在 Sketch 菜单中选择 `[str]Plug-ins`，然后选择 `[str]Iconify`，或按下 Ctrl+Shift+I。

浏览或搜索图标，选择任意图标，点击 `[str]Import` 按钮。插件会将图标导入您当前的项目中。

## 截图

导入图标：

![Iconify for Sketch: 页脚](/assets/images/plugins/sketch_footer.png)

海量 `[str]home` 图标供您选择：

![Iconify for Sketch: 搜索结果](/assets/images/plugins/sketch_home_grid.png)

合集列表：

![Iconify for Sketch: 浏览合集](/assets/images/plugins/sketch_index.png)

![Iconify for Sketch: 浏览合集](/assets/images/plugins/sketch_emoji.png)

导入多个图标：

![Iconify for Sketch: 浏览图标集](/assets/images/plugins/sketch_select_multiple.png)

## 可用图标

您可以浏览并导入托管在 [Iconify API](../../api/index.md) 上的超过 60k 个开源图标到 Sketch 项目中。

## 源代码

所有源代码均可在 [Iconify for Sketch 仓库](https://github.com/iconify/iconify-sketch) 获取。

要构建它，请安装所有必要的依赖项并运行 `[bash]npm run build`。构建脚本将生成可安装的 `[file]iconify.sketchplugin` 文件。
