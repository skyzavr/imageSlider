import { useEffect, useRef, useState } from 'react';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { useSwipeTape } from '@widgets/MobileGallery/lib/useSwipeTape';
import { TapeContent } from '@entities/TapeContent';
import { data } from '@shared/lib/mock';
import {
  calcPicInTheTape,
  imgTapeMobile,
  totalWidth,
} from '../lib/tapeCalculations';

import classes from './tape.module.css';

export const MobileTape = () => {
  const [transform, setTransform] = useState<number>(0);
  const tapeWidth = totalWidth(window.innerWidth);
  const imgRef = useRef<HTMLDivElement>(null);
  const { shot } = useShotContext();

  useSwipeTape({ imgRef, transform, tapeWidth, setTransform });

  const picInTape = calcPicInTheTape(tapeWidth);

  const calculateSwipedImagePosition = () => {
    const rightBorder = imgTapeMobile * data.length;
    const maxRightPosition = -1 * (rightBorder - tapeWidth);

    const currentPicPosition = (picInTape - 1 - shot) * imgTapeMobile;

    const moveToThePicInTheTape = Math.max(
      currentPicPosition,
      maxRightPosition
    );
    return moveToThePicInTheTape;
  };

  useEffect(() => {
    const imgPosition = calculateSwipedImagePosition();
    const currentTransform = shot < picInTape ? 0 : imgPosition;

    setTransform(currentTransform);
  }, [shot]);

  return (
    <div className={classes.tape} ref={imgRef}>
      <TapeContent
        {...{
          tapeWrapperStyle: {
            width: `${tapeWidth}px`,
            transform: `translateX(${transform}px)`,
          },
          isStyles: true,
          transform: transform,
        }}
      />
    </div>
  );
};
