import { RiFacebookBoxFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'

import emblema from '@/assets/emblema.png'
import highlanderTech from '@/assets/highlandertech-logo.png'
import { useWindowsSize } from '@/hooks'

import { Anchor, Container, Content, Emblema, HighlanderTechLogo, Logo, SocialMedia } from './styles'

function Footer() {
  const { isDesktop } = useWindowsSize()
  return (
    <Container>
      <Content>
        <Emblema href="/">
          <Logo src={emblema} alt="Emblema da Escola Oriental Wing Chun" />
          <h1>Oriental Wing Chun</h1>
        </Emblema>
        {isDesktop && (
          <>
            <SocialMedia>
              <RiInstagramFill size={60} />
              <RiFacebookBoxFill size={60} />
              <RiWhatsappFill size={60} />
            </SocialMedia>
            <Anchor>
              <p>Desenvolvido por</p>
              <HighlanderTechLogo src={highlanderTech} alt="Highlander Tech" />
            </Anchor>
          </>
        )}
      </Content>
    </Container>
  )
}

export { Footer }
