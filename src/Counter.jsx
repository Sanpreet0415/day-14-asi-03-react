// Counter.jsx
import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  console.log('Counter component rendering...');

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
