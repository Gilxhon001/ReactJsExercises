import React from "react";

const CounterButton = ({handleInc, handleDec, handleRes}) => {
    return (
            <>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleRes}>Reset</button>
            </>
    )
}

export default CounterButton ;