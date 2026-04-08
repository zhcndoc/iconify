import type { SidebarItem } from '../sidebar-item'

const root = '/docs/api/'

export const APISidebar: SidebarItem[] = [
  {
    text: 'API 查询',
    collapsed: true,
    link: `${root}queries`,
    items: [{
      text: '生成 SVG',
      link: `${root}svg`,
    }, {
      text: '生成 CSS',
      link: `${root}css`,
    }, {
      text: '图标数据',
      link: `${root}icon-data`,
    }, {
      text: '最后修改',
      link: `${root}last-modified`,
    }, {
      text: '图标集列表',
      link: `${root}collections`,
    }, {
      text: '图标列表',
      link: `${root}collection`,
    }, {
      text: '搜索图标',
      link: `${root}search`,
    }, {
      text: '关键词',
      link: `${root}keywords`,
    }, {
      text: 'API 版本',
      link: `${root}version`,
    }],
  }, {
    text: '托管 API',
    collapsed: true,
    link: `${root}hosting`,
    items: [{
      text: 'Node.js API',
      collapsed: true,
      link: `${root}hosting-js/`,
      items: [{
        text: '配置',
        link: `${root}hosting-js/config`,
      },
      {
        text: 'HTTP 头',
        link: `${root}hosting-js/headers`,
      },
      {
        text: '反向代理',
        link: `${root}hosting-js/reverse-proxy`,
      }],
    }, {
      text: '自定义 CDN',
      link: `${root}cdn`,
    }],
  }, {
    text: 'API 提供商',
    link: `${root}providers`,
  }, {
    text: '组件配置',
    link: `${root}config`,
  },
]
