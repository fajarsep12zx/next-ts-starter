import withProtected from '~/containers/withProtected'
import Home from '~/modules/Home'

const HomePage = () => <Home />

export default withProtected(HomePage)
