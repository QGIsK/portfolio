import Vue from 'vue'
import Axios from 'axios'

import VueParticlesBg from 'particles-bg-vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'

import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueParticlesBg)

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 750,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

Vue.prototype.$http = Axios
Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/json'
Vue.prototype.$http.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? '/api' : process.env.VUE_APP_API_PATH

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
