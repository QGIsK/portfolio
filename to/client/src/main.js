import Vue from "vue";
import Axios from "axios";
import VueClipboards from "vue-clipboards";
import "./plugins/vuetify";
// eslint-disable-next-line
import store from "./store/";
import router from "./router/";
import App from "./App.vue";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(VueClipboards);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.headers.common["Content-Type"] =
    "application/json";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    Vue.prototype.$http.defaults.baseURL = "http://localhost:3000";
}

new Vue({
    store,
    render: h => h(App),
    router
}).$mount("#app");
