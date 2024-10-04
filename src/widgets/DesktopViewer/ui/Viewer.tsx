import { createPortal } from 'react-dom';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { TapeWrapper } from '@widgets/TapeWrapper';
import { Frame } from '@entities/Frame';
import { Button } from '@shared/ui';
import { Modal } from '@shared/ui';
import { modalProps } from '@shared/lib/constant';
import { firstPosition, fullImgPath, galleryLength } from '@shared/lib/mock';

import classes from './viewer.module.css';

export const Viewer = ({ isShow, toggleModal }: modalProps) => {
  const { shot, setShot } = useShotContext();

  const isPrevNotAllowed = shot === firstPosition;
  const isNextNotAllowed = shot + 1 === galleryLength;

  const imgPath = fullImgPath(Number(shot + 1));

  const onLeft = () => {
    if (isPrevNotAllowed) return;
    setShot((prev) => prev - 1);
  };

  const onRight = () => {
    if (isNextNotAllowed) return;
    setShot((prev) => prev + 1);
  };

  return createPortal(
    <Modal {...{ isShow, toggleModal }}>
      <div className={classes.container}>
        <div>
          <TapeWrapper tapeImgNum={11} />
        </div>
        <div className={classes.frameWrapper}>
          <Button
            btnIcon="left"
            onClickHandler={onLeft}
            isDisabled={isPrevNotAllowed}
          />
          <div className={classes.framePopUp}>
            <Frame {...{ path: imgPath }} />
          </div>
          <Button
            btnIcon="right"
            onClickHandler={onRight}
            isDisabled={isNextNotAllowed}
          />
        </div>
      </div>
    </Modal>,
    document.body
  );
};
