import { Bloco } from './Bloco'
import { Container, Content } from './styles'

function Numeros() {
  return (
    <Container>
      <Content>
        <Bloco valor="17" text="anos de experiência" />
        <Bloco valor="+100" text="técnicas para aprender" border={true} />
        <Bloco valor="R$80" text="custo fixo mental" opacity={true} />
      </Content>
    </Container>
  )
}

export { Numeros }
