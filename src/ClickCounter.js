import React, { useState } from 'react';

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return [count, increment, decrement, reset];
}

export const ClickCounter = ({initialValue}) => {
    
    const [count, increment, decrement, reset] = useCounter(initialValue);


    return (
        <div>
            <h3>Count: {count}</h3>
            <button className='bg-blue-500 text-white p-2 mr-2' onClick={increment}>Increment</button>
            <button className='bg-blue-500 text-white p-2 mr-2' onClick={decrement}>Decrement</button>
            <button className='bg-blue-500 text-white p-2 mr-2' onClick={reset}>Reset</button>
        </div>
    )
}
