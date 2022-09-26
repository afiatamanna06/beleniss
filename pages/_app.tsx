import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from '../components/navigation/NavigationBar'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <NavigationBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
