import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface WrongProps {
  width?: number;
  height?: number;
  color?: string;
}

const Wrong: React.FC<WrongProps> = ({
  width = 10,
  height = 10,
  color = '#FBFDFF',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 10" fill="none">
      <Path
        d="M9.0625 0.9375L0.9375 9.0625M0.9375 0.9375L9.0625 9.0625"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Wrong;