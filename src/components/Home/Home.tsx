import { useDispatch } from 'react-redux';

import { setGame } from '@reducers/pageReducer';
import useKeyListener from '@shared/hooks/useKeyListener';

const Home = () => {
  console.log('rendering Home');
  const dispatch = useDispatch();

  const startGame = () => {
    console.log('dispatching setGame in Home');
    dispatch(setGame());
  };

  useKeyListener('Enter', startGame);

  return (
    <div id="homePage">
      <h2>Quick Draw Guess</h2>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default Home;
