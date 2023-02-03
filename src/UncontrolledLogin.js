import React from "react";

export default class UncontrolledLogin extends React.Component {
    constructor() {
        super()

        this.state = {
            name: true ,
            password: true,
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        
        const name = event.target.elements.name.value 
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            name,
            password,
            remember,
        });
    }

    handleChangeN = (event) => {
        const nameValue = event.target.value

        this.setState(
            {
                name: nameValue.length > 0 ? false : true
            }
        )

        console.log(this.state.name, nameValue);
    }

    handleChangeP = (event) => {
        const passwordValue = event.target.value

        this.setState(
            {
                password: passwordValue.length > 0 ? false : true
            }
        )

        console.log(this.state.password, passwordValue);
    }

    componentDidMount() {
        this.refInput.focus();
      }

    render() {
        return (
            <div>
                <h3>Uncontrolled Form</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <input 
                    name="name" 
                    onChange={this.handleChangeN} 
                    ref={(input) => { this.refInput = input; }}
                    />
                    <br />
                    <input name="password" type="password" onChange={this.handleChangeP} />
                    <br />
                    <input name="remember" type="checkbox"/>
                    <br />
                    <button 
                        disabled={this.state.name || this.state.password}  
                        type="submit"
                    >
                    Log In
                    </button>
                    <button 
                        disabled={this.state.name && this.state.password}
                        type="reset"
                        >
                    Reset
                    </button>
                </form>
            </div>
        )
    }
}