/* eslint-disable */

export default {
  isAuthenticated: state => !!state.token,
  userId: state => state.user.id,
  authStatus: state => state.status,
};
