import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import Layout from './layout/Layout.Vue'
import '../css/style.css'

createInertiaApp({
  resolve: name => {
//    const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
//    return pages[`./pages/${name}.vue`]
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})