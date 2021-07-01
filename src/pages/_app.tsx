import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { UnitContextProvider } from '../contexts/UnitContext'

import Header from '../components/modules/Header'
import Menu from '../components/modules/Menu'

import GlobalStyle from '../styles/global'
import theme from '../styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <UnitContextProvider>
        <Header />
        <Menu />
        <Component {...pageProps} />
        <GlobalStyle />
      </UnitContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
