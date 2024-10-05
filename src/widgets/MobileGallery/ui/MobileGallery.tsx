import { useRef } from 'react';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { MobileViewer } from '@widgets/MobileViewer';
import { Frame } from '@entities/Frame';
import { Pagination } from '@entities/Pagination';
import { fullImgPath } from '@shared/lib/mock';
import { useModal } from '@shared/lib/useModal';
import { useSwipe } from '../lib/useSwipe';

import classes from './mobileGallery.module.css';

export const MobileGallery = () => {
  const { shot, setShot } = useShotContext();
  const { isShow, toggleModal } = useModal();
  const imgRef = useRef<HTMLDivElement>(null);

  useSwipe({ imgRef, setShot, isShow, toggleModal });

  const frameProps = {
    path: fullImgPath(Number(shot + 1)),
    toggleModal,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container} ref={imgRef}>
        <Frame {...frameProps} />
      </div>
      <Pagination />
      <MobileViewer {...{ isShow, toggleModal, frameProps, setShot }} />
    </div>
  );
};
