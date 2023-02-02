import React from "react";
import CounterButton from "./CounterButton";

export default class ClickCounter extends React.Component {

    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement = () => {
        this.setState((state) =>{
            return {count: state.count + this.props.incrementValue}
        })
    }


    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <CounterButton handleInc={this.handleCounterIncrement} />
                {/* We pass the handle increment function with props */}
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 1,
    incrementValue: 1
}