import React from "react";
// import TodoList from "./TodoList";
import Container from "./Container";
import { ClickCounter } from "./ClickCounter";

const App = () => {

    const onCounterChange = (count) => {
        console.log(`The count is now ${count}`);
    };

    return (
        <Container tittle="To Do List">
            <ClickCounter incrementValue={5} onCounterChange={onCounterChange} />
        </Container>
    )
}

export default App ;