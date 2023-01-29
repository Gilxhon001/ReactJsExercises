import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementValue
            })
        }, this.props.incrementInterval)
    }


    render() {
        return this.state.count
    }


    componentWillUnmount() {
        if(this._interval) {
            clearInterval(this._interval)
        }
    }

}

Counter.defaultProps = {
    incrementInterval : 1000,
    initialValue : 0, 
    incrementValue : 1
}