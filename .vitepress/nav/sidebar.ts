import { DocumentationSidebar } from './documentation'
import { NewsSidebar } from './news'
import type { SidebarItem } from './sidebar-item'

export const GlobalSidebar: SidebarItem[] = [
  {
    text: '快速开始',
    link: '/getting-started/',
  },
  {
    text: '新闻',
    collapsed: true,
    items: NewsSidebar,
    link: '/news/',
  },
  {
    text: '文档',
    collapsed: true,
    items: DocumentationSidebar,
    link: '/docs/',
  },
  {
    text: '赞助 Iconify',
    link: '/sponsors/',
  },
  {
    text: '关于 Iconify',
    link: '/about/',
  },
  {
    text: 'Iconify 支持',
    link: '/support/',
  },
  {
    text: '历史',
    link: '/about/history',
  },
  {
    text: '隐私',
    link: '/privacy/',
  },
]
