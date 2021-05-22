import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  TextField,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Controller } from 'react-hook-form'

import useLogin from './hooks'
import useStyle from './style'

const Login = () => {
  const classes = useStyle()
  const { form, methods, state } = useLogin()
  const {
    control,
    formState: { errors, isSubmitting },
  } = form

  return (
    <Box
      className={classes.loginWraper}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <form onSubmit={methods.handleSubmitLogin}>
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Alert severity="info">
                email: admin@admin.com & password: admin
              </Alert>
              <Box hidden={!state.errorMessage}>
                <Alert severity="warning">{state.errorMessage}</Alert>
              </Box>
              <Box my={2}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      variant="outlined"
                      label="Email"
                      type="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      fullWidth
                    />
                  )}
                />
              </Box>
              <Box my={2}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      variant="outlined"
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      fullWidth
                    />
                  )}
                />
              </Box>
              <Box display="flex" my={2}>
                <Box flexGrow={1}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </form>
    </Box>
  )
}

export default Login
