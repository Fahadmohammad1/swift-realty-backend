import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { UserRoutes } from '../modules/user/user.routes'
import { PropertyRoutes } from '../modules/property/property.routes'
import { LikedRoutes } from '../modules/liked/liked.routes'

const router = express.Router()

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/property',
    routes: PropertyRoutes,
  },
  {
    path: '/liked',
    routes: LikedRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.routes))
export default router
