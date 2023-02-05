import React from "react";
import TodoList from "./TodoList";
import Container from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <TodoList />
            </Container>
        )
    }
}
