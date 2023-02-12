import React from "react";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
    state = {
        language: 'en',
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }

    render() {
        return (
            <Container tittle="Set Your Language">
                <div>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italian</option>
                    </select>
                </div>

                <LanguageContext.Provider value={this.state.language}>
                    <Container tittle={<DisplayLanguage />} />
                </LanguageContext.Provider>
            </Container>
        )
    }
}
