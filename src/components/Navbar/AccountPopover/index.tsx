import { memo } from 'react'

import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  MenuItem,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

import useAuth from '~/utils/auth/hooks'

import useNavbar from './hooks'

function AccountPopover() {
  const { methods } = useAuth()
  const {
    anchorEl,
    popoverShown,
    handleClose,
    handlePopoverShown,
  } = useNavbar()
  return (
    <>
      <Tooltip title="User">
        <IconButton onClick={handlePopoverShown(!popoverShown)}>
          <Avatar className="avatar-small">
            <PersonOutlineIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Popover
        id={popoverShown ? 'simple-popover' : undefined}
        open={popoverShown}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={1}>
          <MenuItem onClick={methods.handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <Typography>Logout</Typography>
          </MenuItem>
        </Box>
      </Popover>
    </>
  )
}

export default memo(AccountPopover)
