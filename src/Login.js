import React from "react";

export default class Login extends React.Component {
    state = {
        name: '',
        password: '',
        remember: false,

    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value; 
        const checked = event.target.checked;

        this.setState(
            { 
                [name]: type === 'checkbox' ? checked : value,
            })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.value}
                />

                <input
                    name="password"
                    type="password"
                    onChange={this.handleInputChange}
                    value={this.state.value}
                />

                <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                />

            </div>
        )
    }
}