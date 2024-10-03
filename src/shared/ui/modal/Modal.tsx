import { ReactElement } from 'react';

import { Button } from '@shared/ui';

import classes from './modal.module.css';

type props = {
  isShow: boolean;
  toggleModal: () => void;
  children: ReactElement;
};

export const Modal = (props: props) => {
  const { isShow, toggleModal, children } = props;
  if (!isShow) return null;

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.handlerBtn}>
          <Button btnIcon="close" onClickHandler={toggleModal} />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};
