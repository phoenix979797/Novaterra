import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 154 32" fill="none" {...props}>
      <Path
        d="M0.5 1L63.1368 28.0198C71.9849 31.8366 82.0151 31.8366 90.8632 28.0198L153.5 1"
        stroke="url(#paint0_linear_2337_3017)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2337_3017"
          x1="77"
          y1="34"
          x2="77"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="#999999" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
