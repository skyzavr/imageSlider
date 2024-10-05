import { createPortal } from 'react-dom';
import { useRef } from 'react';

import { useSwipe } from '@widgets/MobileGallery/lib/useSwipe';
import { MobileTape } from '@features/mobileTape';
import { Frame } from '@entities/Frame';
import { Modal } from '@shared/ui';
import { mobileViewerProps } from '../lib/types';

import classes from './mobileViewer.module.css';

export const MobileViewer = (props: mobileViewerProps) => {
  const { isShow, toggleModal, frameProps, setShot } = props;

  const imgRef = useRef<HTMLDivElement>(null);

  useSwipe({ imgRef, setShot, isShow, toggleModal });

  return createPortal(
    <Modal {...{ isShow, toggleModal }}>
      <>
        <div ref={imgRef} className={classes.wrapper}>
          <Frame {...{ path: frameProps.path }} />
        </div>
        <MobileTape />
      </>
    </Modal>,
    document.body
  );
};
