import React from "react";
// import TodoList from "./TodoList";
import Container from "./Container";
import { ClickCounter } from "./ClickCounter";

const App = () => {
    return (
        <Container tittle="To Do List">
            <ClickCounter incrementValue={5} />
        </Container>
    )
}

export default App ;