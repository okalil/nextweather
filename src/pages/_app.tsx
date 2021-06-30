import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import Header from '../components/modules/Header'

import GlobalStyle from '../styles/global'
import theme from '../styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
