import { createPinia } from 'pinia'
import type { AppModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: AppModule = ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
}
