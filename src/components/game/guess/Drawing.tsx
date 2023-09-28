import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { getCurrentDimension } from '../../../shared/helpers/drawing';
import { Line } from '../../../shared/interfaces/drawing.interface';

import './Drawing.css';

const margins = { top: 40, right: 40, bottom: 200, left: 40 };

const Drawing = ({
  lines,
  drawingSize,
}: {
  lines: Line[];
  drawingSize: { width: number; height: number };
}) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(getCurrentDimension());
    });
  }, []);

  useEffect(() => {
    setScale(
      Math.min(
        (screenSize.width - margins.right - margins.left) / drawingSize.width,
        (screenSize.height - margins.top - margins.bottom) / drawingSize.height,
      ),
    );
  }, [screenSize]);

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
