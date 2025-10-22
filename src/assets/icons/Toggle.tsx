import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ViewStyle } from 'react-native';

interface ToggleProps {
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
}

const Toggle: React.FC<ToggleProps> = ({
  width = 30,
  height = 16,
  color = '#223F61',
  style,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 16"
      fill="none"
      style={style}
    >
      <Path
        d="M7.5 15.5C5.417 15.5 3.646 14.7715 2.187 13.3145C0.728001 11.8575 -0.000998973 10.0885 1.0274e-06 8.0075C0.00100103 5.9265 0.730001 4.154 2.187 2.69C3.646 1.23 5.417 0.5 7.5 0.5H22.5C24.583 0.5 26.354 1.2285 27.813 2.6855C29.272 4.1425 30.001 5.9115 30 7.9925C29.999 10.0735 29.27 11.8455 27.813 13.3085C26.354 14.7695 24.583 15.5 22.5 15.5H7.5ZM22.497 11.75C23.537 11.75 24.4225 11.386 25.1535 10.658C25.8845 9.93 26.25 9.045 26.25 8.003C26.25 6.961 25.886 6.0755 25.158 5.3465C24.43 4.6175 23.545 4.252 22.503 4.25C21.461 4.248 20.5755 4.6125 19.8465 5.3435C19.1175 6.0745 18.752 6.959 18.75 7.997C18.748 9.035 19.1125 9.9205 19.8435 10.6535C20.5745 11.3865 21.459 11.752 22.497 11.75Z"
        fill={color}
      />
    </Svg>
  );
};

export default Toggle;