import { useCallback } from 'react'

import { useSnackbar } from 'notistack'

import { AUTOHIDE_DURATION_SNACKBAR } from '~/config/constants'
import { CustomOptionsObjectNotistack } from '~/config/interfaces'

const useSnackIo = () => {
  const { enqueueSnackbar } = useSnackbar()

  const openSnackbar = useCallback(
    (message, success, customMessage, id = '') => {
      const resMesssage = message || customMessage
      const variant = success ? 'success' : 'warning'
      const customId = id ? `-${id}` : ''
      enqueueSnackbar(resMesssage, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        autoHideDuration: AUTOHIDE_DURATION_SNACKBAR,
        'data-testid': `snackbar-${variant}${customId}`,
        preventDuplicate: true,
      } as CustomOptionsObjectNotistack)
    },
    []
  )

  return {
    openSnackbar,
  }
}

export default useSnackIo
