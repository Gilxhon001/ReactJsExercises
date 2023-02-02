import React from "react";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome ";
// import ClickTracker from "./ClickTracker";
// import { Welcome } from "./Welcome";
// import ClickCounter from "./ClickCounter";
// import { CounterDisplay } from "./CounterDisplay";
// import { Counter } from "./Counter";


export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />

                {/* <Welcome name={<strong>Johnny</strong>} age={22} /> */}

                {/* <CounterDisplay count={<Counter />}/> */}

                {/* <ClickCounter /> */}

                {/* <ClickTracker /> */}

                <InteractiveWelcome />

            </div>
        )
    }
}
