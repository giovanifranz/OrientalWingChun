import Mudjong from '@/assets/mudjong.png';

import { Assinatura, Box, Container, Content, Image, Text, Title } from './styles';

function Escola() {
  return (
    <Container>
      <Content>
        <Box>
          <Title>Nossa Escola</Title>
          <Text>
            A Oriental Wing Chun foi fundada em 2017 com o intuito de transmitir não
            apenas o conhecimento marcial, mas também a filosofia do kung fu oriental que
            vêm através do Wing Chun.
            <br />
            Nossos alunos recebem aulas que mesclam teoria e prática, de forma a trabalhar
            corpo, mente e espírito como um só, os preparando não apenas para situações de
            defesa-pessoal, mas os ajuda a serem pessoas mais confiantes.
          </Text>
          <Assinatura>Sifu Iago Paz</Assinatura>
        </Box>
        <Image src={Mudjong} alt="Mudjong" />
      </Content>
    </Container>
  );
}

export { Escola };
