import { Routes, Route } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';

import Guess from './components/Guess';
import Start from './components/Start';

import './App.css';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <Routes>
      <Route path="/" Component={Start} />
      <Route path="/guess" Component={Guess} />
    </Routes>
  );
};

export default App;
