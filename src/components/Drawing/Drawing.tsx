import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { getCurrentDimension, calculateScale } from '@helpers/drawing';
import { Line, Size } from '@interfaces/drawing.interface';

import './Drawing.css';

const margins = { top: 40, right: 40, bottom: 200, left: 40 };

const Drawing = ({
  lines,
  drawingSize,
}: {
  lines: Line[];
  drawingSize: Size;
}) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [scale, setScale] = useState(
    calculateScale(drawingSize, screenSize, margins),
  );

  console.log('rendering Drawing');

  console.log('scale', scale);
  console.log('screenSize', screenSize);
  console.log('drawingSize', drawingSize);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(getCurrentDimension());
      setScale(calculateScale(drawingSize, screenSize, margins));
    });
  }, []);

  const normalize = (x: number) => x * scale;

  lines.map((line) => {
    line.path = `M 
      ${normalize(line.coord.x[0]) + margins.top} 
      ${normalize(line.coord.y[0]) + margins.left} 
    `;
    for (let i = 1; i < line.coord.x.length; i++) {
      line.path += `L 
        ${normalize(line.coord.x[i]) + margins.top} 
        ${normalize(line.coord.y[i]) + margins.left} 
      `;
    }
  });

  // let linePath =

  return (
    <svg
      style={{
        width: drawingSize.width * scale + margins.right + margins.left,
        height: drawingSize.height * scale + margins.top + margins.bottom,
      }}
    >
      {lines.map((line, i) => (
        <motion.path
          key={i}
          d={line.path}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: line.duration / 1000,
            delay: line.start / 1000,
            ease: 'easeInOut',
            opacity: { duration: 0.01, delay: line.start / 1000 },
          }}
        />
      ))}
    </svg>
  );
};

export default Drawing;
