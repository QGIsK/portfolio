import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";

import VueParticlesBg from "particles-bg-vue";
import VueScrollTo from "vue-scrollto";

import router from "./router";
import store from "./store/";

import vuetify from "./plugins/vuetify";
// import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.use(VueParticlesBg);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 750,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.prototype.$http = Axios;

if (process.env.NODE_ENV === "production") Vue.prototype.$http.defaults.baseURL = "/api/";
else Vue.prototype.$http.defaults.baseURL = "http://localhost:3000/api";

Vue.prototype.$http.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
