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
    if (game.results.length === ROUNDS) {
      return dispatch(displayTotal());
    }
    dispatch(startGuess());
  };

  const endGame = () => {
    dispatch(setHome());
    dispatch(resetGame());
  };

  console.log(
    'game results',
    game.results,
    game.results.length,
    game.results[game.results.length - 1],
  );

  return (
    <>
      {game.phase === GamePhase.GUESS && <Guess />}
      {game.phase === GamePhase.RESULT && (
        <Result
          result={game.results[game.results.length - 1].type}
          continueGame={continueGame}
          round={game.results.length}
        />
      )}
      {game.phase === GamePhase.TOTAL && <Total endGame={endGame} />}
    </>
  );
};

export default Game;
