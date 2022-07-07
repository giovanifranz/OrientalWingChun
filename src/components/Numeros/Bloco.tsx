import { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Box, Numero, Text } from './styles';

interface Props {
  valor: string;
  text: string;
  opacity?: boolean;
  border?: boolean;
}

function BlocoComponent({ valor, text, opacity = false, border = false }: Props) {
  const theme = {
    opacity,
    border,
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Numero>{valor}</Numero>
        <Text>{text}</Text>
      </Box>
    </ThemeProvider>
  );
}

const Bloco = memo(BlocoComponent, (prevProps, nextProps) =>
  Object.is(prevProps, nextProps),
);

export { Bloco };
