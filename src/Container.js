import React from "react";

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-white rounded border border-4 border-red-600 p-5 m-2">
                <div className="text-2xl font-bold underline decoration-sky-500">
                    {this.props.tittle}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}