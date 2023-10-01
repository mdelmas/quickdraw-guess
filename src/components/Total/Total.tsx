const Total = ({ endGame }: { endGame: () => void }) => {
  console.log('rendering Total');

  return (
    <div id="resultPage">
      <h2>Total</h2>
      <button onClick={endGame}>Finish</button>
    </div>
  );
};

export default Total;
