import React from "react";
import { ClickCounter } from "./ClickCounter";
import Container from "./Container";

const App = () => {

    return (
        <Container tittle="Counter">
            <ClickCounter initialValue={0} />
        </Container>
    )
}

export default App ;