import React from "react";
// import TodoList from "./TodoList";
import Container from "./Container";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return (
            <Container tittle="To Do List">
                <ClickCounter incrementValue={5}/>
            </Container>
        )
    }
}
