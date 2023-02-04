import React from "react";
import { Hello } from "./Hello";
import Login from "./Login";
// import InteractiveWelcome from "./InteractiveWelcome ";
// import ClickTracker from "./ClickTracker";
// import { Welcome } from "./Welcome";
// import ClickCounter from "./ClickCounter";
// import { CounterDisplay } from "./CounterDisplay";
// import { Counter } from "./Counter";


export class App extends React.Component {
    
    constructor() {
        super() 

        this.state = {
            submitted: false,
        }
    }

    handleLogin = () => {
        this.setState(
            {
                submitted: true
            }
        )
    }

    render() {
        return (
            <div>
                <Hello />

                <Login submitted={this.handleLogin}/>

            </div>
        )
    }
}
