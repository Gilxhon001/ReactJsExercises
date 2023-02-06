import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: "Hello",
    it: "Ciao",
}
export default class DisplayLanguage extends React.Component {
    render() {
        return <LanguageContext.Consumer>
            {(Language) => {
                return <h1>{Strings[Language]}</h1>
            }}
        </LanguageContext.Consumer>
    }

}