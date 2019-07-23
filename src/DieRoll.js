import React, { Component } from 'react'
import Die from "./Die";
import "./RollDice.css"
export default class DieRoll extends Component {

    static defaultProps = {

        sides: ["one", "two", "three", "four", "five", "six"]
    }

    state = {
        die1: "one",
        die2: "one",
        isRolling: false

    }

    roll = () => {

        // get  random the value of dice roll

        const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        this.setState({ die1: newDice1, die2: newDice2, isRolling: true });

        setTimeout(() => {

            this.setState({ isRolling: false })

        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} isRolling={this.state.isRolling} />
                    <Die face={this.state.die2} isRolling={this.state.isRolling} />
                </div>

                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Role Dice!"}
                </button>
            </div>
        )
    }
}


