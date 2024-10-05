import { useCallback, useEffect, RefObject } from 'react';

import { numberState } from '@shared/lib/dispatchTypes';
import { galleryLength } from '@shared/lib/mock';
import { useTouch } from '../../../shared/lib/useTouch';

type props = {
  imgRef: RefObject<HTMLDivElement>;
  setShot: numberState;
  isShow: boolean;
  toggleModal: () => void;
};

type calculation = (
  touchStart: number,
  onTouchEnd: number,
  toggleModal: () => void,
  swipe: (i: number) => void
) => void;

export const useSwipe = (props: props) => {
  const { imgRef, setShot, isShow, toggleModal } = props;
  const [touchStart, onTouchEnd] = useTouch({ imgRef });

  const calc: calculation = (touchStart, onTouchEnd, toggleModal, swipe) => {
    const deltaXPosition = onTouchEnd - touchStart;
    if (deltaXPosition === 0 && !isShow) return toggleModal();
    if (deltaXPosition !== 0) return swipe(deltaXPosition);
  };
  const swipeHandler = (deltaX: number) => {
    if (deltaX > 0) {
      setShot((prev) => (prev >= 1 ? prev - 1 : prev));
    } else if (deltaX < 0) {
      setShot((prev) => (prev < galleryLength - 1 ? prev + 1 : prev));
    }
  };
  const swipe = useCallback(swipeHandler, [setShot]);

  useEffect(() => {
    calc(touchStart, onTouchEnd, toggleModal, swipe);
  }, [onTouchEnd]);
};
