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

const getSingleProfile = async (user: JwtPayload): Promise<User | null> => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
  })

  if (!findUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized Access')
  }

  return findUser
}

const updateProfile = async (
  user: JwtPayload,
  payload: Partial<User>,
): Promise<User | null> => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
  })

  if (!findUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'User does not exists')
  }

  const result = await prisma.user.update({
    where: {
      id: user.userId,
    },
    data: payload,
  })

  return result
}

export const UserService = {
  getAllProfiles,
  getSingleProfile,
  updateProfile,
}
