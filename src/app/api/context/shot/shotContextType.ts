import { ReactNode } from 'react';

import { numberState } from '@shared/lib/dispatchTypes';

export const initialValue = 0;

export type ShotContextType = {
  shot: number;
  setShot: numberState;
};

export type ContextProps = {
  children: ReactNode;
};
