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


// export default class ClickCounter extends React.Component {

//     state = {
//         count: this.props.initialValue,
//     }

//     handleCounterIncrement = () => {
//         this.setState((state) =>{
//             return {count: state.count + this.props.incrementValue}
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <h3>Count: {this.state.count}</h3>
//                 <CounterButton handleInc={this.handleCounterIncrement} />
//                 {/* We pass the handle increment function with props */}
//             </div>
//         )
//     }
// }

// ClickCounter.defaultProps = {
//     initialValue: 1,
//     incrementValue: 1
// }