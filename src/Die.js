import React, { Component } from 'react'
import "./dice.css"

export default class Die extends Component {
    render() {

        return (
            <div >
                <i className={`Die fas fa-dice-${this.props.face} ${this.props.isRolling ? "rolling" : ""}`}></i>
            </div>
        )
    }
}
