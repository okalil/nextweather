import dynamic from 'next/dynamic'

import { useState } from 'react'

import { MenuContainer, MenuHeader, MenuContent } from './styles'

const UnitSwitch = dynamic(() =>
  import('../UnitSwitch').then(mod => mod.UnitSwitch)
)

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <MenuContainer>
      <MenuHeader>
        <button onClick={() => setOpen(!open)}>
          <img src={open ? '/close.svg' : '/burger.svg'} alt="Menu" />
        </button>
      </MenuHeader>
      {open && (
        <MenuContent>
          <UnitSwitch />
        </MenuContent>
      )}
    </MenuContainer>
  )
}

export default Menu
