import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MemoryRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </MemoryRouter>,
);
