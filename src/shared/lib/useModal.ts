import { useState } from 'react';

import { booleanState } from './dispatchTypes';

type modalPair = [boolean, booleanState];

export const useModal = () => {
  const [isShow, setIsShowModal]: modalPair = useState<boolean>(false);

  const toggleModal = () => setIsShowModal((prev) => !prev);

  return { isShow, toggleModal };
};
