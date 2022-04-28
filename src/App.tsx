import { Fragment, lazy } from 'react'

import { Banner, Escola, Porque } from '@/components'
import { useWindowsSize } from '@/hooks/useWindowsSize'
import { Container } from '@/styles'

const Header = lazy(() => import('@/components/Header/Header'))
const HeaderSM = lazy(() => import('@/components/Header/HeaderSM'))

function App() {
  const { isDesktop } = useWindowsSize()

  return (
    <Fragment>
      {isDesktop ? <Header /> : <HeaderSM />}
      <Container>
        <Banner />
        <Escola />
        <Porque />
      </Container>
    </Fragment>
  )
}

export default App
