import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementValue
            })
        }, this.props.incrementInterval)

    }

    render() {
        return this.state.count
    }
}

Counter.defaultProps = {
    incrementInterval : 1000,
    initialValue : 0, 
    incrementValue : 1
}