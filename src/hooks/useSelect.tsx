import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

type TypeCity = 'gravataí' | 'cachoeirinha' | 'canoas';

interface Props {
  select: TypeCity;
  setSelect: Dispatch<SetStateAction<TypeCity>>;
}

type useSelectProviderProps = {
  children: ReactNode;
};

const SelectContext = createContext({} as Props);

function SelectProvider({ children }: useSelectProviderProps) {
  const [select, setSelect] = useState<TypeCity>('gravataí');

  const value = useMemo(() => ({ select, setSelect }), [select, setSelect]);
  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
}

const useSelect = () => useContext(SelectContext);

export { SelectContext, SelectProvider, useSelect };
export type { Props as SelectContextProps, TypeCity };
