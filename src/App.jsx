// App.jsx
import React, { useState, useCallback, useMemo } from 'react';
import Counter from './Counter';
import Timer from './Timer';

const App = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Memoized event handlers
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const startTimer = useCallback(() => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setTime(0);
    setIsRunning(false);
  }, []);

  // Memoized child components
  const MemoizedCounter = useMemo(() => {
    return React.memo(Counter);
  }, []);

  const MemoizedTimer = useMemo(() => {
    return React.memo(Timer);
  }, []);

  return (
    <div>
      <h1>Optimized React Application</h1>
      <MemoizedCounter count={count} increment={increment} decrement={decrement} />
      <MemoizedTimer time={time} isRunning={isRunning} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
    </div>
  );
};

export default App;
