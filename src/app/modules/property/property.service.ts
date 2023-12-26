import { Property } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import prisma from '../../../shared/prisma'

const addProperty = async (
  user: JwtPayload,
  data: Property,
): Promise<Property | null> => {
  if (user.role !== 'seller') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidded Access')
  }

  return await prisma.property.create({
    data,
  })
}

export const PropertyService = {
  addProperty,
}
