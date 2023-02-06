import React from "react";

const Sum = ({numbers}) => {
    const theSum = numbers.reduce((a,b) => a+b)
    return (
        <h1>The sum of all numbers is: {theSum}</h1>
    );
}

export default Sum ;