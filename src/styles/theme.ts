import { CSSProperties } from 'react'

import indigo from '@material-ui/core/colors/indigo'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// font size default
const fontSize = {
  xxs: '0.625rem', // 10
  xs: '0.813rem', // 12
  s: '0.875rem', // 14
  m: '1rem', // 16
  l: '1.125rem', // 18
  ll: '1.25rem', // 20
  xl: '1.5rem', // 24
  xxl: '1.75rem', // 28
  x3l: '2.125rem', // 34
  x4l: '2.25rem', // 36
  x5l: '4.5rem', // 72
}

export interface IFontSizeProp {
  xxs: CSSProperties['fontSize']
  xs: CSSProperties['fontSize']
  s: CSSProperties['fontSize']
  m: CSSProperties['fontSize']
  l: CSSProperties['fontSize']
  ll: CSSProperties['fontSize']
  xl: CSSProperties['fontSize']
  xxl: CSSProperties['fontSize']
  x3l: CSSProperties['fontSize']
  x4l: CSSProperties['fontSize']
  x5l: CSSProperties['fontSize']
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontSize?: IFontSizeProp
    element?: {
      boxShadow: CSSProperties['boxShadow']
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontSize?: IFontSizeProp
    element?: {
      boxShadow?: CSSProperties['boxShadow']
    }
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  fontSize,
  element: {
    boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      },
    },

    MuiCard: {
      root: {
        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
})

export default responsiveFontSizes(theme)
