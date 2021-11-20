export const state = () => ({
  snackbarActive: false,
  snackbarText: '',
  snackbarType: '',
})

export const actions = {
  toggleSnackBar({ commit }, { type, text }) {
    commit('toggleSnackBar', {
      type,
      text,
    })
  },
}

export const mutations = {
  setStatus(state, status) {
    state.status = status
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
}
