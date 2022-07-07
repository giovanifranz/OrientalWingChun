import { memo, PropsWithChildren } from 'react';
import { VscTriangleRight } from 'react-icons/vsc';
import { ThemeProvider } from 'styled-components';

import { useCard } from '@/hooks';

import { duvidas } from './models';
import { Button as StyledButton } from './styles';

type Props = {
  index: number;
};

function ButtonComponent({ index, children }: PropsWithChildren<Props>) {
  const { setCard, card } = useCard();

  const theme = {
    opacity: card.opacity,
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledButton onClick={() => setCard(duvidas[index])}>
        <VscTriangleRight size={14} /> {children}
      </StyledButton>
    </ThemeProvider>
  );
}

const Button = memo(ButtonComponent, (prevProps, nextProps) =>
  Object.is(prevProps, nextProps),
);

export { Button };
export type { Props as ButtonProps };
