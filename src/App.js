import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Chelli</strong>} age={22} />
                <CounterDisplay count={<Counter />}/>
            </div>
        )
    }
}
