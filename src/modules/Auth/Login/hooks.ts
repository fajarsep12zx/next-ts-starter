import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useAuth from '~/utils/auth/hooks'
import { IFormSchema, loginSchema } from './schema'

// Connect with Auth API for login to application
export default function useLogin() {
  const form = useForm<IFormSchema>({
    resolver: yupResolver(loginSchema),
  })

  const { handleSubmit } = form

  const [errorMessage, setErrorMessage] = useState('')
  const { methods } = useAuth()

  const handleSubmitLogin = handleSubmit(
    useCallback(
      async (values) => {
        try {
          setErrorMessage('')
          if (
            values.email === 'admin@admin.com' &&
            values.password === 'admin'
          ) {
            methods.handleLogin(values)
          } else {
            setErrorMessage('SOMETHING ERROR')
          }
        } catch (error) {
          //
        }
      },
      [methods]
    )
  )

  return {
    form,
    state: {
      errorMessage,
    },
    methods: {
      handleSubmitLogin,
    },
  }
}
