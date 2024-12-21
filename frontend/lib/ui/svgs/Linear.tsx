import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 375 94" fill="none" {...props}>
      <Path
        d="M-12 1L174.977 89.8602C184.483 94.3779 195.517 94.3779 205.023 89.8602L392 1"
        stroke="url(#paint0_linear_2351_9989)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2351_9989"
          x1="190"
          y1="97"
          x2="190"
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
