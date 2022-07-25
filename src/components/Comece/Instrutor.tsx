import { memo } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

import type { InstrutorProps } from '../../data/comeceModels';

import { Contato, InstrutorBox, TextProfile, Title } from './styles';

const Instrutor = memo(({ name, telefone, href }: InstrutorProps) => (
  <InstrutorBox>
    <TextProfile>Instrutor</TextProfile>
    <Title>{name}</Title>
    <Contato href={href} target="_blank" rel="noreferrer">
      <RiWhatsappFill size={40} />
      {telefone}
    </Contato>
  </InstrutorBox>
));

export { Instrutor };
