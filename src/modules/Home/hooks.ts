import { useEffect, useMemo } from 'react'

import { useUserLazyQuery } from '~/gqlcodegen/hooks/user'

const useCustom = () => {
  const [loadUser, { data }] = useUserLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    loadUser()
  }, [])

  const memoUser = useMemo(() => data?.users?.data || [], [data])

  return {
    data: {
      memoUser,
    },
  }
}

export default useCustom
