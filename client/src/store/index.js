/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = "http://localhost:3000";
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});
