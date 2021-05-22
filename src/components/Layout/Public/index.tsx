import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export default function PublicLayout({ children }: Props) {
  return <div>{children}</div>
}
