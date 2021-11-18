/* eslint-disable no-param-reassign */
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import Authentication from './modules/Authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Authentication },

  state: {
    snackbarActive: false,
    snackbarText: '',
    snackbarType: '',
    status: '',
    items: [],
  },
  actions: {
    toggleSnackBar({ commit }, { type, text }) {
      commit('toggleSnackBar', {
        type,
        text,
      })
    },
    getPortfolioItems({ commit }) {
      commit('setStatus', 'loading')
      Axios.get('/portfolio-items')
        .then((res) => {
          commit('setItems', { items: res.data })
          commit('setStatus', 'success')
        })
        .catch(() => {
          commit('toggleSnackBar', {
            type: 'red',
            text: 'An error has occured while loading, Please try again later.',
          })
        })
    },
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    setItems(state, { items }) {
      state.items = items
    },
    toggleSnackBar(state, { type, text }) {
      state.snackbarActive = !state.snackbarActive
      state.snackbarText = text
      state.snackbarType = type
    },
  },
  getters: {
    snackbarActive: (state) => state.snackbarActive,
    snackbarText: (state) => state.snackbarText,
    snackbarType: (state) => state.snackbarType,
    status: (state) => state.status,
    items: (state) => state.items,
  },
})
