import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  const id = Math.random();

  return (
    <Svg viewBox="0 0 156 268" fill="none" {...props}>
      <Path
        d="M69.4485 2.43257C74.8824 -0.0351131 81.1174 -0.0351092 86.5513 2.43258L142.87 28.0086C150.257 31.3631 155 38.7264 155 46.8389L155 220.661C155 228.774 150.257 236.137 142.87 239.491L86.5515 265.067C81.1176 267.535 74.8826 267.535 69.4487 265.067L13.1299 239.491C5.74336 236.137 1.00024 228.774 1.00023 220.661L1.00002 46.8389C1.00001 38.7264 5.74315 31.363 13.1297 28.0086L69.4485 2.43257Z"
        fill="black"
        fillOpacity="0.28"
        stroke={`url(#paint0_linear_${id})`}
      />
      <Defs>
        <LinearGradient
          id={`paint0_linear_${id}`}
          x1="78"
          y1="-2"
          x2="78"
          y2="269.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={props?.color || "#3FB541"} />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
