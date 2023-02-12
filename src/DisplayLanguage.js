import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: "Hello",
    it: "Ciao",
}

const DisplayLanguage = () => {
    const Language = useContext(LanguageContext);

    return <h1>{Strings[Language]}</h1>
};

export default DisplayLanguage;
