import { useEffect } from 'react'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'

import GlobalStyles from '~/styles/global'
import theme from '~/styles/theme'
import { useApollo } from '~/utils/apollo/client'
import AuthProvider from '~/utils/auth/AuthProvider'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ApolloProvider client={apolloClient}>
          <SnackbarProvider maxSnack={3}>
            <AuthProvider>
              <CssBaseline />
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...pageProps} />
            </AuthProvider>
          </SnackbarProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

export default App
