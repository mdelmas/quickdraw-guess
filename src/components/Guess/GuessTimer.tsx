const TIMER = 20;

function Timer({ time }: { time: number }) {
  console.log('rendering Timer', time);

  const remainingTime = `${TIMER - time}`;

  return (
    <div id="timer">
      <h2>
        {remainingTime.split('').map((figure, index) => (
          <span className="animated" key={`${index}-${figure}`}>
            {figure}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Timer;
