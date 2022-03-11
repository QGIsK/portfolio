import type { Store } from './store'

export interface App {
  _id: string
  name: string
  image: string
  href: string
  normalPrice: number
  currentPrice: number
  priceDrop: number
  discount: number

  store: Store
  createdAt: string
}
