import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DoubleTick = ({ width = 14, height = 9, color = "#121212" }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.5 5.38867L2.83333 7.83333L3.516 7.118M9.83333 0.5L5.79133 4.73467M3.83333 5.38867L6.16667 7.83333L13.1667 0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DoubleTick;
