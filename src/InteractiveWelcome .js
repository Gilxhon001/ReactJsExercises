import React from "react";
import Welcome from "./Welcome"

export default class InteractiveWelcome extends React.Component {
    state = {
        value : '',
    }

    handleInputChange = (event) => {
        const name = event.target.value;

        this.setState({value : name} )
    }

    


    render() {
        return (
            <div> 
                <input 
                name="name" 
                onChange={this.handleInputChange} 
                value={this.state.value}
                />

                <Welcome name={this.state.value} />
            </div>
        )
    }
}