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

const getAllProperty = catchAsync(async (req: Request, res: Response) => {
  const result = await PropertyService.getAllProperty()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Properties fetched successfully',
    data: result,
  })
})

const getSingleProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await PropertyService.getSingleProperty(id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Property fetched successfully',
    data: result,
  })
})

const updateProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = req.user as JwtPayload
  const result = await PropertyService.updateProperty(user, id, req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Property information updated successfully',
    data: result,
  })
})

const deleteProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = req.user as JwtPayload
  const result = await PropertyService.deleteProperty(user, id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Property deleted successfully',
    data: result,
  })
})

export const PropertyController = {
  addProperty,
  getAllProperty,
  getSingleProperty,
  updateProperty,
  deleteProperty,
}
