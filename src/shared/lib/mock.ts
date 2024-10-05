export const data: string[] = [
  '/img_1.jpg',
  '/img_2.jpg',
  '/img_3.jpg',
  '/img_4.jpg',
  '/img_5.jpg',
  '/img_6.jpg',
  '/img_7.jpg',
  '/img_8.jpg',
  '/img_9.jpg',
  '/img_10.jpg',
  '/img_11.jpg',
];
export const smallPicPath = '/img_minimize';
export const fullPicPath = '/img_full';
export const galleryLength = data.length;
export const firstPosition = 0;

export const minimizeImgPath = (shot: string) => `${smallPicPath}${shot}`;
export const fullImgPath = (shot: number) => `${fullPicPath}/img_${shot}.jpg`;
