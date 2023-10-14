import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ResultType } from '@interfaces/state.interface';
import { DrawingData } from '@interfaces/drawing.interface';
import { endGuess } from '@reducers/gameReducer';
import drawingsService from '@services/drawings';

import Drawing from '@components/Drawing';
import GuessTimer from './GuessTimer';
import GuessBox from './GuessBox';

import './Guess.css';

const TIMER = 20;

const Guess = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<DrawingData | null>(null);
  const [time, setTime] = useState(0);

  console.log('rendering Guess', data?.word);

  useEffect(() => {
    const fetchData = async () => {
      const data = await drawingsService.getOneRandom();
      console.log('data Fetched', data);
      setData(data);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime((time) => time + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  const result = useMemo(
    () => ({
      word: data?.word,
      country: data?.countrycode,
      drawing: data?.drawing,
      computer: data?.recognized,
    }),
    [data],
  );

  useEffect(() => {
    if (time === TIMER) {
      dispatch(endGuess({ ...result, type: ResultType.FAILURE }));
    }
  }, [time, dispatch, result]);

  const handleSuccess = useCallback(() => {
    dispatch(endGuess({ ...result, type: ResultType.SUCCESS }));
  }, [dispatch, result]);

  if (!data) return null;

  return (
    <div id="drawingPage">
      <div id="content">
        <GuessTimer time={TIMER - time} />
        <GuessBox word={data.word} handleSuccess={handleSuccess} />
      </div>
      <div id="drawing">
        <Drawing rawDrawingData={data.drawing} />
      </div>
    </div>
  );
};

export default Guess;
