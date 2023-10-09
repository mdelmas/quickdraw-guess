import useField from '@hooks/useField';

const GuessBox = ({
  word,
  handleSuccess,
}: {
  word: string;
  handleSuccess: () => void;
}) => {
  console.log('rendering GuessingBox');

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

export default GuessBox;
