import { RiWhatsappFill } from 'react-icons/ri';

import { duvidas } from '../../data/duvidasModels';

import { Button } from './Button';
import { Card } from './Card';
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
            <Button key={duvida.title} index={index}>
              {duvida.question}
            </Button>
          ))}
          <Text>Têm mais dúvidas? Fale com o Sifu!</Text>
          <Contato
            href="https://api.whatsapp.com/send?phone=555199188952"
            target="_blank"
            rel="noreferrer"
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
