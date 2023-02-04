import React from "react";
import { Hello } from "./Hello";
import Welcome from "./Welcome";
// import { ToDoList } from "./TodoList";
// import UncontrolledLogin from "./UncontrolledLogin";
// import Login from "./Login";
// import InteractiveWelcome from "./InteractiveWelcome ";
// import ClickTracker from "./ClickTracker";
// import ClickCounter from "./ClickCounter";
// import { CounterDisplay } from "./CounterDisplay";
// import { Counter } from "./Counter";


export class App extends React.Component {
    
    render() {
        return (
            <div>
                <Hello />
                <Welcome name="Gilxhon" age={21}/>
            </div>
        )
    }
}
