import { UserRole } from '@prisma/client'

export type IUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  password: string
  role: UserRole
  gender?: string
  presentAddress?: string
  avatar?: string
  ratings?: number[]
  bio?: string
}
