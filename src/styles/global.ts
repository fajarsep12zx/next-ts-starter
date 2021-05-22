import { withStyles, Theme } from '@material-ui/core/styles'

const GlobalStyle = withStyles((theme: Theme) => ({
  '@global': {
    '.avatar-small': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    '.avatar-large': {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
}))(() => null)

export default GlobalStyle
