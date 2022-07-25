import { lazy } from 'react';

import Instrutor from '@/assets/instrutor.png';
import { useWindowsSize } from '@/hooks/useWindowsSize';

import { Box, Container, Content, Flex, ImgTreino, List, Text, Title } from './styles';

const Simbolo = lazy(() => import('./Simbolo'));

function Porque() {
  const { width, isDesktop } = useWindowsSize();
  return (
    <Container>
      <Content>
        {isDesktop && <ImgTreino src={Instrutor} alt="Instrutor" loading="lazy" />}
        <Flex>
          {width > 768 && <Simbolo />}
          <Box>
            <Title>Por que o Wing Chun?</Title>
            <Text>
              Além do benefício físico, e do aprendizado de técnicas de auto-defesa, os
              benefícios do Wing Chun também incluem:
            </Text>
            <List>
              <li>Melhora da atenção</li>
              <li>Redução do estresse</li>
              <li>Aumento de confiança</li>
            </List>
          </Box>
        </Flex>
      </Content>
    </Container>
  );
}

export { Porque };
