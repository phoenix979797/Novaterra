import Svg, { Defs, Pattern, Path, Use, Image } from "react-native-svg";

export default function GeneralCardImage(props: any) {
  const id = Math.random();

  return (
    <Svg
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      viewBox="0 0 303 284"
      {...props}
    >
      <Path
        d="M0.819336 83.4371C0.819336 76.5893 4.72087 70.3398 10.8732 67.3329L143.629 2.44849C148.595 0.0210762 154.404 0.0210831 159.371 2.4485L292.126 67.3329C298.279 70.3398 302.18 76.5893 302.18 83.4371V200.563C302.18 207.411 298.279 213.66 292.126 216.667L159.371 281.552C154.404 283.979 148.595 283.979 143.629 281.552L10.8732 216.667C4.72086 213.66 0.819336 207.411 0.819336 200.563L0.819336 83.4371Z"
        fill={`url(#pattern0_${id}`}
      />
      <Defs>
        <Pattern
          id={`pattern0_${id}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href={`#image0_${id}`}
            transform="matrix(0.0015674 0 0 0.00164699 0 -0.00233272)"
          />
        </Pattern>
        <Image
          id={`image0_${id}`}
          width="638"
          height="610"
          href={props?.href}
        />
      </Defs>
    </Svg>
  );
}
