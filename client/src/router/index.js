import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const CookieStatement = () => import("../views/policies/CookieStatement.vue");
const Disclaimer = () => import("../views/policies/Disclaimer.vue");
const PrivacyPolicy = () => import("../views/policies/PrivacyPolicy.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/policy/cookie-statement",
    name: "CookieStatement",
    component: CookieStatement,
  },
  {
    path: "/policy/disclaimer",
    name: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/policy/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "*",
    name: "404",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
