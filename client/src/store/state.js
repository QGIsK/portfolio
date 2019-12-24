/* eslint-disable */
import VueCookies from "vue-cookies";

export default {
  status: "",
  token: VueCookies.get("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || {},
};
