import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

import { IDuvida } from '@/components/Duvidas/models'

interface Props {
  card: IDuvida
  setCard: Dispatch<SetStateAction<IDuvida>>
}

type useCardProviderProps = {
  children: ReactNode
}

const CardContext = createContext({} as Props)

function CardProvider({ children }: useCardProviderProps) {
  const [card, setCard] = useState({} as IDuvida)

  return <CardContext.Provider value={{ card, setCard }}>{children}</CardContext.Provider>
}

const useCard = () => useContext(CardContext)

export { CardProvider, CardContext, useCard }
export type { Props as CardContextProps }
