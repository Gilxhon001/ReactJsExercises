import React from "react";

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

        const style = {
            color: this.state.count % 2 === 0 ? 'green' : 'red',   
        }

        return (
            <div>
                <h3 style={style}>Count: {this.state.count}</h3>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 1,
    incrementValue: 1
}