import { useEffect, useState } from 'react';

const TIMER = 99;

function Timer({ handleTimerEnd }: { handleTimerEnd: () => void }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((time) => time + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === TIMER) {
      handleTimerEnd();
    }
  }, [time, handleTimerEnd]);

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
