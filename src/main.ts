import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/app.scss'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const app = createApp(App)

// setup up pages with layouts
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})
router.afterEach(() => {
  // NOTE :: For some reason the timeout makes it work
  setTimeout(() =>
    window.scrollTo(0, 0)
  , 250)
})

app.use(router)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.({ app, router, routes }))

app.mount('#app')
