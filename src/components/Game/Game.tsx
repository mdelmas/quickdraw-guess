import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { State, GamePhase } from '@interfaces/state.interface';
import {
  startGuess,
  displayTotal,
  resetGame,
  ROUNDS,
} from '@reducers/gameReducer';

import Guess from '@components/Guess';
import Result from '@components/Result';
import Total from '@components/Total';

import { setHome } from '@reducers/pageReducer';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.game);

  console.log('rendering Game');

  useEffect(() => {
    dispatch(startGuess());
  }, [dispatch]);

  const continueGame = () => {
    if (game.round === ROUNDS) {
      return dispatch(displayTotal());
    }
    dispatch(startGuess());
  };

  const endGame = () => {
    dispatch(setHome());
    dispatch(resetGame());
  };

  return (
    <>
      {game.phase === GamePhase.GUESS && <Guess />}
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
