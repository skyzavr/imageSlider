import { DesktopGallery } from '@widgets/DesktopGallery';
import { MobileGallery } from '@widgets/MobileGallery';
import { desktopMinWidth } from '@shared/config/constant';

import classes from './gallery.module.css';

export const GalleryWrapper = () => {
  const isDesktopScreen = window.innerWidth >= desktopMinWidth;
  return (
    <div className={classes.wrapper}>
      {isDesktopScreen ? <DesktopGallery /> : <MobileGallery />}
    </div>
  );
};
