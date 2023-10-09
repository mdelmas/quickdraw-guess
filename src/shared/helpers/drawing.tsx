import { LineData, Size, Margins } from '@interfaces/drawing.interface';

export const MARGINS = { top: 40, right: 40, bottom: 200, left: 40 };

const getCurrentDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getDrawingSize = (lines: LineData[]): Size => {
  let width = 0,
    height = 0;
  lines.map((line: LineData) => {
    for (let i = 0; i < line.coord.x.length; i++) {
      width = line.coord.x[i] > width ? line.coord.x[i] : width;
      height = line.coord.y[i] > height ? line.coord.y[i] : height;
    }
  });
  return { width, height };
};

const transformDrawingData = (drawing: number[][][]) => {
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

const normalize = (x: number, scale: number) => x * scale;

const getLinePath = (line: LineData, scale: number, margins: Margins) => {
  let path = '';
  // lines.map((line) => {
  path = `M 
    ${normalize(line.coord.x[0], scale) + margins.top} 
    ${normalize(line.coord.y[0], scale) + margins.left} 
  `;

  for (let i = 1; i < line.coord.x.length; i++) {
    path += `L 
      ${normalize(line.coord.x[i], scale) + margins.top} 
      ${normalize(line.coord.y[i], scale) + margins.left} 
    `;
  }
  // });
  return path;
};

export {
  getCurrentDimension,
  getDrawingSize,
  transformDrawingData,
  calculateScale,
  getLinePath,
  normalize,
};
