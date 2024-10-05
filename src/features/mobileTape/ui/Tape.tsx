import { useRef, useState } from 'react';

import { useSwipeTape } from '@widgets/MobileGallery/lib/useSwipeTape';
import { TapeContent } from '@entities/TapeContent';
import { totalWidth } from '../lib/tapeCalculations';

import classes from './tape.module.css';

export const MobileTape = () => {
  const [transform, setTransform] = useState<number>(0);
  const tapeWidth = totalWidth(window.innerWidth);
  const imgRef = useRef<HTMLDivElement>(null);

  useSwipeTape({ imgRef, transform, tapeWidth, setTransform });

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
