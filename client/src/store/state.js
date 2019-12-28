/* eslint-disable */
import VueCookies from "vue-cookies";

export default {
  status: "",
  snackbarActive: false,
  snackbarText: "",
  snackbarType: "",
  token: VueCookies.get("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || {},
};
