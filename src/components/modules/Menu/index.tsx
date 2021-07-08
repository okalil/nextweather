import { useState } from 'react'
import dynamic from 'next/dynamic'

import { UnitSwitch } from '../UnitSwitch'

import { MenuContainer, MenuHeader, MenuContent } from './styles'

const Menu = () => {
  const ThemeSwitch = dynamic(() =>
    import('../ThemeSwitch').then(mod => mod.ThemeSwitch)
  )

  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContainer>
      <MenuHeader>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? '/close.svg' : '/burger.svg'} alt="Menu" />
        </button>
      </MenuHeader>

      <MenuContent style={{ display: isOpen ? 'flex' : 'none' }}>
        <UnitSwitch />
        <ThemeSwitch />
      </MenuContent>
    </MenuContainer>
  )
}

export default Menu
