import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface UploadIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const UploadIcon: React.FC<UploadIconProps> = ({
  width = 24,
  height = 24,
  stroke = '#223F61',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4 16.004V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H17C17.7957 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V16M12 4.5V15.5M12 15.5L15.5 12M12 15.5L8.5 12"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default UploadIcon;