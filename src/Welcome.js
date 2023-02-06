import React from "react";
import { Age } from "./Age";

const Welcome = (name, age) => {
    return (
        <>
            <p>Welcome, {name}!</p>
            {age > 18 && <Age value={age} />}
        </>
    );
};

export default Welcome ;