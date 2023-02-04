import React from "react";

export class ToDoList extends React.Component {

    state = {
        items: ['Item 1', 'Item 2', 'Item 3'],
        value: '',
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
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

    render() {
        return (
            <div>
            
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                />

                <button
                    onClick={this.handleSubmit}
                    disabled={this.state.value.length !== 0 ? false : true}
                >Submit</button>

                <button 
                    onClick={this.handleReset}
                    disabled={this.state.items.length !== 0 ? false : true}
                >Reset</button>

                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>
        )
    }
}