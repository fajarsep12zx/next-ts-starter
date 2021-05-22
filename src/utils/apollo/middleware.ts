import { ApolloLink } from '@apollo/client'
import Cookies from 'js-cookie'

// eslint-disable-next-line import/prefer-default-export
export const authMiddleWare = new ApolloLink((operation, forward) => {
  operation.setContext(() => {
    const token = Cookies.get('token')

    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return forward(operation)
})
