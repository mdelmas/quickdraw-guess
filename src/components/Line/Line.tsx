import { motion } from 'framer-motion';

import { MARGINS, getLinePath } from '@helpers/drawing';
import { LineData } from '@interfaces/drawing.interface';

function Line({ line, scale }: { line: LineData; scale: number }) {
  console.log('rendering Line', line, scale);

  const path = getLinePath(line, scale, MARGINS);

  return (
    <motion.path
      d={path}
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
  );
}

export default Line;
