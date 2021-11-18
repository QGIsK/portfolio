// @ts-nocheck
// TODO :: Define
import { setAuthToken, Authorization } from '../../services/auth'
import { getCookie } from '../../services/cookie'

import router from '../../router'

export default {
  namespaced: true,
  state: {
    token: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {
    async checkAuth({ commit }) {
      const token = getCookie(Authorization)

      // Will either be empty or the token
      // Either way it does what we want.
      commit('setToken', token)
    },

    async login({ dispatch }) {
      dispatch('checkAuth')
    },

    async logout({ dispatch }) {
      await logout()

      await dispatch('checkAuth')

      router.push('/')
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    token: (state) => state.token,
  },
}
