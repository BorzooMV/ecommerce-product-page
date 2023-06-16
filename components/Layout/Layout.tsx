import { Fragment } from 'react'
import Header from './Header'
import { LayoutProps } from './Layout.d'

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}
