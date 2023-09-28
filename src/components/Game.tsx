import { useSelector, useDispatch } from 'react-redux';

import { getDrawingSize } from '../shared/helpers/drawing';
import { Page, State } from '../shared/interfaces/state.interface';

import Guess from './components/Guess';
import Success from './components/Success';
import Failure from './components/Failure';

import appleData from '../data/sample_airplane.json';
import airplaneData from '../data/sample_airplane.json';
import bananaData from '../data/sample_banana.json';
import fishData from '../data/sample_fish.json';
const data = fishData;

const drawings = {
  airplane: airplaneData,
  apple: appleData,
  fish: fishData,
  banana: bananaData,
};

const ROUNDS = Object.keys(drawings).length;

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
  const page = useSelector((state: State) => state.page);

  const startGame = () => {
    // setPage(Page.SUCCESS);
  };

  return (
    <div id="startPage">
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default Game;
