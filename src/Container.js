import React from "react";

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-white rounded border border-4 border-red-600 p-5 m-2">
                {this.props.children}
            </div>
        )
    }
}