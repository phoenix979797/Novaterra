import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 189 143" fill="none" {...props}>
      <Path
        d="M87.3502 2.44025C92.8395 -0.0296527 99.1325 0.0146141 104.587 2.56149L176.07 35.9421C183.348 39.341 188 46.6474 188 54.6806L188 88.6841C188 96.8824 183.158 104.307 175.655 107.611L100.544 140.691C95.1152 143.082 88.9209 143.027 83.5355 140.539L12.5082 107.727C5.18756 104.346 0.500223 97.0169 0.500191 88.9529L0.500055 54.891C0.500022 46.7525 5.27327 39.3705 12.6952 36.0311L87.3502 2.44025Z"
        fill="black"
        fillOpacity="0.28"
        stroke="url(#paint0_linear_2351_9994)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2351_9994"
          x1="94.2502"
          y1="145"
          x2="94.2502"
          y2="-2"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="#999999" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
