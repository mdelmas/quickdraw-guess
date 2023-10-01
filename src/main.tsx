import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from '@components/App';
import gameReducer from '@reducers/gameReducer.tsx';
import pageReducer from '@reducers/pageReducer.tsx';

import './index.css';

const store = configureStore({
  reducer: {
    page: pageReducer,
    game: gameReducer,
  },
});

store.subscribe(() => {
  console.log('change in store:', store.getState());
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
