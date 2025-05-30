import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 155 227" fill="none" {...props}>
      <Path
        d="M68.6105 2.78558C74.2344 0.10832 80.7654 0.108316 86.3892 2.78558L142.708 29.5963C149.911 33.0254 154.5 40.2917 154.5 48.2694L154.5 178.231C154.5 186.208 149.911 193.475 142.708 196.904L86.3895 223.714C80.7656 226.392 74.2346 226.392 68.6107 223.714L12.2919 196.904C5.08879 193.475 0.500237 186.208 0.500224 178.231L0.500021 48.2694C0.500008 40.2917 5.08855 33.0254 12.2917 29.5963L68.6105 2.78558Z"
        fill="black"
        fillOpacity="0.28"
        stroke="url(#paint0_linear_2351_9914)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2351_9914"
          x1="77.5"
          y1="-2"
          x2="77.5"
          y2="228.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5B300" />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
