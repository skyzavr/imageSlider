import { ShotContextProvider } from '@app/api/context/shot/ShotContext';

import { DesktopGallery } from '@widgets/DesktopGallery';
import { MobileGallery } from '@widgets/MobileGallery';
import { desktopMinWidth } from '@shared/lib/constant';

import classes from './gallery.module.css';

export const GalleryWrapper = () => {
  const isDesktopScreen = window.innerWidth >= desktopMinWidth;
  const slider = isDesktopScreen ? <DesktopGallery /> : <MobileGallery />;

  return (
    <div className={classes.wrapper}>
      <ShotContextProvider>{slider}</ShotContextProvider>
    </div>
  );
};
