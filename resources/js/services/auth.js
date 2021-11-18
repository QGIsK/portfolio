import { getFromApi, postToApi } from './api'
import { setCookie, getCookie, removeCookie } from './cookie'

/** @type {string} */
export const ENDPOINT = 'auth/local'

/** @type {string} */
export const Authorization = 'Authorization'

/** @type {number} */
export const AuthorizationTTL = 21600

/** @param {string} token */
export const setAuthToken = (token) => setCookie(Authorization, token, AuthorizationTTL)

export const register = async (data) => {
  const { token } = await postToApi(`${ENDPOINT}/register`, data)

  setCookie(Authorization, token, AuthorizationTTL)

  return token
}

export const login = async (data) => {
  const { token } = await postToApi(`${ENDPOINT}/login`, data)

  setCookie(Authorization, token, AuthorizationTTL)

  return token
}

export const logout = async () => {
  await postToApi(`${ENDPOINT}/logout`, {})

  removeCookie(Authorization)
}
