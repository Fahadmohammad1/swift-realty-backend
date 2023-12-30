import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { LikedController } from './liked.controller'

const router = express.Router()

router.post(
  '/add',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.AGENT,
  ),
  LikedController.addToLiked,
)

export const LikedRoutes = router
