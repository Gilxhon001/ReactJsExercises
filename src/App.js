import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import ClickCounter from "./ClickCounter";
import { Col } from "react-bootstrap";

export class App extends React.Component {
    render() {
        return (
            <Col>
                <div className="text-center mt-5">
                    <Hello />
                    <Welcome name={<strong>Johnny</strong>} age={22} />

                    <ClickCounter />
                </div>
            </Col>
        )
    }
}
