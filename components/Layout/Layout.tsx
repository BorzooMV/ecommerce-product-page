import theme from '../../utils/theme'
import Header from './Header'
import { LayoutProps } from './Layout.d'
import { Box, ThemeProvider } from '@mui/material'

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ pb: 6 }}>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
    </Box>
  )
}
