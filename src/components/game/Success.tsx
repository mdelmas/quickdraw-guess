import { useContext } from 'react';
import { Page, PageContext } from '../PageContext';

const Success = () => {
  const { setPage } = useContext(PageContext);

  const restartGame = () => {
    setPage(Page.GUESS);
  };

  return (
    <div id="successPage">
      <h2>Success!</h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Success;
