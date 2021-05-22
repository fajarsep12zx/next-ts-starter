import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'

import AccountPopover from './AccountPopover'
import useStyle from './style'

export default function Navbar() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid justify="space-between" alignItems="center" container>
            <Grid xs item>
              <Typography variant="h6" color="inherit">
                Photos
              </Typography>
            </Grid>
            <Grid justify="flex-end" xs container item>
              <AccountPopover />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
