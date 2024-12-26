import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function GeneralCard(props: any) {
  return (
    <Svg
      viewBox="0 0 313 294"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      {...props}
    >
      <Path
        d="M0.778412 85.7034C0.778412 79.0741 4.55296 73.0232 10.5069 70.1079L148.864 2.36268C153.682 0.00382066 159.319 0.00381589 164.136 2.36268L302.494 70.1079C308.447 73.0232 312.222 79.0741 312.222 85.7034V208.297C312.222 214.926 308.447 220.977 302.494 223.892L164.136 291.637C159.319 293.996 153.682 293.996 148.864 291.637L10.5069 223.892C4.55297 220.977 0.778412 214.926 0.778412 208.297V85.7034Z"
        stroke="url(#paint0_linear_2054_2451)"
        strokeWidth="1.1203"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2054_2451"
          x1="156.5"
          y1="-2"
          x2="156.5"
          y2="296"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5B300" />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
