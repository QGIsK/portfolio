import Plausible from 'plausible-tracker'
import type { AppModule } from '~/types'

export const { enableAutoPageviews, trackEvent, enableAutoOutboundTracking } = Plausible({
  domain: 'demiann.dev',
  apiHost: 'https://media.demiann.dev',
})

export const install: AppModule = () => {
  enableAutoPageviews()
  enableAutoOutboundTracking()
}
