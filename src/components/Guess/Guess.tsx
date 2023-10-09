import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ResultType } from '@interfaces/state.interface';
import { DrawingData } from '@interfaces/drawing.interface';
import { endGuess } from '@reducers/gameReducer';
import drawingsService from '@services/drawings';

import Drawing from '@components/Drawing';
import Timer from '@components/Timer';
import GuessingBox from '@components/GuessingBox';

import './Guess.css';

const Guess = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<DrawingData | null>(null);

  console.log('rendering Guess', data?.word);

  const fetchData = async () => {
    const data = await drawingsService.getOneRandom();
    console.log('data Fetched', data);
    setData(data);
  };

  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  const handleTimerEnd = () => {
    dispatch(endGuess({ result: ResultType.FAILURE }));
  };

  const handleSuccess = () => {
    dispatch(endGuess({ result: ResultType.SUCCESS }));
  };

  return (
    <div id="drawingPage">
      <div id="content">
        <Timer handleTimerEnd={handleTimerEnd} />
        <GuessingBox word={data.word} handleSuccess={handleSuccess} />
      </div>
      <div id="drawing">
        <Drawing rawDrawingData={data.drawing} />
      </div>
    </div>
  );
};

export default Guess;
