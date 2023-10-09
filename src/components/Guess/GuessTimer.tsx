import { useEffect, useState } from 'react';

const TIMER = 20;

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

  return <h2 id="timer">{TIMER - time}</h2>;
}

export default Timer;
