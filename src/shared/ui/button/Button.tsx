import classNames from 'classnames';

import { widthTapeFrame as width } from '@features/Tape/lib/constant';
import { icons } from '../Icon/Icon';

import classes from './button.module.css';

type btnProps = {
  isVisible?: boolean;
  btnIcon: string;
  onClickHandler: () => void;
  widthTapeFrame?: number;
  isTop?: boolean;
  isDisabled?: boolean;
  isInTape?: boolean;
};

export const Button = (btnProps: btnProps) => {
  const {
    isVisible = true,
    btnIcon,
    onClickHandler,
    widthTapeFrame = width,
    isTop = true,
    isDisabled = false,
    isInTape = false,
  } = btnProps;

  const cl = classNames(
    classes.button,
    isVisible ? classes.isVisible : '',
    isDisabled ? classes.disabled : '',
    isInTape ? classes.inTape : '',
    isTop ? classes.top : classes.bottom
  );

  const widthStyle = { width: `${widthTapeFrame}px` };

  return (
    <button style={widthStyle} onClick={onClickHandler} className={cl}>
      {icons[btnIcon]}
    </button>
  );
};
