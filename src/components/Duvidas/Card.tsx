import { useCard } from '@/hooks';

import { Box, CardTitle } from './styles';

function Card() {
  const { card } = useCard();

  if (!card.title) return null;

  return (
    <Box>
      <CardTitle>{card.title}</CardTitle>
      {card.text}
    </Box>
  );
}

export { Card };
