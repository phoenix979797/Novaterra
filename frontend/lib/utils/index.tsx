const calculateHeight = (height: number, h: number) => {
  return (height * h) / 812;
};

const calculateWidth = (width: number, w: number) => {
  return (width * w) / 375;
};

export { calculateHeight, calculateWidth };
