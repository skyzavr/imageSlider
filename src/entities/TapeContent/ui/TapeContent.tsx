import { SmallFrame } from '@entities/smallFrames';
import { data } from '@shared/lib/mock';

import classes from './tapeContent.module.css';

type tapeWrapperStyle = { [key: string]: string };

type props = {
  tapeWrapperStyle: tapeWrapperStyle;
  isStyles?: boolean;
};

export const TapeContent = (props: props) => {
  const { tapeWrapperStyle, isStyles = false } = props;

  const WrapperStyles = isStyles ? classes.tapeWrapper : '';

  return (
    <div style={tapeWrapperStyle} className={WrapperStyles}>
      {data.map((el, i) => (
        <SmallFrame {...{ i, el }} key={el} />
      ))}
    </div>
  );
};
