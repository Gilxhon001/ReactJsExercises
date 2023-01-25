import React from "react";

export class Age extends React.Component {
    render() {
        return (
        <>
        {this.props.value > 18 && <p>Your age is {this.props.value}</p>}
        {this.props.value < 18 && <p>You are very young!</p>}
        </>
        )
    }
}