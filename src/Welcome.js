import React from "react";
import { Age } from "./Age";

const Welcome = (props) => {
    return (
        <>
            <p>Welcome, {props.name}!</p>
            {props.age > 18 && <Age value={props.age} />}
        </>
    );
};

export default Welcome ;