import { Container, Content, Subtitle, Text, Title } from './styles';

function Banner() {
  return (
    <Container>
      <Content>
        <Title>Wing Chun</Title>
        <Subtitle>A simples arte da auto-defesa</Subtitle>
        <Text>
          É um sistema de luta surgido no sul da China que se distingue pela economia de
          movimentos, sendo um sistema de defesa pessoal. Simples e eficiente, descarta
          todo movimento acrobático. É uma arte marcial singular, desenvolvida para
          permitir que qualquer tipo de pessoa, independentemente de tamanho, força ou
          sexo, possa se defender de agressores maiores e mais fortes.
        </Text>
      </Content>
    </Container>
  );
}

export { Banner };
