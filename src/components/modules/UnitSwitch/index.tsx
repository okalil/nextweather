import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { useUnit } from '../../../hooks/useUnit'

import { Container } from './styles'

const UnitSwitch = () => {
  const { colors } = useContext(ThemeContext)
  const { units, setUnits } = useUnit()

  useEffect(() => {
    setUnits(localStorage.getItem('units'))
  }, [])

  const metric = units == 'metric'
  const active = { background: colors.headerBackground, fontWeight: 600 }
  const inactive = { background: colors.buttonInactive, fontWeight: 500, cursor: 'pointer' }

  return (
    <Container>
      <button
        style={metric ? inactive : active}
        onClick={() => {
          setUnits('imperial')
          localStorage.setItem('units', 'imperial')
        }}
      >
        °F
      </button>
      <button
        style={metric ? active : inactive}
        onClick={() => {
          setUnits('metric')
          localStorage.setItem('units', 'metric')
        }}
      >
        °C
      </button>
    </Container>
  )
}

export { UnitSwitch }
