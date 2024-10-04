import { useState } from 'react';

import { Tape } from '@features/Tape';
import { isInTapeBorder } from '@features/Tape/lib/tapeBorderHelper';
import { tapeShotSize, calcMaxTapePos } from '@features/Tape/lib/constant';
import { Button } from '@shared/ui/button/Button';
import { galleryLength } from '@shared/lib/mock';

import classes from './tapeWrapper.module.css';

export const TapeWrapper = ({ tapeImgNum }: { tapeImgNum: number }) => {
  const [tapePosition, setTapePosition] = useState<number>(0);

  const currentTapePos = Math.abs(tapePosition * tapeShotSize);
  const maxTapePos = calcMaxTapePos(galleryLength, tapeImgNum);
  const isShowTopBtn = tapePosition < 0;
  const isShowBottomBtn =
    galleryLength > tapeImgNum && currentTapePos !== maxTapePos;

  const changeTapePosition = (direction: number) => {
    const isTopBtn = direction === 1;
    const outOfBorder = isInTapeBorder(
      isTopBtn,
      !isTopBtn,
      tapePosition,
      tapeImgNum
    );
    if (outOfBorder) return;

    setTapePosition((prev) => prev + direction);
  };

  return (
    <div className={classes.wrapper}>
      <Button
        isVisible={isShowTopBtn}
        btnIcon="top"
        onClickHandler={() => changeTapePosition(1)}
        isInTape={true}
      />
      <Tape {...{ tapePosition, setTapePosition, tapeImgNum }} />
      <Button
        isVisible={isShowBottomBtn}
        btnIcon="bottom"
        isTop={false}
        onClickHandler={() => changeTapePosition(-1)}
        isInTape={true}
      />
    </div>
  );
};
