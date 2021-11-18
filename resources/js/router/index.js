import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '../views/Home.vue'

import CookieStatement from '../views/policies/CookieStatement.vue'
import Disclaimer from '../views/policies/Disclaimer.vue'
import PrivacyPolicy from '../views/policies/PrivacyPolicy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'AuthenticationLogin',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/policy/cookie-statement',
    name: 'CookieStatement',
    component: CookieStatement,
  },
  {
    path: '/policy/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer,
  },
  {
    path: '/policy/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '*',
    name: '404',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.ensureAuthenticated)) {
    if (store.getters['Authentication/isLoggedIn']) return next()

    return next({ path: '/auth', query: { redirect: to.fullPath } })
  }
  next()
})

export default router
