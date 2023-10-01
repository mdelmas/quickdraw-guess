import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ResultType } from '@interfaces/state.interface';
import { DrawingData, Line } from '@interfaces/drawing.interface';
import { endGuess } from '@reducers/gameReducer';
import { getDrawingData, getDrawingSize } from '@helpers/drawing';

import Drawing from '@components/Drawing';
import GuessingBox from '@components/GuessingBox';

import './Guess.css';

const TIMER = 4;

const Guess = ({ data }: { data: DrawingData }) => {
  const dispatch = useDispatch();
  const [timerInterval, setTimerInterval] = useState(0);
  const [time, setTime] = useState(0);
  const [lines, setLines] = useState<Line[] | null>(null);
  const [drawingSize, setDrawingSize] = useState({ width: 100, height: 100 });

  console.log('rendering Guess');

  useEffect(() => {
    const interval = setInterval(() => {
      return setTime((time) => time + 1);
    }, 1000);
    setTimerInterval(interval);
  }, []);

  useEffect(() => {
    const lines = getDrawingData(data.drawing);
    console.log('lines', lines);
    setLines(lines);

    const drawingSize = getDrawingSize(lines);
    console.log('drawingSize', drawingSize);
    setDrawingSize(drawingSize);
  }, [data.drawing]);

  useEffect(() => {
    if (time === TIMER) {
      clearInterval(timerInterval);
      dispatch(endGuess({ result: ResultType.FAILURE }));
    }
  }, [time, dispatch, timerInterval]);

  if (!lines) return;

  const handleSuccess = () => {
    clearInterval(timerInterval);
    dispatch(endGuess({ result: ResultType.SUCCESS }));
  };

  return (
    <div id="drawingPage">
      <div id="content">
        <h2 id="timer">{TIMER - time}</h2>
        <GuessingBox word={data.word} handleSuccess={handleSuccess} />
      </div>
      <div id="drawing">
        <Drawing lines={lines} drawingSize={drawingSize} />
      </div>
    </div>
  );
};

export default Guess;
