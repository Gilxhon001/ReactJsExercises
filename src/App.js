import React from "react";
import CarDetails from "./CarDetails";
import Container from "./Container";
import GithubUser from "./GithubUser";

const App = () => {

    return (
        <Container tittle="Car Details">
            <CarDetails initialData={{ model: "Lamborghini", year: 2020, color: "Yellow" }} />
        </Container>
    )
}

export default App ;