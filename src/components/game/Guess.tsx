import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ResultType } from '../../shared/interfaces/state.interface';
import { Line, Size } from '../../shared/interfaces/drawing.interface';
import { endGuess } from '../../shared/reducers/gameReducer';

import Drawing from './Drawing';
import GuessingBox from './GuessingBox';
import Timer from './Timer';

import './Guess.css';

const TIMER = 4;

const Guess = ({
  word,
  lines,
  drawingSize,
}: {
  word: string;
  lines: Line[];
  drawingSize: Size;
}) => {
  const dispatch = useDispatch();
  const [timerInterval, setTimerInterval] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      return setTime((time) => time + 1);
    }, 1000);
    setTimerInterval(interval);
  }, []);

  const handleSuccess = () => {
    clearInterval(timerInterval);
    dispatch(endGuess({ result: ResultType.SUCCESS }));
  };

  useEffect(() => {
    if (time === TIMER) {
      clearInterval(timerInterval);
      dispatch(endGuess({ result: ResultType.FAILURE }));
    }
  }, [time, dispatch, timerInterval]);

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
