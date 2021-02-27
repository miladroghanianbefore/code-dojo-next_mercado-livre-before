import React from 'react'
import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp
