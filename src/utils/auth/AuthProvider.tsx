import { createContext, useState } from 'react'
import Cookies from 'js-cookie'

import { LOCAL_STORAGE_KEY_USER } from '~/config/constants'

import * as Storage from '../localStorage'

type AuthContextProps = {
  isLoggedIn: boolean
  userData: any
  setIsLoggedIn: (isLoggin: boolean) => void
  setUserData: (userData: any) => void
}

export const AuthContext = createContext<Partial<AuthContextProps>>({
  isLoggedIn: false,
  userData: {
    fullname: '',
    email: '',
    accessToken: 'SOME_ACCESS_TOKEN',
    usersId: '',
  },
})

const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(Cookies.get('token')))
  const [userData, setUserData] = useState(Storage.load(LOCAL_STORAGE_KEY_USER))
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        setUserData,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
