import { useState, useEffect, useCallback, RefObject } from 'react';

type props = {
  imgRef: RefObject<HTMLDivElement>;
};

export const useTouch = (props: props) => {
  const { imgRef } = props;
  const [touchXStart, setTouchXStart] = useState<number>(0);
  const [touchXEnd, setTouchXEnd] = useState<number>(0);

  const touchStartHandler = (e: TouchEvent) => {
    if (!imgRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    setTouchXStart(e.touches[0].clientX);
  };
  const touchEndHandler = (e: TouchEvent) => {
    if (!imgRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    setTouchXEnd(e.changedTouches[0].clientX);
  };

  const onTouchStart = useCallback(touchStartHandler, [imgRef]);
  const onTouchEnd = useCallback(touchEndHandler, [imgRef]);

  useEffect(() => {
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [onTouchEnd, onTouchStart]);

  return [touchXStart, touchXEnd];
};
