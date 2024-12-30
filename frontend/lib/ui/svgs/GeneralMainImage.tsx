import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Image,
  Pattern,
  Use,
} from "react-native-svg";

export default function GeneralMainImage(props: any) {
  return (
    <Svg viewBox="0 0 313 294" fill="none" {...props}>
      <Path
        d="M0.778412 85.7034C0.778412 79.0741 4.55296 73.0232 10.5069 70.1079L148.864 2.36268C153.682 0.00382066 159.319 0.00381589 164.136 2.36268L302.494 70.1079C308.447 73.0232 312.222 79.0741 312.222 85.7034V208.297C312.222 214.926 308.447 220.977 302.494 223.892L164.136 291.637C159.319 293.996 153.682 293.996 148.864 291.637L10.5069 223.892C4.55297 220.977 0.778412 214.926 0.778412 208.297V85.7034Z"
        stroke="url(#paint0_linear_0_1)"
        strokeWidth="1.1203"
      />
      <Path
        d="M5.81934 88.4371C5.81934 81.5893 9.72087 75.3398 15.8732 72.3329L148.629 7.44849C153.595 5.02108 159.404 5.02108 164.371 7.4485L297.126 72.3329C303.279 75.3398 307.18 81.5893 307.18 88.4371V205.563C307.18 212.411 303.279 218.66 297.126 221.667L164.371 286.552C159.404 288.979 153.595 288.979 148.629 286.552L15.8732 221.667C9.72086 218.66 5.81934 212.411 5.81934 205.563L5.81934 88.4371Z"
        fill="url(#pattern0_0_1)"
      />
      <Defs>
        <Pattern
          id="pattern0_0_1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href="#image0_0_1"
            transform="matrix(0.0015674 0 0 0.00164699 0 -0.00233272)"
          />
        </Pattern>
        <LinearGradient
          id="paint0_linear_0_1"
          x1="156.5"
          y1="-2"
          x2="156.5"
          y2="296"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5B300"></Stop>
          <Stop offset="1" stopColor="#666666" stopOpacity="0"></Stop>
        </LinearGradient>
        <Image id="image0_0_1" width="638" height="610" href={props?.href} />
      </Defs>
    </Svg>
  );
}
