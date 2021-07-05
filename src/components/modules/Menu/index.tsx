import dynamic from 'next/dynamic'

import { useState } from 'react'

import { MenuContainer, MenuHeader, MenuContent } from './styles'

const UnitSwitch = dynamic(() =>
  import('../UnitSwitch').then(mod => mod.UnitSwitch)
)

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContainer>
      <MenuHeader>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? '/close.svg' : '/burger.svg'} alt="Menu" />
        </button>
      </MenuHeader>

      <MenuContent style={{ display: isOpen ? 'block' : 'none' }}>
        <UnitSwitch />
      </MenuContent>
    </MenuContainer>
  )
}

export default Menu
