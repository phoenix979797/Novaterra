import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function DiscoverCard(props: any) {
  return (
    <Svg viewBox="0 0 342 503" preserveAspectRatio="xMinYMin slice"  fill="none" {...props}>
      <Path
        d="M0.5 99.5455C0.5 83.9802 9.6411 69.8661 23.8451 63.5002L154.845 4.78827C165.123 0.182106 176.877 0.182098 187.155 4.78827L318.155 63.5002C332.359 69.8661 341.5 83.9802 341.5 99.5455V403.454C341.5 419.02 332.359 433.134 318.155 439.5L187.155 498.212C176.877 502.818 165.123 502.818 154.845 498.212L23.8451 439.5C9.64112 433.134 0.5 419.02 0.5 403.454V99.5455Z"
        fill="black"
        fillOpacity="0.28"
        stroke="url(#paint0_linear_2054_2388)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2054_2388"
          x1="171"
          y1="-3"
          x2="171"
          y2="506"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5B300" />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
