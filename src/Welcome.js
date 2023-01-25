import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, <strong> {this.props.name} </strong>!</p>
                {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" && <Age value={this.props.age}/>}
            </>
        )
    }
}