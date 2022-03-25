import AOS from 'aos'
import type { AppModule } from '~/types'
import 'aos/dist/aos.css'

export const install: AppModule = () => {
  AOS.init()
}
