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

export const LikedService = {
  addToLiked,
}
