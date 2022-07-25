import { memo } from 'react';

import { Box, Numero, Text } from './styles';

type Props = {
  valor: string;
  text: string;
  opacity?: boolean;
  border?: boolean;
};

const Bloco = memo(({ valor, text, opacity = false, border = false }: Props) => (
  <Box border={border}>
    <Numero opacity={opacity}>{valor}</Numero>
    <Text>{text}</Text>
  </Box>
));

export { Bloco };
export type { Props as BlocoProps };
