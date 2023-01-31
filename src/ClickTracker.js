import React from "react";

export default class ClickTracker extends React.Component {

    state = {
        name: undefined,
    }

    eventHandler = (event) => {
        this.setState({name: event.target.name})
    }

    render() {
        return (
            <>
            {!this.state.name && <h1>Click a button</h1>}
            {this.state.name && <h1>{this.state.name} was CLICKED !</h1>}

            <button name="Button 1" onClick={this.eventHandler}>Button 1</button>
            <button name="Button 2" onClick={this.eventHandler}>Button 2</button>
            <button name="Button 3" onClick={this.eventHandler}>Button 3</button>
            </>
        )
    }
}