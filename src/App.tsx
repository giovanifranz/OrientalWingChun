import { lazy } from 'react'

import { Banner, Comece, Duvidas, Escola, Numeros, Porque } from '@/components'
import { CardProvider, SelectProvider, useWindowsSize } from '@/hooks'

const Header = lazy(() => import('@/components/Header/Header'))
const HeaderSM = lazy(() => import('@/components/Header/HeaderSM'))

function App() {
  const { isDesktop } = useWindowsSize()

  return (
    <CardProvider>
      {isDesktop ? <Header /> : <HeaderSM />}

      <Banner />
      <Escola />
      <Porque />
      <Duvidas />
      <Numeros />
      <SelectProvider>
        <Comece />
      </SelectProvider>
    </CardProvider>
  )
}

export default App
