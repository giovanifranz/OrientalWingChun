import { Fragment } from 'react';

import { useCard } from '@/hooks';

import { Box, CardTitle } from './styles';

function Card() {
  const { card } = useCard();

  return (
    <Fragment>
      {card.title && (
        <Box>
          <CardTitle>{card.title}</CardTitle>
          {card.text}
        </Box>
      )}
    </Fragment>
  );
}

export { Card };
