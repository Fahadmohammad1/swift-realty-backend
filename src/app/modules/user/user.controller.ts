import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'

const getAllProfiles = catchAsync(async (req: Request, res: Response) => {
  const { role } = req.query
  const result = await UserService.getAllProfiles(role as string)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Profiels fetched successfully',
    data: result,
  })
})

const getSingleProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload
  const result = await UserService.getSingleProfile(user)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User fetched successfully',
    data: result,
  })
})

export const UserController = {
  getAllProfiles,
  getSingleProfile,
}
