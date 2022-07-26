import { memo } from 'react';
import { VscTriangleRight } from 'react-icons/vsc';

import { TypeCity, useSelect } from '@/hooks/useSelect';

import { Button as StyledButton } from './styles';

type Props = {
  title: string;
};

const Button = memo(({ title }: Props) => {
  const text = title.toLowerCase();
  const { select, setSelect } = useSelect();

  const isOpacity = select === text;

  return (
    <StyledButton opacity={isOpacity} onClick={() => setSelect(text as TypeCity)}>
      <VscTriangleRight size={20} /> {title}
    </StyledButton>
  );
});

export { Button };
export type { Props as ButtonProps };
