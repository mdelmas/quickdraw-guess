import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startGuess } from '@reducers/gameReducer';
import { Page, State } from '@interfaces/state.interface';
import Home from '@components/Home';
import Game from '@components/Game';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: State) => state.page);
  console.log('rendering App');

  useEffect(() => {
    dispatch(startGuess());
  }, [dispatch]);

  return (
    <>
      {page === Page.HOME && <Home />}
      {page === Page.GAME && <Game />}
    </>
  );
};

export default App;
