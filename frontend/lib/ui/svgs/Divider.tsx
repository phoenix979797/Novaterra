import Svg, { Defs, LinearGradient, Line, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 375 1" fill="none" {...props}>
      <Line y1="0.5" x2="375" y2="0.5" stroke="url(#paint0_linear_2092_866)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_2092_866"
          x1="0"
          y1="1.5"
          x2="375"
          y2="1.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="0.49" stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
