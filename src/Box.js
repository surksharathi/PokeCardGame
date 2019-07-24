import React, { Component } from 'react'
import { choice } from "./helper";
import "./Box.css"

export default class Box extends Component {


    constructor(props) {

        super(props);
        this.state = { color: choice(this.props.colors) }
    }

    pickColor = () => {

        let newColor;
        do {
            newColor = choice(this.props.colors)
        }
        while (newColor === this.state.color)

        this.setState({ color: newColor })

    }

    handleClick = () => {
        this.pickColor();
    }
    render() {
        console.log(this.props.color)
        return (
            <div className="Box"
                style={{ backgroundColor: this.state.color }}

                onClick={this.handleClick}
            />


        )
    }
}
