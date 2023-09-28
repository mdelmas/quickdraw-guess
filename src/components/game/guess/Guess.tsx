import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page, PageContext } from '../PageContext';
import { getDrawingSize } from '../shared/helpers/drawing';

import Drawing from './guess/Drawing';
import GuessingBox from './guess/GuessingBox';
import Timer from './guess/Timer';

import './Guess.css';
import { Line } from '../shared/interfaces/drawing.interface';
const TIMER = 4;

const Guess = ({
  word,
  lines,
  drawingSize,
}: {
  word: string;
  lines: Line[];
  drawingSize: { width: number; height: number };
}) => {
  const { setPage } = useContext(PageContext);
  const [timerInterval, setTimerInterval] = useState(0);
  const [time, setTime] = useState(0);

  console.log('time', time);

  useEffect(() => {
    const interval = setInterval(() => {
      return setTime((time) => time + 1);
    }, 1000);
    setTimerInterval(interval);
  }, []);

  const handleSuccess = () => {
    clearInterval(timerInterval);

    // setPage(Page.SUCCESS);
  };

  useEffect(() => {
    if (time === TIMER) {
      clearInterval(timerInterval);
      // setPage(Page.FAILURE);
    }
  }, [time]);

  return (
    <div id="drawingPage">
      <div id="content">
        <Timer time={TIMER - time} />
        <GuessingBox word={word} handleSuccess={handleSuccess} />
      </div>
      <div id="drawing">
        <Drawing lines={lines} drawingSize={drawingSize} />
      </div>
    </div>
  );
};

export default Guess;
