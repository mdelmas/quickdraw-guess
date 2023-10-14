function Timer({ time }: { time: number }) {
  console.log('rendering Timer', time);

  return (
    <div id="timer">
      <h2>
        {`${time}`.split('').map((figure, index) => (
          <span className="animated" key={`${index}-${figure}`}>
            {figure}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Timer;
