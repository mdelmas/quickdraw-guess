import { ResultType } from '../../shared/interfaces/state.interface';
import { ROUNDS } from '../../shared/reducers/gameReducer';

const Result = ({
  result,
  round,
  continueGame,
}: {
  result?: ResultType;
  round: number;
  continueGame: () => void;
}) => {
  return (
    <div id="resultPage">
      {result === ResultType.SUCCESS && <h2>Success!</h2>}
      {result === ResultType.FAILURE && <h2>Failure...</h2>}

      <p>
        {round}/{ROUNDS}
      </p>

      <button onClick={continueGame}>Continue</button>
    </div>
  );
};

export default Result;
