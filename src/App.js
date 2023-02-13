import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import { Welcome } from "./Welcome";
import Counter from "./Counter"
import ShowGithubUser from "./ShowGithubUser";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={
                <Container tittle="Welcome">
                    <Welcome />
                </Container>
            } />

            <Route path="/counter" element={
                <Container tittle="Counter">
                    <Counter />
                </Container>
            } />

            <Route path="/users/:username" element={<ShowGithubUser/>} />
        </Routes>


    )
}

export default App;