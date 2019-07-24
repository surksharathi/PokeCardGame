import React, { Component } from 'react';
import Box from "./Box";
import "./BoxContainer.css"

export default class BoxContainer extends Component {


    static defaultProps = {
        numBoxes: 20,
        allColor: ["yellow", "Blue", "green", "red", "Black", "purple",
            "orange", "white", "Olive",
            "pink", "gold", "grey", "BlueViolet"]
    }
    render() {

        const boxes = Array.from({ length: this.props.numBoxes })
            .map((e, index) => (<Box colors={this.props.allColor} key={index} />)


            )
        return (
            <div className="BoxContainer" >
                {boxes}

            </div>
        )
    }
}
