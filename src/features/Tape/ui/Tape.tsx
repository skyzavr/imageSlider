import { useEffect, useState, WheelEvent } from 'react';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { TapeContent } from '@entities/TapeContent';
import { numberState } from '@shared/lib/dispatchTypes';
import { isInTapeBorder } from '../lib/tapeBorderHelper';
import { tapeWrapperSize, tapeShotSize } from '../lib/constant';

import classes from './tape.module.css';

type tapeProps = {
  tapePosition: number;
  setTapePosition: numberState;
  tapeImgNum: number;
};

export const Tape = (props: tapeProps) => {
  const { shot } = useShotContext();
  const { tapePosition, setTapePosition, tapeImgNum } = props;
  const [pos, setPos] = useState(`${tapePosition * tapeShotSize}px`);
  const tapeWrapperStyle = {
    height: `${tapeWrapperSize(tapeImgNum)}px`,
    top: pos,
  };

  useEffect(() => {
    const position = shot >= tapeImgNum ? tapeImgNum - shot - 1 : 0;
    setTapePosition(position);
    setPos(`${position * tapeShotSize}px`);
  }, [shot]);

  useEffect(() => {
    setPos(`${tapePosition * tapeShotSize}px`);
  }, [tapePosition]);

  const onWheelHandler = (e: WheelEvent) => {
    const deltaY = Number(e.deltaY);

    const isForbTop = deltaY < 0;
    const isForbBottom = deltaY > 0;
    const direction = isForbBottom ? -1 : 1;

    const outOfBorder = isInTapeBorder(
      isForbTop,
      isForbBottom,
      tapePosition,
      tapeImgNum
    );
    if (outOfBorder) return;
    setTapePosition((prev) => prev + direction);
    setPos(`${(tapePosition + direction) * tapeShotSize}px`);
  };
  return (
    <div className={classes.tape} onWheel={onWheelHandler}>
      <TapeContent {...{ tapeWrapperStyle }} />
    </div>
  );
};
