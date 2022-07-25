import { memo } from 'react';

import { EnderecoProps } from '../../data/comeceModels';

import { Local, TextLocal } from './styles';

const Endereco = memo(({ local, rua, endereco }: EnderecoProps) => (
  <div>
    <Local>{local}</Local>
    <TextLocal>
      {rua}
      <br />
      {endereco}
    </TextLocal>
  </div>
));

export { Endereco };
