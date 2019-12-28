/* eslint-disable */

export default {
  isAuthenticated: state => !!state.token,
  userId: state => state.user.id,
  snackbarActive: state => state.snackbarActive,
  snackbarText: state => state.snackbarText,
  snackbarType: state => state.snackbarType,
  authStatus: state => state.status,
};
