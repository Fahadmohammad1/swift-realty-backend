import { Property } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import prisma from '../../../shared/prisma'

// listing property
const addProperty = async (
  user: JwtPayload,
  data: Property,
): Promise<Property | null> => {
  if (user.role !== 'seller') {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidded Access')
  }

  data.ownerId = user.userId

  return await prisma.property.create({
    data,
  })
}

// get all available property
const getAllProperty = async () => {
  return await prisma.property.findMany({})
}

// get a single property details
const getSingleProperty = async (id: string) => {
  const findProperty = await prisma.property.findUnique({
    where: {
      id,
    },
  })

  if (!findProperty) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Property does not exist')
  }

  return findProperty
}
export const PropertyService = {
  addProperty,
  getAllProperty,
  getSingleProperty,
}
