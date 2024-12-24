import Svg, { Defs, Pattern, Path, Use, Image } from "react-native-svg";

export default function DiscoverCardImage(props: any) {
  return (
    <Svg viewBox="0 0 310 171" fill="none" {...props}>
      <Path
        d="M0 81.6323C0 64.7365 10.616 49.6628 26.5241 43.9707L141.524 2.8219C150.238 -0.295906 159.762 -0.295913 168.476 2.82189L283.476 43.9707C299.384 49.6628 310 64.7365 310 81.6323V155C310 163.837 302.837 171 294 171H155H16C7.16345 171 0 163.837 0 155V81.6323Z"
        fill="url(#pattern0_2054_2392)"
      />
      <Defs>
        <Pattern
          id="pattern0_2054_2392"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href="#image0_2054_2392"
            transform="matrix(0.0015674 0 0 0.00280863 0 -0.356633)"
          />
        </Pattern>
        <Image
          id="image0_2054_2392"
          width="638"
          height="610"
          href={props?.href}
        />
      </Defs>
    </Svg>
  );
}
