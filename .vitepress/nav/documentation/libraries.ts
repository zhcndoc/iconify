import type { SidebarItem } from '../sidebar-item'
import { ToolsSidebar } from './libraries/tools'
import { TypesSidebar } from './libraries/types'
import { UtilsSidebar } from './libraries/utils'

export const LibrariesSidebar: SidebarItem[] = [
  {
    text: 'Iconify 类型',
    link: '/docs/types/',
    collapsed: true,
    items: TypesSidebar,
  },
  {
    text: 'Iconify 工具',
    link: '/docs/libraries/tools/',
    collapsed: true,
    items: ToolsSidebar,
  },
  {
    text: 'Iconify Utils',
    collapsed: true,
    link: '/docs/libraries/utils/',
    items: UtilsSidebar,
  },
]
