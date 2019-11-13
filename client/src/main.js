// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Axios from "axios";
import App from "./App";
import store from "./store";
import router from "./router";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.headers.common["Content-Type"] =
    "application/json";

if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
    Vue.prototype.$http.defaults.baseURL = "http://localhost:3000";
}

/* eslint-disable no-new */
new Vue({
    el: "#app",
    Vuetify,
    router,
    store,
    components: {
        App
    },
    template: "<App/>"
});
