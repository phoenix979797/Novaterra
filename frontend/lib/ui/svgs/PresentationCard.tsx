import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function SvgComponent(props: any) {
  const id = Math.random();

  return (
    <Svg viewBox="0 0 158 300" fill="none" {...props}>
      <Path
        d="M72.3313 2.66243C77.9715 0.0620456 84.4816 0.134094 90.0628 2.85866L145.641 29.9904C152.745 33.4579 157.25 40.6709 157.25 48.5752L157.25 250.925C157.25 258.829 152.745 266.042 145.642 269.51L90.0631 296.641C84.4819 299.366 77.9717 299.438 72.3316 296.838L12.7722 269.378C5.44396 265.999 0.750226 258.666 0.750217 250.597L0.750014 48.9033C0.750006 40.8336 5.44375 33.501 12.7721 30.1223L72.3313 2.66243Z"
        fill="black"
        fillOpacity="0.28"
        stroke={`url(#paint0_linear_${id})`}
      />
      <Defs>
        <LinearGradient
          id={`paint0_linear_${id}`}
          x1="79.0001"
          y1="-2"
          x2="79.0001"
          y2="301.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={props?.color || "#3FB541"} />
          <Stop offset="1" stopColor="#666666" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
