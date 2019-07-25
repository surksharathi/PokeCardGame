import React, { Component } from 'react'
//import { choice } from "./helper";
import "./Box.css"

export default class Box extends Component {




    render() {

        return (
            <div>
                <div style={{
                    width: `${this.props.width}em`,
                    height: `${this.props.width}em`,
                    backgroundColor: `${this.props.color}`
                }}>

                </div>
                <button>x</button>

            </div>
        )
    }
}
