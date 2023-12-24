import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import prisma from '../../../shared/prisma'
import { User } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'

const getAllProfiles = async (role: string): Promise<User[]> => {
  if (role !== 'admin') {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized Access')
  }

  return await prisma.user.findMany({})
}

const getSingleProfile = async (user: JwtPayload): Promise<User[]> => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
  })

  if (!findUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized Access')
  }

  return await prisma.user.findMany({})
}

export const UserService = {
  getAllProfiles,
  getSingleProfile,
}
