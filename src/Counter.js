import React, { useState, useEffect } from "react";

const Counter = ({ initialValue = 1, incrementValue = 1, incrementInterval = 1000 }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + incrementValue);
    }, incrementInterval);

    return () => clearInterval(interval);
  }, [count, incrementValue, incrementInterval]);

  useEffect(() => {
    if (count > 10 * initialValue) {
      setCount(initialValue);
    }
  }, [count, initialValue]);

  return <>{count}</>;
};

export default Counter;