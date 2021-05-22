import * as React from 'react'

import Navbar from '~/components/Navbar'

type Props = {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
