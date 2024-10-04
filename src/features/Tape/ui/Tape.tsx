import { WheelEvent } from 'react';

import { SmallFrame } from '@entities/smallFrames';
import { data } from '@shared/lib/mock';
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
  const { tapePosition, setTapePosition, tapeImgNum } = props;
  const currentTapePos = tapePosition * tapeShotSize;

  const tapeWrapperStyle = {
    height: `${tapeWrapperSize(tapeImgNum)}px`,
    top: `${currentTapePos}px`,
  };

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
  };
  return (
    <div className={classes.tape} onWheel={onWheelHandler}>
      <div style={tapeWrapperStyle}>
        {data.map((el, i) => (
          <SmallFrame {...{ i, el }} key={el} />
        ))}
      </div>
    </div>
  );
};
