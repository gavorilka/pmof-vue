import { hit } from '@/assets/utils/ya-metric'

export const metricsMiddleware = (to, from, next) => {
  hit(to.path)
  next()
}
