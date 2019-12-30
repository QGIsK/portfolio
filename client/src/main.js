import Vue from "vue";
import App from "./App.vue";

import VueParticlesBg from "particles-bg-vue";
import VueScrollTo from "vue-scrollto";
import VueMeta from "vue-meta";

import store from "./store";
import router from "./router";

import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.use(VueParticlesBg);

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

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


// if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
//   Vue.prototype.$http.defaults.baseURL = "http://localhost:3000";
// }

// Vue.prototype.$http = Axios;
// Vue.prototype.$http.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
