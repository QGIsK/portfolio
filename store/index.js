/* eslint-disable no-param-reassign */
import Axios from 'axios'

export const state = () => ({
  snackbarActive: false,
  snackbarText: '',
  snackbarType: '',
  status: '',
  items: [],
})

export const actions = {
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
}

export const mutations = {
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
}

export const getters = {
  snackbarActive: (state) => state.snackbarActive,
  snackbarText: (state) => state.snackbarText,
  snackbarType: (state) => state.snackbarType,
  status: (state) => state.status,
  items: (state) => state.items,
}
