import { useState, createContext, useContext } from 'react';

import { Children } from '../Types/types';

const CursorHoverContext = createContext<MobileContextData | false>(false);

const useProviderMobile = () => {
  const [isMobile, setIsMobile] = useState<true | false>(true);
  return { isMobile, setIsMobile };
};

const MobileContextProvider = ({ children }: Children) => {
  const value = useProviderMobile();
  return <CursorHoverContext.Provider value={value}>{children}</CursorHoverContext.Provider>;
};

const useMobileContext = () => {
  const context = useContext(CursorHoverContext);
  if (!context) throw new Error('useContext must be used inside CursorProvider');
  return context;
};

type MobileContextData = ReturnType<typeof useProviderMobile>;

export { MobileContextProvider, useMobileContext };
