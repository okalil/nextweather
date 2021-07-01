import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type UnitContextType = {
  units: string
  setUnits: Dispatch<SetStateAction<string>>
}

type UnitContextProps = {
  children: ReactNode
}

export function UnitContextProvider(props: UnitContextProps) {
  const [units, setUnits] = useState('metric')

  return (
    <UnitContext.Provider value={{ units, setUnits }}>
      {props.children}
    </UnitContext.Provider>
  )
}

export const UnitContext = createContext({} as UnitContextType)
