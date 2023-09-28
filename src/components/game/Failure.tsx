import { useNavigate } from 'react-router-dom';

const Failure = () => {
  const navigate = useNavigate();

  const restartGame = () => {
    // navigate('/guess');
  };

  return (
    <div id="failurePage">
      <h2>Failure...</h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Failure;
