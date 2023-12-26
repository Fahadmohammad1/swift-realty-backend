import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { PropertyService } from './property.service'
import { JwtPayload } from 'jsonwebtoken'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const addProperty = catchAsync(async (req: Request, res: Response) => {
  const result = await PropertyService.addProperty(
    req.user as JwtPayload,
    req.body,
  )
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Property added successfully',
    data: result,
  })
})

export const PropertyController = {
  addProperty,
}