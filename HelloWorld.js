import React from "react";

class HelloWorld extends React.Component {
    constructor() {
        super()

        this.state = {
            who: "world"
        }

    }

    render() {
        return(
            <div>
                <p>Hello, {this.props.who}.</p>
                <input type="button">World</input>
                <input type="button">Friend</input>
                <input type="button">React</input>
            </div>
        )
    }
}

export default HelloWorld;