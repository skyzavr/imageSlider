import classNames from 'classnames';

import { icons } from '../Icon/Icon';
import classes from './button.module.css';

type btnProps = {
  isVisible: boolean;
  btnIcon: string;
  onClickHandler: () => void;
  isDisabled?: boolean;
};

export const Button = (btnProps: btnProps) => {
  const { isVisible, btnIcon, onClickHandler, isDisabled = false } = btnProps;
  const cl = classNames(
    classes.button,
    isVisible ? classes.isVisible : '',
    isDisabled ? classes.disabled : ''
  );
  return (
    <button onClick={onClickHandler} className={cl}>
      {icons[btnIcon]}
    </button>
  );
};
