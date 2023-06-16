import theme from '../../utils/theme'
import Header from './Header'
import { LayoutProps } from './Layout.d'
import { ThemeProvider } from '@mui/material'

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  )
}
