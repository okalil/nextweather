import React, { useState } from 'react'
import SearchBox from '../Searchbox'

import { Container, MenuButton } from './styles'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <img src="/weather-logo.svg" alt="Logo" />

      <SearchBox />

      <MenuButton onClick={() => setOpen(!open)}>
        <img src={open ? '/close.svg' : '/burger.svg'} alt="Menu" />
      </MenuButton>
    </Container>
  )
}

export default Header
