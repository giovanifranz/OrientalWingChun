import { RiFacebookBoxFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

import { useWindowsSize } from '@/hooks';

import { Highlandertech } from './Highlandertech';
import { Logo } from './Logo';
import { Anchor, Container, Content, Emblema, SocialMedia } from './styles';

function Footer() {
  const { isDesktop } = useWindowsSize();
  return (
    <Container>
      <Content>
        <Emblema href="/">
          <Logo />
        </Emblema>
        {isDesktop && (
          <>
            <SocialMedia>
              <RiInstagramFill size={60} />
              <RiFacebookBoxFill size={60} />
              <RiWhatsappFill size={60} />
            </SocialMedia>
            <Anchor
              href="https://www.highlandertech.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Desenvolvido por</p>
              <Highlandertech />
            </Anchor>
          </>
        )}
      </Content>
    </Container>
  );
}

export { Footer };
