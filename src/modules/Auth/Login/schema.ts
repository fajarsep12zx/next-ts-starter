import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string().email().trim().required(),
  password: Yup.string().trim().required(),
})

export type IFormSchema = Yup.InferType<typeof loginSchema>
