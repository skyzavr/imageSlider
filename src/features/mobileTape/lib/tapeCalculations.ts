const padding = 20;

export const imgTapeMobile = 64;

export const calcPicInTheTape = (tapeWidth: number) =>
  Math.floor(tapeWidth / imgTapeMobile);

export const totalWidth = (innerWidth: number) => innerWidth - padding * 2;
