// Authentication.tsx
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface AuthenticationProps {
  width?: number;
  height?: number;
  color?: string;
}

const Authentication: React.FC<AuthenticationProps> = ({
  width = 15,
  height = 19,
  color = '#223F61',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 19"
      fill="none"
    >
      <Path
        d="M8.5 7H6.5C4.154 7 2.982 7 2.174 7.62C1.96591 7.77966 1.77966 7.96591 1.62 8.174C1 8.982 1 10.154 1 12.5C1 14.846 1 16.018 1.62 16.826C1.77966 17.0341 1.96591 17.2203 2.174 17.38C2.982 18 4.154 18 6.5 18H8.5C10.846 18 12.018 18 12.826 17.38C13.0341 17.2203 13.2203 17.0341 13.38 16.826C14 16.018 14 14.846 14 12.5C14 10.154 14 8.982 13.38 8.174C13.2203 7.96591 13.0341 7.77966 12.826 7.62C12.018 7 10.846 7 8.5 7Z"
        stroke={color}
      />
      <Path
        d="M10.75 7V4.25C10.75 3.38805 10.4076 2.5614 9.7981 1.9519C9.1886 1.34241 8.36195 1 7.5 1C6.63805 1 5.8114 1.34241 5.2019 1.9519C4.59241 2.5614 4.25 3.38805 4.25 4.25V7"
        stroke={color}
        strokeLinecap="round"
      />
      <Path
        d="M5 12.5C5 12.5 6 13 6.5 14.5C6.5 14.5 8 11.5 10 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Authentication;