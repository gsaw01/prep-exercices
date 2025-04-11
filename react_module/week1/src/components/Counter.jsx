import { useState } from 'react';
import { Count } from './Count';
import { Feedback } from './Feedback';
import { Button } from './Button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => count > 0 && setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="counter-container">
      <Count count={count} />
      <Feedback count={count} />
      <div className="actions">
        <Button onClick={decreaseCount}>-</Button>
        <Button onClick={resetCount}>Reset</Button>
        <Button onClick={increaseCount}>+</Button>
      </div>
    </div>
  );
};
