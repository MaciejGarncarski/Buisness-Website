import { useState, createContext, useContext } from 'react';
import { TChildren } from '../Types/types';

const CursorHoverContext = createContext<CursorContextData | false>(false);

const useProviderCursor = () => {
  const [isActive, setIsActive] = useState<true | false>(false);
  return { isActive, setIsActive };
};

const CursorProvider = ({ children }: TChildren) => {
  const value = useProviderCursor();
  return <CursorHoverContext.Provider value={value}>{children}</CursorHoverContext.Provider>;
};

const useCursorContext = () => {
  const context = useContext(CursorHoverContext);
  if (!context) throw new Error('useContext must be used inside CursorProvider');
  return context;
};

type CursorContextData = ReturnType<typeof useProviderCursor>;

export { CursorProvider, useCursorContext };
