import React from 'react'
import { AppProps } from 'next/app'

import { useMediaQuery } from '../hooks/useMediaQuery'
import { ThemeProvider } from 'styled-components'
import { UnitContextProvider } from '../contexts/UnitContext'

import Header from '../components/modules/Header'
import Menu from '../components/modules/Menu'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <UnitContextProvider>
        <Header />
        {!useMediaQuery('(min-width: 768px)') && <Menu />}

        <Component {...pageProps} />
        <GlobalStyle />
      </UnitContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
