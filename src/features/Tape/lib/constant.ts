export const tapeImgNum = 6;
const border = 2;
const tapeShotHeight = 50;
const tapeShotMargin = 10;

// full shot height (as well as width)
export const widthTapeFrame = tapeShotHeight + border * 2;
export const tapeShotSize = widthTapeFrame + tapeShotMargin;

//calc visible height of tape wrapper
export const tapeWrapperSize = tapeImgNum * tapeShotSize + tapeShotMargin;

export const calcMaxTapePos = (galleryLength: number) =>
  (galleryLength - tapeImgNum) * tapeShotSize;
