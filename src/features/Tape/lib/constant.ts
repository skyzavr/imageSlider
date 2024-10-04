// export const tapeImgNum = 11;
const border = 2;
const tapeShotHeight = 50;
const tapeShotMargin = 10;

// full shot height (as well as width)
export const widthTapeFrame = tapeShotHeight + border * 2;
export const tapeShotSize = widthTapeFrame + tapeShotMargin;

//calc visible height of tape wrapper
export const tapeWrapperSize = (tapeImgNum = 6) =>
  tapeImgNum * tapeShotSize + tapeShotMargin;

export const calcMaxTapePos = (galleryLength: number, tapeImgNum: number) =>
  (galleryLength - tapeImgNum) * tapeShotSize;
