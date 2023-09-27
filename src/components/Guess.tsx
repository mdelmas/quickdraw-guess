import { useEffect, useState } from 'react';

import { getDrawingSize } from '../shared/helpers/drawing';

import Drawing from './guess/Drawing';
import GuessingBox from './guess/GuessingBox';
import Timer from './guess/Timer';

import './Guess.css';

import appleData from '../data/sample_airplane.json';
import airplaneData from '../data/sample_airplane.json';
import bananaData from '../data/sample_banana.json';
import fishData from '../data/sample_fish.json';
const data = fishData;
console.log('data', data);

const drawings = {
  airplane: airplaneData,
  apple: appleData,
  fish: fishData,
  banana: bananaData,
};
console.log('drawings', drawings, drawings['banana']);

const ROUNDS = Object.keys(drawings).length;
console.log('ROUNDS', ROUNDS);

const TIMER = 20;

const lines = data.drawing.map((line) => ({
  coord: {
    x: line[0],
    y: line[1],
    t: line[2],
  },
  path: '',
  duration: line[2][line[2].length - 1] - line[2][0],
  start: line[2][0],
}));
const drawingSize = getDrawingSize(lines);

const DrawingPage = () => {
  // const [start, setStart] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);
  const [time, setTime] = useState(0);
  console.log('Word to guess', data.word);

  console.log('time', time);

  useEffect(() => {
    console.log('setting up interval');
    const interval = setInterval(() => {
      console.log('set interval ....', time);
      return setTime((time) => time + 1);
    }, 1000);
    setTimerInterval(interval);
    // return () => clearInterval(interval);
  }, []);

  if (time === TIMER) {
    console.log('clear interval');
    clearInterval(timerInterval);
  }

  return (
    <div id="drawingPage">
      <div id="content">
        <Timer time={TIMER - time} />
        <GuessingBox word={data.word} />
      </div>
      <div id="drawing">
        <Drawing lines={lines} drawingSize={drawingSize} />
      </div>
    </div>
  );
};

export default DrawingPage;
