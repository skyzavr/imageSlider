import classNames from 'classnames';

import { useShotContext } from '@app/api/context/shot/ShotContext';
import { galleryLength } from '@shared/lib/mock';
import { dotShift, paginationGap } from '../lib/constant';

import classes from './pagination.module.css';

export const Pagination = () => {
  const { shot } = useShotContext();

  const calcTransition = () => {
    if (shot <= paginationGap) return 0;
    if (shot < galleryLength - paginationGap) return -1 * dotShift(shot);
  };

  const createPaginationList = (): null[] => {
    const dotsArray = new Array<null>(galleryLength).fill(null);
    return dotsArray;
  };

  const currentDotArea = (index: number) => {
    const currentDot = index === shot ? classes.current : '';
    return classNames(classes.paginationDot, currentDot);
  };

  const dotsList = () =>
    createPaginationList().map((_, ind) => (
      <span key={ind} className={currentDotArea(ind)}></span>
    ));

  if (galleryLength <= 1) return null;
  return (
    <article>
      <div className={classes.wrapper}>
        <div
          className={classes.paginationList}
          style={{ transform: `translate(${calcTransition() as number}px)` }}
        >
          {dotsList()}
        </div>
      </div>
    </article>
  );
};
