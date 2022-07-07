import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useMemo, useState } from 'react'

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

  const value = useMemo(() => ({ card, setCard }), [card, setCard])
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

const useCard = () => useContext(CardContext)

export { CardProvider, CardContext, useCard }
export type { Props as CardContextProps }
