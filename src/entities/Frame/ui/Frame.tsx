import { Ref } from 'react';

import classes from './frame.module.css';

type props = {
  path: string;
  imgRef: Ref<HTMLDivElement>;
};

export const Frame = ({ path, imgRef }: props) => {
  return (
    <article className={classes.frame} ref={imgRef}>
      <img src={path} />
    </article>
  );
};
