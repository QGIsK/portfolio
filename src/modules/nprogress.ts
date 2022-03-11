import NProgress from 'nprogress'
import type { AppModule } from '~/types'

export const install: AppModule = ({ router }) => {
  router.beforeEach(() => { NProgress.start() })
  router.afterEach(() => { NProgress.done() })
}
