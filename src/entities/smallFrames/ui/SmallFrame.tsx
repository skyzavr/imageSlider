import classNames from 'classnames';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { minimizeImgPath } from '@shared/lib/mock';
import { useTouch } from '@shared/lib/useTouch';

import classes from './smallFrame.module.css';
import { useRef } from 'react';

export const SmallFrame = ({ i, el }: { i: number; el: string }) => {
  const { shot, setShot } = useShotContext();
  const imgRef = useRef<HTMLDivElement>(null);

  const [touchXStart, touchXEnd] = useTouch({ imgRef });
  const onTouchHandler = (shot: number) => {
    if (touchXEnd - touchXStart === 0) setShot(shot);
  };
  const setCurrentClass = (i: number) =>
    classNames(classes.tapeShot, i === shot ? classes.currentShot : '');

  return (
    <div
      className={setCurrentClass(i)}
      onClick={() => setShot(i)}
      onTouchEnd={() => onTouchHandler(i)}
      key={el}
      ref={imgRef}
    >
      <img src={minimizeImgPath(el)} />
    </div>
  );
};
