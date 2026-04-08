// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'iconify-icon'
import './style.scss'

import HomePage from './components/HomePage.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'aside-outline-before': () =>
        h('div', {
          class: 'wwads-cn wwads-vertical',
          style: 'margin-top: 0; margin-bottom: 1rem; max-width:200px;',
          'data-id': '354',
        }),
      'doc-after': () =>
        h('div', {
          class: 'wwads-cn wwads-horizontal',
          style: 'margin-top: 1rem; margin-bottom: 1rem; max-width:100%;',
          'data-id': '354',
        }),
      'home-features-after': () => h(HomePage),
    })
  },
}
