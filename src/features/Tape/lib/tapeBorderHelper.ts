import { data } from '@shared/lib/mock';
import { calcMaxTapePos, tapeShotSize } from './constant';

export type tapeBorders = (
  isTop: boolean,
  isBottom: boolean,
  direction: number
) => void;

export type isInTapeBorderProps = (
  isTop: boolean,
  isBottom: boolean,
  tapePosition: number
) => boolean;

export const isInTapeBorder: isInTapeBorderProps = (...params) => {
  const maxTapePos = calcMaxTapePos(data.length);

  const [isTop, isBottom, tapePosition] = params;
  const currentTapePos = Math.abs(tapePosition * tapeShotSize);

  const isTouchTop = tapePosition >= 0 && isTop;
  const isTouchBottom = currentTapePos >= maxTapePos && isBottom;

  return isTouchTop || isTouchBottom;
};
