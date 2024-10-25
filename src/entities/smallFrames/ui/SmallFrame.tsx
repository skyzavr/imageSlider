import classNames from 'classnames';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { minimizeImgPath } from '@shared/lib/mock';

import classes from './smallFrame.module.css';

export const SmallFrame = ({ i, el }: { i: number; el: string }) => {
  const { shot, setShot } = useShotContext();

  const setCurrentClass = (i: number) =>
    classNames(classes.tapeShot, i === shot ? classes.currentShot : '');

  return (
    <div className={setCurrentClass(i)} onClick={() => setShot(i)} key={el}>
      <img src={minimizeImgPath(el)} />
    </div>
  );
};
