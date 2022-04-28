import { useWindowsSize } from '@/hooks/useWindowsSize'

import Instrutor from '../../../assets/instrutor.png'
import Simbolo from '../../../assets/simbolo.png'

import { Box, Container, Content, Flex, ImgBrasão, ImgTreino, List, Text, Title } from './styles'

function Porque() {
  const { width, isDesktop } = useWindowsSize()
  return (
    <Container>
      <Content>
        {isDesktop && <ImgTreino src={Instrutor} alt="Instrutor" />}
        <Flex>
          {width > 768 && <ImgBrasão src={Simbolo} alt="Simbolo" />}
          <Box>
            <Title>Por que o Wing Chun?</Title>
            <Text>
              Além do benefício físico, e do aprendizado de técnicas de auto-defesa, os benefícios do Wing
              Chun também incluem:
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
  )
}

export { Porque }
