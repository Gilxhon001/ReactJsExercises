import React from "react";
import Container from "./Container";
import Counter from "./Counter";
import GithubUser from "./GithubUser";

const App = () => {

    return (
        <Container tittle="To Do List">
            <Counter />
            <GithubUser username="Gilxhon001"/>
        </Container>
    )
}

export default App ;