import { lazy } from 'react'

import { Banner, Duvidas, Escola, Porque } from '@/components'

import { CardProvider, useWindowsSize } from './hooks'

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
    </CardProvider>
  )
}

export default App
