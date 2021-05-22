import { useState } from 'react'

const useCustom = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [popoverShown, setPopoverShown] = useState(false)

  const handleClose = () => {
    setPopoverShown(false)
  }

  const handlePopoverShown = (value) => (e) => {
    setPopoverShown(value)
    setAnchorEl(e.currentTarget)
  }

  return {
    anchorEl,
    handleClose,
    handlePopoverShown,
    popoverShown,
  }
}

export default useCustom
