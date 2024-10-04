import { MouseEventHandler } from 'react';

import classes from './frame.module.css';

type props = {
  path: string;
  toggleModal?: MouseEventHandler;
};

export const Frame = ({ path, toggleModal }: props) => {
  return (
    <article className={classes.frame} onClick={toggleModal}>
      <img src={path} />
    </article>
  );
};
