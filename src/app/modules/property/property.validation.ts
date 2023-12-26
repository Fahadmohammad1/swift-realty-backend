import { z } from 'zod'

const add = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    location: z.string({
      required_error: 'location is required',
    }),
    price: z.string({
      required_error: 'price is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    category: z.string({
      required_error: 'category is required',
    }),
  }),
})

export const PropertyValidation = {
  add,
}
