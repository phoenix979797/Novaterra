import { useEffect, useState } from "react";

const calculateHeight = (height: number, h: number) => {
  return (height * h) / 812;
};

const calculateWidth = (width: number, w: number) => {
  return (width * w) / 375;
};

const useResize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export { calculateHeight, calculateWidth, useResize };
