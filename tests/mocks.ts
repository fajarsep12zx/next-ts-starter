import useSnackbar, {
  mockedOpenSnackbar,
} from '~/mocks/src/utils/hooks/useSnackbar'

jest.mock('~/utils/hooks/useSnackbar', () => useSnackbar)

export { mockedOpenSnackbar }
