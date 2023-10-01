import { Line, Size, Margins } from '@interfaces/drawing.interface';

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

const getDrawingData = (drawing: number[][][]) => {
  return drawing.map((line) => {
    return {
      coord: {
        x: line[0],
        y: line[1],
        t: line[2],
      },
      path: '',
      duration: line[2][line[2].length - 1] - line[2][0],
      start: line[2][0],
    };
  });
};

const calculateScale = (
  drawingSize: Size,
  screenSize: Size,
  margins: Margins,
): number =>
  Math.min(
    (screenSize.width - margins.right - margins.left) / drawingSize.width,
    (screenSize.height - margins.top - margins.bottom) / drawingSize.height,
  );

const getLinePath = () => {};

export {
  getCurrentDimension,
  getDrawingSize,
  getDrawingData,
  calculateScale,
  getLinePath,
};
