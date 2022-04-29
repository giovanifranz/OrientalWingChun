import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

type TypeCity = 'gravata' | 'cachoeirinha' | 'canoas'

interface Props {
  select: TypeCity
  setSelect: Dispatch<SetStateAction<TypeCity>>
}

type useSelectProviderProps = {
  children: ReactNode
}

const SelectContext = createContext({} as Props)

function SelectProvider({ children }: useSelectProviderProps) {
  const [select, setSelect] = useState<TypeCity>('cachoeirinha')

  return <SelectContext.Provider value={{ select, setSelect }}>{children}</SelectContext.Provider>
}

const useSelect = () => useContext(SelectContext)

export { SelectProvider, SelectContext, useSelect }
export type { Props as SelectContextProps, TypeCity }
