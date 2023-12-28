import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { PropertyController } from './property.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { PropertyValidation } from './property.validation'

const router = express.Router()

router.get('/:id', PropertyController.getSingleProperty)
router.get('/', PropertyController.getAllProperty)

router.post(
  '/add',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  validateRequest(PropertyValidation.add),
  PropertyController.addProperty,
)
router.patch(
  '/update/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  validateRequest(PropertyValidation.update),
  PropertyController.updateProperty,
)

router.delete(
  '/delete/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  PropertyController.deleteProperty,
)

export const PropertyRoutes = router
