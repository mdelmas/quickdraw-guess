import useField from '../../shared/hooks/useField';

import './GuessingBox.css';

const GuessingBox = ({ word }: { word: string }) => {
  const guess = useField('text');

  const checkGuess = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log(guess.value, word);
    if (guess.value === word) {
      console.log('congrats !!');
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
