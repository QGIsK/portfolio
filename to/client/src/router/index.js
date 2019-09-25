import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Home from "../components/Home";

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
});
