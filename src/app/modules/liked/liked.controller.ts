import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { LikedService } from './liked.service'
import { JwtPayload } from 'jsonwebtoken'

const addToLiked = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload
  const result = await LikedService.addToLiked(user, req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Added successfully',
    data: result,
  })
})

const getAllLiked = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload
  const result = await LikedService.getAllLiked(user)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All liked item fetched successfully',
    data: result,
  })
})

export const LikedController = {
  addToLiked,
  getAllLiked,
}
