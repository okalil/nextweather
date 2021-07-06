import React from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import { SearchBox } from '../Searchbox'
import { UnitSwitch } from '../UnitSwitch'

import { Wrapper, Container, SubContainer, Logo } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <SubContainer>
          <Logo src="/weather-logo.svg" alt="Logo" />
          {useMediaQuery('(min-width: 768px)') && <h1>Next Weather</h1>}
        </SubContainer>

        <SearchBox />

        {useMediaQuery('(min-width: 768px') && (
          <SubContainer>
            <UnitSwitch />
          </SubContainer>
        )}
      </Container>
    </Wrapper>
  )
}

export default Header
