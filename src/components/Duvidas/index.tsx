import { RiWhatsappFill } from 'react-icons/ri';

import { Button } from './Button';
import { Card } from './Card';
import { duvidas } from './models';
import { Container, Contato, Content, Text, Title } from './styles';

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
          <Text>Têm mais dúvidas? Fale com o Sifu!</Text>
          <Contato
            href="https://api.whatsapp.com/send?phone=555199188952"
            target="_blank"
          >
            <RiWhatsappFill size={40} /> (51) 9918 -8952
          </Contato>
        </div>
        <Card />
      </Content>
    </Container>
  );
}

export { Duvidas };
