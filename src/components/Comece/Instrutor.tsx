import { memo } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

import type { InstrutorProps } from './models';
import { Contato, InstrutorBox, TextProfile, Title } from './styles';

function InstrutorComponent({ name, telefone, href }: InstrutorProps) {
  return (
    <InstrutorBox>
      <TextProfile>Instrutor</TextProfile>
      <Title>{name}</Title>
      <Contato href={href} target="_blank" rel="noreferrer">
        <RiWhatsappFill size={40} />
        {telefone}
      </Contato>
    </InstrutorBox>
  );
}

const Instrutor = memo(InstrutorComponent, (prevProps, nextProps) =>
  Object.is(prevProps, nextProps),
);
export { Instrutor };
