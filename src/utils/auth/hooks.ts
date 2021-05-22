import { useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useApolloClient } from '@apollo/client'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'

import { AuthContext } from './AuthProvider'
import * as Storage from '../localStorage'

export default function useAuth() {
  const router = useRouter()
  const client = useApolloClient()
  const { isLoggedIn, userData, setIsLoggedIn, setUserData } = useContext(
    AuthContext
  )

  const handleLogin = useCallback(
    (authResult) => {
      // set isLogin with real data from api
      setIsLoggedIn(true)

      setUserData(authResult)
      Cookies.set('accessToken', 'SOME_TOKEN')
      Storage.set(LOCAL_STORAGE_KEY_USER, authResult)
      router.push('/home')
    },
    [router, setIsLoggedIn, setUserData]
  )

  const handleLogout = useCallback(async () => {
    Cookies.remove('accessToken')
    Storage.remove(LOCAL_STORAGE_KEY_USER)

    Storage.set('logout', Date.now().toString())
    await client.clearStore()

    document.location.href = '/'
  }, [])

  return {
    state: {
      isLoggedIn,
      userData,
    },
    methods: {
      handleLogin,
      handleLogout,
    },
  }
}
