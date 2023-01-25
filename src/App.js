import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Chelli</strong>} age={22} />
                <Counter incrementInterval={2000} initialValue={69} incrementValue={9}/>
            </div>
        )
    }
}
