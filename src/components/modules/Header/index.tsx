import React from 'react'

import { SearchBox } from '../Searchbox'

import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <img src="/weather-logo.svg" alt="Logo" />

      <SearchBox />
    </Container>
  )
}

export default Header
