import React from "react";

export default class ToDoList extends React.Component {

    state = {
        items: ['Item 1', 'Item 2', 'Item 3'],
        value: '',
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.value],
            value: '',
        })
    };

    handleReset = () => {
        this.setState({
            items: []
        });
    };

    handleRemove = (index) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, i) => i !== index),
            };
        });
    }

    render() {
        return (
            <div className="p-10">
                <input
                    className="border border-gray-400 p-2 mb-2"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button
                    className="bg-blue-500 text-white p-2 mr-2"
                    onClick={this.handleSubmit}
                    disabled={this.state.value.length !== 0 ? false : true}
                >Submit</button>

                <button
                    className="bg-red-500 text-white p-2"
                    onClick={this.handleReset}
                    disabled={this.state.items.length !== 0 ? false : true}
                >Reset</button>

                <ul className="mt-4 w-1/3">
                    {this.state.items.map((item, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <div className="flex-1 w-5/6">{item}</div>
                            <button className="bg-red-500 text-white p-2 rounded-md w-1/6" onClick={() => this.handleRemove(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}