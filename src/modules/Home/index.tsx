import { Box, Container } from '@material-ui/core'

import { graphQLHost } from '~/config/constants'

import useCustom from './hooks'

const Home = () => {
  const { data } = useCustom()

  return (
    <Container>
      <Box my={5}>
        Example using codegen from <a href={graphQLHost}>{graphQLHost}</a>
      </Box>
      <Box>{JSON.stringify(data.memoUser)}</Box>
    </Container>
  )
}

export default Home
