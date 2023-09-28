import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getDrawingSize } from '../shared/helpers/drawing';
import { State, GamePhase } from '../shared/interfaces/state.interface';
import {
  startGuess,
  displayTotal,
  resetGame,
  ROUNDS,
} from '../shared/reducers/gameReducer';

import Guess from './game/Guess';
import Result from './game/Result';
import Total from './game/Total';

import appleData from '../data/sample_airplane.json';
import airplaneData from '../data/sample_airplane.json';
import bananaData from '../data/sample_banana.json';
import fishData from '../data/sample_fish.json';
import { setHome } from '../shared/reducers/pageReducer';

const drawings = {
  airplane: airplaneData,
  apple: appleData,
  fish: fishData,
  banana: bananaData,
};
const data = drawings.airplane;

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

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.game);

  useEffect(() => {
    dispatch(startGuess());
  }, [dispatch]);

  const continueGame = () => {
    console.log('in continuegame', game);
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
      {game.phase === GamePhase.GUESS && (
        <Guess word={data.word} lines={lines} drawingSize={drawingSize} />
      )}
      {game.phase === GamePhase.RESULT && (
        <Result
          result={game.result}
          continueGame={continueGame}
          round={game.round}
        />
      )}
      {game.phase === GamePhase.TOTAL && <Total endGame={endGame} />}
    </>
  );
};

export default Game;
