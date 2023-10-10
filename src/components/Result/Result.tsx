import { ResultType } from '@interfaces/state.interface';
import { ROUNDS } from '@reducers/gameReducer';
import useKeyListener from '@shared/hooks/useKeyListener';

const Result = ({
  result,
  round,
  continueGame,
}: {
  result?: ResultType;
  round: number;
  continueGame: () => void;
}) => {
  console.log('rendering Result');

  useKeyListener('Enter', continueGame);

  return (
    <div id="resultPage">
      {result === ResultType.SUCCESS && <h2>Success!</h2>}
      {result === ResultType.FAILURE && <h2>Failure...</h2>}

      <p>
        {round}/{ROUNDS}
      </p>

      <form onSubmit={continueGame}>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default Result;
