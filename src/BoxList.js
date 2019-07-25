import React, { Component } from 'react';
import Box from "./Box";
import NewBoxForm from "./newBoxForm"

export default class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            box: [{ width: 10, height: 20, color: "orange" },
            { width: 20, height: 20, color: "Red" }]
        }
    }
    render() {
        const boxes = this.state.box.map(b => (
            <Box width={b.width} height={b.height} color={b.color} />
        )


        )
        return (
            <div>
                <h1>Color Maker Thinker</h1>
                <NewBoxForm />
                {boxes}

            </div>
        )
    }
}
