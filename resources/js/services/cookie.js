/**
 * @param {string} name
 * @returns {string | undefined}
 */
export const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  return parts.length === 2 ? parts.pop()?.split(';').shift() : undefined
}

/**
 *
 * @param {string} name
 * @param {string} value
 * @param {number} ttl
 * @returns
 */
export const setCookie = (name, value, ttl) =>
  (document.cookie = `${name}=${value}; path=/; max-age=${ttl}, tagname = test; samesite=strict; secure`)

/**
 *
 * @param {string} name
 * @returns
 */
export const removeCookie = (name) =>
  (document.cookie = `${name}=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;`)
