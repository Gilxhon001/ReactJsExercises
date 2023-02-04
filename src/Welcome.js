import React from "react";
import { Age } from "./Age";

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <p>Welcome, {this.props.name}!</p>
                {this.props.age > 18 && <Age value={this.props.age}/>}
            </div>
        )
    }
}