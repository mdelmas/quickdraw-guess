const getCurrentDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getDrawingSize = (
  lines: { x: number[]; y: number[]; t: number[] }[],
): { width: number; height: number } => {
  let width = 0,
    height = 0;
  lines.map((line: { x: number[]; y: number[]; t: number[] }) => {
    for (let i = 0; i < line.x.length; i++) {
      width = line.x[i] > width ? line.x[i] : width;
      height = line.y[i] > height ? line.y[i] : height;
    }
  });
  return { width, height };
};

export { getCurrentDimension, getDrawingSize };
