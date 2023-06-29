import { AppProps } from 'next/app'
import theme from '../utils/theme'

import ShoppingCartProvider from '../components/ShoppingCartProvider/ShoppingCartProvider'
import Layout from '../components/Layout'
import SidebarProvider from '../components/Layout/SidebarProvider'

import './global.css'
import '../utils/overComponents.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SidebarProvider>
      </ThemeProvider>
    </ShoppingCartProvider>
  )
}
