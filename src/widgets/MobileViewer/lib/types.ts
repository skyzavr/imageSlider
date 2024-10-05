import { numberState } from '@shared/lib/dispatchTypes';

type frameProps = {
  path: string;
  toggleModal: () => void;
};

export type mobileViewerProps = {
  isShow: boolean;
  toggleModal: () => void;
  frameProps: frameProps;
  setShot: numberState;
};
