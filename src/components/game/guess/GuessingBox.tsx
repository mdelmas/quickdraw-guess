import useField from '../../../shared/hooks/useField';

import './GuessingBox.css';

const GuessingBox = ({
  word,
  handleSuccess,
}: {
  word: string;
  handleSuccess: () => void;
}) => {
  const guess = useField('text');

  const checkGuess = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (guess.value === word) {
      handleSuccess();
    }
  };

  return (
    <div id="guess">
      <h3>What is he drawing?</h3>
      <form onSubmit={checkGuess}>
        <input {...guess} />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
};

export default GuessingBox;
