import { Line, Size } from '../interfaces/drawing.interface';

const getCurrentDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getDrawingSize = (lines: Line[]): Size => {
  let width = 0,
    height = 0;
  lines.map((line: Line) => {
    for (let i = 0; i < line.coord.x.length; i++) {
      width = line.coord.x[i] > width ? line.coord.x[i] : width;
      height = line.coord.y[i] > height ? line.coord.y[i] : height;
    }
  });
  return { width, height };
};

export { getCurrentDimension, getDrawingSize };
