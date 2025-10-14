import * as React from "react";
import Svg, { Path, G, Mask } from "react-native-svg";

interface FlagProps {
  width?: number;
  height?: number;
}

const Flag: React.FC<FlagProps> = ({ width = 30, height = 23 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 23"
      fill="none"
    >
      <Mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={30}
        height={23}
      >
        <Path d="M0 0H29.8133V22.36H0V0Z" fill="white" />
      </Mask>
      <G mask="url(#mask0)">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 0V22.36H29.8133V0H0Z" fill="#F7FCFF" />
        <Mask
          id="mask1"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={30}
          height={23}
        >
          <Path fillRule="evenodd" clipRule="evenodd" d="M0 0V22.36H29.8133V0H0Z" fill="white" />
        </Mask>
        <G mask="url(#mask1)">
          <Path fillRule="evenodd" clipRule="evenodd" d="M0 0V7.45333H29.8133V0H0Z" fill="#FF8C1A" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M0 14.9066V22.3599H29.8133V14.9066H0Z" fill="#5EAA22" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M11.1797 11.18C11.1797 13.2382 12.8482 14.9067 14.9064 14.9067C16.9645 14.9067 18.633 13.2382 18.633 11.18C18.633 9.12185 16.9645 7.45337 14.9064 7.45337C12.8482 7.45337 11.1797 9.12185 11.1797 11.18ZM17.7014 11.18C17.7014 12.7237 16.45 13.975 14.9064 13.975C13.3627 13.975 12.1114 12.7237 12.1114 11.18C12.1114 9.63636 13.3627 8.38504 14.9064 8.38504C16.45 8.38504 17.7014 9.63636 17.7014 11.18Z" fill="#3D58DB" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M14.901 11.9818L14.3692 14.8892L14.678 11.9498L13.3486 14.5895L14.4731 11.8562L12.4539 14.0145L14.3028 11.7087L11.7573 13.2106L14.181 11.5191L11.3155 12.2431L14.1174 11.3029L11.1641 11.1902L14.1174 11.0776L11.3155 10.1374L14.181 10.8614L11.7573 9.1699L14.3028 10.6718L12.4539 8.36605L14.4731 10.5243L13.3486 7.79099L14.678 10.4307L14.3692 7.49133L14.901 10.3987L15.4329 7.49133L15.124 10.4307L16.4534 7.79099L15.329 10.5243L17.3482 8.36605L15.4993 10.6718L18.0448 9.1699L15.6211 10.8614L18.4866 10.1374L15.6846 11.0776L18.638 11.1902L15.6846 11.3029L18.4866 12.2431L15.6211 11.5191L18.0448 13.2106L15.4993 11.7087L17.3482 14.0145L15.329 11.8562L16.4534 14.5895L15.124 11.9498L15.4329 14.8892L14.901 11.9818Z" fill="#3D58DB" />
        </G>
      </G>
    </Svg>
  );
};

export default Flag;
