import LogoOWC from '@/assets/logo-owc.png';

import { Container, Content, Image, Title } from './styles';

function HeaderSM() {
  return (
    <Container>
      <Content>
        <Image src={LogoOWC} alt="Oriental Wing Chun" />
        <Title>Oriental Wing Chun</Title>
      </Content>
    </Container>
  );
}

export default HeaderSM;
