import React from "react";
import { Age } from "./Age";

export const Welcome = ({name="Gilxhon", age=22}) => {

    return (
        <>
            <p>Welcome, {name}!</p>
            {age > 18 && <Age value={age} />}

            <br />


        </>
    )
}