import { Liked } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'
import prisma from '../../../shared/prisma'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

const addToLiked = async (
  user: JwtPayload,
  data: Liked,
): Promise<Liked | null> => {
  const available = await prisma.liked.findFirst({
    where: {
      propertyId: data.propertyId,
    },
  })

  if (available && available.userId === user.userId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Already added')
  }

  data.userId = user.userId

  return await prisma.liked.create({
    data,
  })
}

const getAllLiked = async (user: JwtPayload) => {
  return await prisma.liked.findMany({
    where: {
      userId: user.userId,
    },
  })
}

const deleteLiked = async (user: JwtPayload, id: string) => {
  const findProperty = await prisma.property.findUnique({
    where: {
      id,
    },
  })
  if (findProperty?.ownerId !== user.userId) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized Access')
  }

  return await prisma.property.delete({
    where: {
      id,
    },
  })
}

export const LikedService = {
  addToLiked,
  getAllLiked,
  deleteLiked,
}
