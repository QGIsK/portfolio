import { createHead } from '@vueuse/head'
import type { AppModule } from '~/types'

// vueuse/head https://github.com/vueuse/head
export const install: AppModule = ({ app }) => {
  const head = createHead()
  app.use(head)
}
