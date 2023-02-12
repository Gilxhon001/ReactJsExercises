import React from "react";
import FilteredList from "./FilteredList";
import Container from "./Container";

const App = () => {
    const list = [
        { name: "John", id: 1, age: 20 },
        { name: "Jane", id: 2, age: 15 },
        { name: "Jim", id: 3, age: 25 },
        { name: "Joe", id: 4, age: 30 },
        { name: "Jota", id: 2, age: 18 },
    ];

    return (
        <Container tittle="Filtered List">
            <FilteredList list={list} />
        </Container>
    )
}

export default App;