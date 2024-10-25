import { RefObject, useEffect } from 'react';

import { imgTapeMobile } from '@features/mobileTape/lib/tapeCalculations';
import { data } from '@shared/lib/mock';
import { numberState } from '@shared/lib/dispatchTypes';
import { useTouch } from '../../../shared/lib/useTouch';

type props = {
  imgRef: RefObject<HTMLDivElement>;
  transform: number;
  tapeWidth: number;
  setTransform: numberState;
};

export const useSwipeTape = (props: props) => {
  const { imgRef, transform, tapeWidth, setTransform } = props;

  const [touchStart, onTouchEnd] = useTouch({ imgRef });

  const rightBorder = imgTapeMobile * data.length;
  const rightBorderTransform = -1 * (rightBorder - tapeWidth);
  const deltaX = onTouchEnd - touchStart;

  const touchEndHandler = (deltaXPosition: number) => {
    let currentTransform = transform;
    if (deltaXPosition > 0 && currentTransform >= 0) currentTransform = 0;
    else currentTransform = Math.min(deltaXPosition + currentTransform, 0);
    if (currentTransform < rightBorderTransform)
      currentTransform = rightBorderTransform;

    setTransform(currentTransform);
  };

  useEffect(() => {
    touchEndHandler(deltaX);
  }, [onTouchEnd, touchStart]);
};
