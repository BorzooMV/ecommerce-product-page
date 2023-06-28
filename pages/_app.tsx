import { AppProps } from 'next/app'
import ShoppingCartProvider from '../components/ShoppingCartProvider/ShoppingCartProvider'
import Layout from '../components/Layout'

import './global.css'
import '../utils/overComponents.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  )
}
