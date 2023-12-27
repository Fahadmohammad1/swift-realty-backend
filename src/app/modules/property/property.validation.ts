import { z } from 'zod'

const add = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    location: z.string({
      required_error: 'location is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    category: z.string({
      required_error: 'category is required',
    }),
    status: z.string({
      required_error: 'status is required',
    }),
    bed: z.string({
      required_error: 'bed is required',
    }),
    baths: z.string({
      required_error: 'baths is required',
    }),
    ac: z.boolean({
      required_error: 'ac is required',
    }),
    gym: z.boolean({
      required_error: 'gym is required',
    }),
    swimmingPool: z.boolean({
      required_error: 'swimmingPool is required',
    }),
    wifi: z.boolean({
      required_error: 'wifi is required',
    }),
    washer: z.boolean({
      required_error: 'washer is required',
    }),
    garage: z.boolean({
      required_error: 'garage is required',
    }),
    fireplace: z.boolean({
      required_error: 'fireplace is required',
    }),
    availablity: z.string({
      required_error: 'availablity is required',
    }),
    type: z.string({
      required_error: 'type is required',
    }),
  }),
})

export const PropertyValidation = {
  add,
}
