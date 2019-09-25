import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        snackbarActive: false,
        snackbarText: "",
        snackbarType: ""
    },
    mutations: {
        toggleSnackBar(state, { type, text }) {
            state.snackbarActive = !state.snackbarActive;
            state.snackbarText = text;
            state.snackbarType = type;
        }
    },
    actions: {
        toggleSnackBar({ commit }, { type, text }) {
            commit("toggleSnackBar", {
                type,
                text
            });
        }
    },
    getters: {
        snackbarActive: state => state.snackbarActive,
        snackbarText: state => state.snackbarText,
        snackbarType: state => state.snackbarType
    }
});
