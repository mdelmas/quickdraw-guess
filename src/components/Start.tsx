import { useNavigate } from 'react-router-dom';

import './Start.css';

const Start = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/guess');
  };

  return (
    <div id="startPage">
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default Start;
