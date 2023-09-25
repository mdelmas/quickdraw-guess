import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { getCurrentDimension, getDrawingSize } from '../utils/sizeUtils';
import './Drawing.css';

import bananaData from '../data/sample_banana.json';
console.log(bananaData);
// type Line = {
//   x: number[];
//   y: number[];
//   t: number[];
//   pathData: string;
// };

const lines = bananaData.drawing.map((line) => ({
  x: line[0],
  y: line[1],
  t: line[2],
  pathData: '',
  duration: line[2][line[2].length - 1] - line[2][0],
  start: line[2][0],
}));
const drawingSize = getDrawingSize(lines);

const Drawing = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(getCurrentDimension());
    });
  }, []);

  useEffect(() => {
    console.log('recalculating scale...');
    setScale(
      Math.min(
        screenSize.width / drawingSize.width,
        screenSize.height / drawingSize.height,
      ),
    );
  }, [screenSize]);
  const normalize = (x: number) => x * scale;

  lines.map((line) => {
    line.pathData = `M ${normalize(line.x[0])} ${normalize(line.y[0])} `;
    for (let i = 1; i < line.x.length; i++) {
      line.pathData += `L ${normalize(line.x[i])} ${normalize(line.y[i])} `;
    }
  });
  console.log(lines);

  return (
    <svg>
      {lines.map((line, i) => (
        <motion.path
          key={i}
          d={line.pathData}
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
