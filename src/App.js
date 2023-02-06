import React from "react";
import { Hello } from "./Hello";
import Sum from "./Sum";
import Welcome from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Chelli</strong>} age={22} />
                <Sum />
            </div>
        )
    }
}
