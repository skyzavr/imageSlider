import { useShotContext } from '@app/api/context/shot/ShotContext';
import { TapeWrapper } from '@widgets/TapeWrapper';
import { Viewer } from '@widgets/DesktopViewer';
import { Frame } from '@entities/Frame';
import { fullImgPath } from '@shared/lib/mock';
import { useModal } from '@shared/lib/useModal';

import classes from './desktopGallery.module.css';

export const DesktopGallery = () => {
  const { shot } = useShotContext();
  const { isShow, toggleModal } = useModal();

  const frameProps = {
    path: fullImgPath(Number(shot + 1)),
    toggleModal,
  };

  return (
    <div className={classes.wrapper}>
      <TapeWrapper tapeImgNum={6} />
      <Frame {...frameProps} />
      <Viewer {...{ isShow, toggleModal }} />
    </div>
  );
};
