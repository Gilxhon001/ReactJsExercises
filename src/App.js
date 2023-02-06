import React from "react";
import TodoList from "./TodoList";
import Container from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container tittle="To Do List">
                <TodoList>
                    {(items, handleRemoveItem) => {
                        return <ul className="mt-4 w-1/3">
                            {items.map((item, index) => (
                                <li key={index} className="flex justify-between items-center mb-2">
                                    <div className="flex-1 w-5/6">{item}</div>
                                    <button
                                        className="text-xs text-white p-2 mr-2 rounded-full transition ease-in-out delay-50 bg-red-500 hover:-translate-y-1 hover:scale-100 hover:bg-orange-500 duration-100"
                                        onClick={() => handleRemoveItem(index)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }}
                </TodoList>
            </Container>
        )
    }
}
