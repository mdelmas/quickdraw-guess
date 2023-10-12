import { memo, useEffect, useState } from 'react';

import {
  getCurrentDimension,
  calculateScale,
  getDrawingSize,
  transformDrawingData,
  MARGINS,
} from '@helpers/drawing';

import DrawingLine from './DrawingLine';

import './Drawing.css';

const Drawing = ({ rawDrawingData }: { rawDrawingData: number[][][] }) => {
  console.log('rendering Drawing', rawDrawingData);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const drawingData = transformDrawingData(rawDrawingData);
  const drawingSize = getDrawingSize(drawingData);
  const scale = calculateScale(drawingSize, screenSize, MARGINS);

  return (
    <svg
      style={{
        width: drawingSize.width * scale + MARGINS.right + MARGINS.left,
        height: drawingSize.height * scale + MARGINS.top + MARGINS.bottom,
      }}
    >
      {drawingData.map((line, i) => (
        <DrawingLine key={i} line={line} scale={scale} />
      ))}
    </svg>
  );
};

export default memo(Drawing);
