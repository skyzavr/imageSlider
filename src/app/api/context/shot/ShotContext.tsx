import { createContext, useContext, useState } from 'react';
import { ContextProps, initialValue, ShotContextType } from './shotContextType';

export const ShotContext = createContext<ShotContextType>({
  shot: initialValue,
  setShot: () => Function,
});

export const ShotContextProvider = ({ children }: ContextProps) => {
  const [shot, setShot] = useState<number>(initialValue);

  return (
    <ShotContext.Provider value={{ shot, setShot }}>
      {children}
    </ShotContext.Provider>
  );
};

export const useShotContext = () => useContext(ShotContext);
