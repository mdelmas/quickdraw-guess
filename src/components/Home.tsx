import { useDispatch } from 'react-redux';

import { setGame } from '../shared/reducers/pageReducer';

const Success = () => {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setGame());
  };

  return (
    <div id="successPage">
      <h2>Quick Draw Guess</h2>
      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default Success;
