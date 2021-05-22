import { FormHelperTextProps } from '@material-ui/core'
import { OptionsObject } from 'notistack'

const DATA_TESTID = 'data-testid'

export interface CustomInputProps
  // eslint-disable-next-line no-undef
  extends React.InputHTMLAttributes<HTMLInputElement> {
  [DATA_TESTID]?: string
}

export interface CustomInputHelperProps extends FormHelperTextProps {
  [DATA_TESTID]?: string
}

export interface CustomOptionsObjectNotistack extends OptionsObject {
  [DATA_TESTID]?: string
}

export interface PaginationProps {
  current: number
  totalPage: number
  onChange: (e, newPage) => void
}
