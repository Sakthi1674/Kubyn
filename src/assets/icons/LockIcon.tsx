import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface LockIconProps extends SvgProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const LockIcon: React.FC<LockIconProps> = ({
  width = 20,
  height = 23,
  stroke = '#FBFDFF',
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 20 23"
    fill="none"
    {...props}
  >
    <Path
      d="M16.709 2.6403C14.817 1.66009 12.5 1.08301 10 1.08301C7.5 1.08301 5.184 1.66009 3.291 2.6403C2.363 3.12155 1.899 3.36217 1.45 4.11842C1.001 4.87467 1 5.60592 1 7.07051V10.7059C1 16.6257 5.542 19.9163 8.173 21.3268C8.907 21.7195 9.273 21.9163 10 21.9163C10.727 21.9163 11.093 21.7195 11.827 21.3268C14.457 19.9163 19 16.6247 19 10.7049V7.07051C19 5.60592 19 4.87467 18.55 4.11842C18.1 3.36217 17.637 3.12155 16.709 2.6403Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 9.41634V7.85384C8 7.30131 8.21071 6.7714 8.58579 6.3807C8.96086 5.99 9.46957 5.77051 10 5.77051C10.5304 5.77051 11.0391 5.99 11.4142 6.3807C11.7893 6.7714 12 7.30131 12 7.85384V9.41634M8 9.41634H12M8 9.41634C7.60218 9.41634 7.22064 9.58096 6.93934 9.87399C6.65804 10.167 6.5 10.5644 6.5 10.9788V12.5413C6.5 12.9557 6.65804 13.3532 6.93934 13.6462C7.22064 13.9392 7.60218 14.1038 8 14.1038H12C12.3978 14.1038 12.7794 13.9392 13.0607 13.6462C13.342 13.3532 13.5 12.9557 13.5 12.5413V10.9788C13.5 10.5644 13.342 10.167 13.0607 9.87399C12.7794 9.58096 12.3978 9.41634 12 9.41634"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LockIcon;