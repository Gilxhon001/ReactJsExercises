import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import { Welcome } from "./Welcome";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={
                    <Container tittle="Welcome">
                        <Welcome />
                    </Container>
                } />

        </Routes>
    )
}

export default App;