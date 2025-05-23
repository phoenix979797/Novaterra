import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 155 227" fill="none" {...props}>
      <Path
        d="M68.9485 2.68257C74.3824 0.214887 80.6174 0.214891 86.0513 2.68258L142.37 28.2586C149.757 31.6131 154.5 38.9764 154.5 47.0889L154.5 179.411C154.5 187.524 149.757 194.887 142.37 198.241L86.0515 223.817C80.6176 226.285 74.3826 226.285 68.9487 223.817L12.6299 198.241C5.24335 194.887 0.500237 187.524 0.500224 179.411L0.500021 47.0889C0.500009 38.9764 5.24315 31.613 12.6297 28.2586L68.9485 2.68257Z"
        fill="black"
        fillOpacity="0.28"
        stroke="url(#paint0_linear_2351_9808)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2351_9808"
          x1="77.5"
          y1="-1.75"
          x2="77.5"
          y2="228.25"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3FB541" />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
