import React, { useState, useEffect } from "react";
import CounterButton from "./CounterButton";

export const ClickCounter = ({incrementValue=1, startingValue=0, onCounterChange}) => {
    const [count, setCount] = useState(startingValue);

    const handleCounterIncrement = () => {
        setCount(count + incrementValue)
    }

    useEffect(() => {
        if (onCounterChange) {
            onCounterChange(count);
        }
    }, [count, onCounterChange]);

    return (
        <div>
            <h3>Count: {count}</h3>
            <CounterButton handleInc={handleCounterIncrement} />
        </div>
    )
}
