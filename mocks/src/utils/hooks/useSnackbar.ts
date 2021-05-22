export const mockedOpenSnackbar = jest.fn()

export default jest.fn().mockImplementation(() => ({
  openSnackbar: mockedOpenSnackbar,
}))
