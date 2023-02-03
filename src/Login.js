import React from "react";

export default class Login extends React.Component {

    //input 
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
            }
        )
    }

    handleResetState = () => {
        this.setState(
            {
                name: '',
                password: '',
                remember: false,
            }
        )
    }

    onLogin = () => {
        this.props.submitted()
        console.log(this.state)
        console.log("Submitted")
    }

    render() {
        return (
            <div>
                <input
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                />

                <input
                    name="password"
                    type="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                />

                <br/>

                <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                />

                <br/>
                
                <button 
                    disabled={!this.state.name || !this.state.password}  
                    onClick={this.onLogin} 
                >

                Log In

                </button>

                <button 
                    disabled={!this.state.name && !this.state.password}
                    onClick={this.handleResetState}>

                Reset

                </button>

            </div>
        )
    }
}