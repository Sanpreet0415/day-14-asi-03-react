// Timer.jsx
import React from 'react';

const Timer = ({ time, isRunning, startTimer, stopTimer, resetTimer }) => {
  console.log('Timer component rendering...');

  return (
    <div>
      <h2>Timer: {time} seconds</h2>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
