import { useSelect, useWindowsSize } from '@/hooks'

import { Button } from './Button'
import { Endereco } from './Endereco'
import { Instrutor } from './Instrutor'
import { model } from './models'
import { Box, Container, Content, Flex, TextJornada, Title } from './styles'

function Comece() {
  const { select } = useSelect()
  const { isDesktop } = useWindowsSize()
  return (
    <Container>
      <Content>
        <Box>
          <Title>
            <mark>COM</mark>ECE A TREINAR
          </Title>
          <Flex>
            <div>
              <Button title="Gravataí" />
              <Button title="Cachoeirinha" />
              <Button title="Canoas" />
            </div>
            <Instrutor {...model[select].instrutor} />
            <Endereco {...model[select].endereco} />
            {isDesktop && (
              <TextJornada>
                Uma jornada de mil milhas
                <br /> Começa com um passo.
              </TextJornada>
            )}
          </Flex>
        </Box>
      </Content>
    </Container>
  )
}

export { Comece }
