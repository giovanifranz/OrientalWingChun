import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiWhatsappFill,
} from 'react-icons/ri';

import LogoOWC from '@/assets/logo-owc.png';

import { Collumn, Container, Content, HStack, Image, Title } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Title>Oriental</Title>
        <Image src={LogoOWC} alt="Oriental Wing Chun" />
        <Collumn>
          <Title>Wing Chun</Title>
          <HStack>
            <RiInstagramFill size={30} />
            <RiFacebookBoxFill size={30} />
            <RiWhatsappFill size={30} />
          </HStack>
        </Collumn>
      </Content>
    </Container>
  );
}

export default Header;
