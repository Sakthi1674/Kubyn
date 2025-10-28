import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExpenseIcon = ({ width = 32, height = 32, color = '#FBFDFF' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <Path
      d="M29.3327 15.9998C29.3327 23.3598 23.3593 29.3332 15.9993 29.3332C8.63935 29.3332 2.66602 23.3598 2.66602 15.9998C2.66602 8.63984 8.63935 2.6665 15.9993 2.6665"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.3333 7.99984V2.6665H24"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.666 9.33317L29.3327 2.6665"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 11.75H19.5M12.5 14.6667H19.5M17.4583 22.25L12.5 17.5833H14.25C18.1391 17.5833 18.1391 11.75 14.25 11.75"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExpenseIcon;
