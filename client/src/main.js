import Vue from "vue";
import App from "./App.vue";

import VueScrollTo from "vue-scrollto";

import store from "./store";
import router from "./router";

import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

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

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
