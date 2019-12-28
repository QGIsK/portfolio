/* eslint-disable */
import axios from "axios";
import VueCookies from "vue-cookies";

if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "http://localhost:3000";
}

export default {
  toggleSnackBar({ commit }, { type, text }) {
    commit("toggleSnackBar", {
      type,
      text,
    });
  },
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "/api/auth/login",
        data: {
          email: user.email,
          password: user.password,
        },
        crossdomain: true,
        method: "POST",
      })
        .then(resp => {
          const token = resp.data.token;
          const user = {
            id: resp.data.user._id,
            name: resp.data.user.name,
            email: resp.data.user.email,
            socials: resp.data.user.socials,
            isAdmin: resp.data.user.isAdmin,
          };

          let payload = {
            type: "success",
            text: "Successfully logged in",
          };

          VueCookies.set("token", token, "24h");
          VueCookies.set("user", user, "24h");
          localStorage.setItem("user", JSON.stringify(user));

          axios.defaults.headers.common["Authorization"] = token;
          commit("toggleSnackBar", payload);
          commit("auth_success", {
            token,
            user,
          });
          resolve(resp);
        })
        .catch(err => {
          commit("auth_error", err);
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "/api/auth/register",
        crossdomain: true,
        data: user,
        method: "POST",
      })
        .then(resp => {
          const token = resp.data.token;
          const user = {
            id: resp.data.user._id,
            name: resp.data.user.name,
            email: resp.data.user.email,
            socials: resp.data.user.socials,
            admin: resp.data.user.isAdmin,
          };

          let payload = {
            type: "success",
            text: "Successfully registered",
          };

          VueCookies.set("token", token, "24h");
          VueCookies.set("user", user, "24h");
          localStorage.setItem("user", JSON.stringify(user));

          axios.defaults.headers.common["Authorization"] = token;

          commit("auth_success", {
            token,
            user,
          });

          commit("toggleSnackBar", payload);
          resolve(resp);
        })
        .catch(err => {
          commit("auth_error", err);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      let payload = {
        type: "success",
        text: "Successfully logged out",
      };

      VueCookies.remove("token");
      VueCookies.remove("user");

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
      commit("toggleSnackBar", payload);
      commit("logout");
      resolve();
    });
  },
};
