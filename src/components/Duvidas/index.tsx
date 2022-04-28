import { Button } from './Button'
import { Card } from './Card'
import { duvidas } from './models'
import { Container, Content, Title } from './styles'

function Duvidas() {
  return (
    <Container>
      <Content>
        <div>
          <Title>
            <mark>Dúv</mark>idas Comuns
          </Title>
          {duvidas.map((duvida, index) => (
            <Button key={index} index={index}>
              {duvida.question}
            </Button>
          ))}
        </div>
        <Card />
      </Content>
    </Container>
  )
}

export { Duvidas }
