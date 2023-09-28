import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Home from './components/Home';
import Game from './components/Game';
import { startGuess } from './shared/reducers/gameReducer';
import { Page, State } from './shared/interfaces/state.interface';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: State) => state.page);

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
