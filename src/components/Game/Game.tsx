import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { State, GamePhase } from '@interfaces/state.interface';
import { DrawingData } from '@interfaces/drawing.interface';
import {
  startGuess,
  displayTotal,
  resetGame,
  ROUNDS,
} from '@reducers/gameReducer';
import drawingsService from '@services/drawings';

import Guess from '@components/Guess';
import Result from '@components/Result';
import Total from '@components/Total';

import { setHome } from '@reducers/pageReducer';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.game);
  const [data, setData] = useState<DrawingData | null>(null);

  console.log('rendering Game');

  useEffect(() => {
    dispatch(startGuess());
  }, [dispatch]);

  const fetchData = async () => {
    const data = await drawingsService.getOneRandom();
    setData(data);
  };

  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  const continueGame = () => {
    if (game.round === ROUNDS) {
      return dispatch(displayTotal());
    }
    fetchData().catch((err) => console.log(err));
    dispatch(startGuess());
  };

  const endGame = () => {
    dispatch(setHome());
    dispatch(resetGame());
  };

  return (
    <>
      {game.phase === GamePhase.GUESS && <Guess data={data} />}
      {game.phase === GamePhase.RESULT && (
        <Result
          result={game.result?.type}
          continueGame={continueGame}
          round={game.round}
        />
      )}
      {game.phase === GamePhase.TOTAL && <Total endGame={endGame} />}
    </>
  );
};

export default Game;
