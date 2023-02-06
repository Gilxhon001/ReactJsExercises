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
            items: [this.state.value, ...this.state.items],
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
                    className="border border-gray-400 p-2 mb-2 hover:scale-105"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button
                    className="text-white p-2 mr-2 rounded-r-lg transition ease-in-out delay-50 bg-blue-500 hover:rounded-lg hover:scale-110 hover:bg-indigo-500 duration-100"
                    onClick={this.handleSubmit}
                    disabled={this.state.value.length !== 0 ? false : true}
                >Submit</button>

                <button
                    className="text-white p-2 mr-2 rounded-lg transition ease-in-out delay-50 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300"
                    onClick={this.handleReset}
                    disabled={this.state.items.length !== 0 ? false : true}
                >Reset</button>

                {this.props.render(this.state.items, this.handleRemove)}
            </div>
        )
    }
}