import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { UserController } from './user.controller'

const router = express.Router()

router.get(
  '/profile',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.BUYER,
    ENUM_USER_ROLE.SELLER,
    ENUM_USER_ROLE.AGENT,
  ),
  UserController.getSingleProfile,
)

router.get(
  '/profiles',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.getAllProfiles,
)

export const UserRoutes = router
