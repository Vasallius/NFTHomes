import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { XircusProvider } from '@xircus-web3/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {
  return (
    <XircusProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </XircusProvider>
  )
}

export default MyApp
