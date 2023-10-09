import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ResultType } from '@interfaces/state.interface';
import { DrawingData, Line } from '@interfaces/drawing.interface';
import { endGuess } from '@reducers/gameReducer';
import { getDrawingData, getDrawingSize } from '@helpers/drawing';
import drawingsService from '@services/drawings';

import Drawing from '@components/Drawing';
import Timer from '@components/Timer';
import GuessingBox from '@components/GuessingBox';

import './Guess.css';

const Guess = () => {
  const dispatch = useDispatch();
  const [lines, setLines] = useState<Line[] | null>(null);
  const [drawingSize, setDrawingSize] = useState({ width: 100, height: 100 });
  const [data, setData] = useState<DrawingData | null>(null);

  console.log('rendering Guess', data?.word);

  const fetchData = async () => {
    console.log('fetching new data');
    const data = await drawingsService.getOneRandom();
    console.log('data', data);
    setData(data);
  };

  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  const handleTimerEnd = () => {
    dispatch(endGuess({ result: ResultType.FAILURE }));
  };

  // useEffect(() => {
  //   if (!data) return;
  //   const lines = getDrawingData(data.drawing);
  //   console.log('lines', lines);
  //   setLines(lines);

  //   const drawingSize = getDrawingSize(lines);
  //   console.log('drawingSize', drawingSize);
  //   setDrawingSize(drawingSize);
  // }, [data.drawing]);

  //
  // if (!lines) return;

  const handleSuccess = () => {
    // clearInterval(timerInterval);
    dispatch(endGuess({ result: ResultType.SUCCESS }));
  };

  return (
    <div id="drawingPage">
      <div id="content">
        <Timer handleTimerEnd={handleTimerEnd} />
        <GuessingBox word={data.word} handleSuccess={handleSuccess} />
      </div>
      <div id="drawing">
        {/* <Drawing lines={lines} drawingSize={drawingSize} /> */}
      </div>
    </div>
  );
};

export default Guess;
