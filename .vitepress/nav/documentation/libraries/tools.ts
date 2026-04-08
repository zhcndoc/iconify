import type { SidebarItem } from '../../sidebar-item'

const root = '/docs/libraries/tools/'
const iconSetRoot = `${root}icon-set/`
const iconRoot = `${root}icon/`
const packageRoot = `${root}package/`

export const ToolsSidebar: SidebarItem[] = [
  {
    text: 'SVG 类',
    link: `${root}svg/`,
  },
  {
    text: 'IconSet 类',
    link: iconSetRoot,
    items: [{
      text: '图标',
      collapsed: true,
      items: [{
        text: 'list()',
        link: `${iconSetRoot}list`,
      },
      {
        text: 'forEach()',
        link: `${iconSetRoot}for-each`,
      },
      {
        text: 'exists()',
        link: `${iconSetRoot}exists`,
      },
      {
        text: 'count()',
        link: `${iconSetRoot}count`,
      },
      {
        text: 'remove()',
        link: `${iconSetRoot}remove`,
      },
      {
        text: 'rename()',
        link: `${iconSetRoot}rename`,
      },
      {
        text: 'setItem()',
        link: `${iconSetRoot}set-item`,
      },
      {
        text: 'setIcon()',
        link: `${iconSetRoot}set-icon`,
      },
      {
        text: 'setVariation()',
        link: `${iconSetRoot}set-variation`,
      },
      {
        text: 'setAlias()',
        link: `${iconSetRoot}set-alias`,
      },
      {
        text: 'getTree()',
        link: `${iconSetRoot}get-tree`,
      },
      {
        text: 'entries()',
        link: `${iconSetRoot}entries`,
      },
      {
        text: 'resolve()',
        link: `${iconSetRoot}resolve`,
      }],
    }, {
      text: '导入 / 导出',
      collapsed: true,
      items: [
        {
          text: 'load()',
          link: `${iconSetRoot}load`,
        },
        {
          text: 'export()',
          link: `${iconSetRoot}export`,
        },
        {
          text: 'toSVG()',
          link: `${iconSetRoot}to-svg`,
        },
        {
          text: 'fromSVG()',
          link: `${iconSetRoot}from-svg`,
        },
        {
          text: 'toString()',
          link: `${iconSetRoot}to-string`,
        }],
    }, {
      text: '元数据',
      collapsed: true,
      items: [{
        text: 'prefix',
        link: `${iconSetRoot}prefix`,
      }, {
        text: 'info',
        link: `${iconSetRoot}info`,
      },
      {
        text: 'chars()',
        link: `${iconSetRoot}chars`,
      },
      {
        text: 'toggleCharacter()',
        link: `${iconSetRoot}toggle-character`,
      },
      {
        text: 'listCategory()',
        link: `${iconSetRoot}list-category`,
      },
      {
        text: 'toggleCategory()',
        link: `${iconSetRoot}toggle-category`,
      },
      {
        text: 'categories',
        link: `${iconSetRoot}categories`,
      },
      {
        text: 'checkTheme()',
        link: `${iconSetRoot}check-theme`,
      },
      {
        text: 'suffixes/prefixes',
        link: `${iconSetRoot}themes`,
      }],
    },
    {
      text: 'mergeIconSets()',
      link: `${iconSetRoot}merge`,
    }],
  }, {
    text: '清理 / 校验',
    link: `${iconRoot}cleanup`,
  }, {
    text: 'ResolvedIconifyIcon',
    link: `${root}iconify-icon`,
    hidden: true,
  }, {
    text: '图标处理',
    link: iconRoot,
    collapsed: true,
    items: [{
      text: 'runSVGO()',
      link: `${iconRoot}svgo`,
    }, {
      text: 'parseColors()',
      link: `${iconRoot}colors`,
    }, {
      text: 'deOptimisePaths()',
      link: `${iconRoot}paths`,
    }, {
      text: 'scaleSVG()',
      link: `${iconRoot}scale`,
    }, {
      text: 'convertSVGToMask()',
      link: `${iconRoot}mask`,
    }],
  }, {
    text: '导入',
    link: `${root}import/`,
    collapsed: true,
    items: [{
      text: 'IconifyJSON',
      link: `${root}import/json`,
    }, {
      text: '单个 SVG',
      link: `${root}import/svg`,
    }, {
      text: '目录',
      link: `${root}import/directory`,
    }, {
      text: 'Figma',
      link: `${root}import/figma/`,
      items: [{
        text: '获取文件 ID',
        link: `${root}import/figma/file-id`,
      }, {
        text: '获取访问令牌',
        link: `${root}import/figma/token`,
      }, {
        text: '类型',
        link: `${root}import/figma/types`,
      }],
    }],
  }, {
    text: '导出',
    link: `${root}export/`,
    collapsed: true,
    items: [{
      text: 'IconifyJSON',
      link: `${root}export/json`,
    }, {
      text: '单个 SVG',
      link: `${root}export/svg`,
    }, {
      text: '目录',
      link: `${root}export/directory`,
    }, {
      text: 'IconifyJSON 包',
      link: `${root}export/json-package`,
    }, {
      text: '图标包',
      link: `${root}export/icon-package`,
    }],
  }, {
    text: '管理包',
    link: packageRoot,
    collapsed: true,
    items: [{
      text: '下载包',
      collapsed: true,
      items: [{
        text: 'Git 仓库',
        link: `${packageRoot}git`,
      }, {
        text: 'GitHub API',
        link: `${packageRoot}github`,
      }, {
        text: 'GitLab API',
        link: `${packageRoot}gitlab`,
      }, {
        text: 'NPM 包',
        link: `${packageRoot}npm`,
      }],
    }, {
      text: '版本',
      collapsed: true,
      items: [{
        text: '递增版本',
        link: `${packageRoot}bump-version`,
      }, {
        text: 'NPM 版本',
        link: `${packageRoot}npm-version`,
      }, {
        text: '包版本',
        link: `${packageRoot}package-version`,
      }, {
        text: 'Git 仓库哈希',
        link: `${packageRoot}git-repo-hash`,
      }, {
        text: 'GitHub 最近提交',
        link: `${packageRoot}github-commit`,
      }, {
        text: 'GitLab 最近提交',
        link: `${packageRoot}gitlab-commit`,
      }],
    }, {
      text: '辅助函数',
      collapsed: true,
      items: [{
        text: '比较目录',
        link: `${packageRoot}compare`,
      }, {
        text: '发送 API 查询',
        link: `${packageRoot}api-query`,
      }, {
        text: '下载文件',
        link: `${packageRoot}download-file`,
      }],
    }],
  }, {
    text: '示例',
    collapsed: true,
    link: `${root}examples/`,
    items: [{
      text: '将所有 Iconify 图标集导出为 SVG',
      link: `${root}examples/export-svg`,
    }, {
      text: '从 Figma 导入图标集',
      link: `${root}examples/import-figma`,
    }, {
      text: '将 Material Design Icons 转换为 Iconify JSON 格式',
      link: `${root}examples/import-mdi`,
    }, {
      text: '将 FontAwesome Pro 转换为 Iconify JSON 格式',
      link: `${root}examples/import-fa-pro`,
    }],
  }, {
    text: '导入限制',
    link: `${root}tags`,
  },
]
