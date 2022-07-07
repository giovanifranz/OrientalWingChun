import { memo } from 'react';

import { EnderecoProps } from '../../../data/comeceModels';

import { Local, TextLocal } from './styles';

function EnderecoComponent({ local, rua, endereco }: EnderecoProps) {
  return (
    <div>
      <Local>{local}</Local>
      <TextLocal>
        {rua}
        <br />
        {endereco}
      </TextLocal>
    </div>
  );
}
const Endereco = memo(EnderecoComponent, (prevProps, nextProps) =>
  Object.is(prevProps, nextProps),
);
export { Endereco };
