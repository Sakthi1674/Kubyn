import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface DropdownArrowProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  strokeWidth?: number;
}

const DropdownArrow: React.FC<DropdownArrowProps> = ({
  width = 16,
  height = 16,
  color = '#223F61',
  opacity = 0.46,
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M4.66602 6.66699L7.99935 10.0003L11.3327 6.66699"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
      />
    </Svg>
  );
};

export default DropdownArrow;