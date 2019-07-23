import React, { Component } from 'react';
import { choice } from "./helper";
import Coin from "./Coin"

export default class CoinContainer extends Component {

    static defaultProps = {

        coin: [
            { side: "tails", imageUrl: "https://tinyurl.com/react-coin-tails-jpg" },
            { side: "heads", imageUrl: "https://tinyurl.com/react-coin-heads-jpg" }
        ]

    }

    state = {
        currCoin: null,
        nflip: 0,
        nHead: 0,
        nTail: 0
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coin);

        this.setState(st => {
            return {
                currCoin: newCoin,
                nflip: st.nflip + 1,
                nHead: st.nHead + (newCoin.side === "heads" ? 1 : 0),
                nTail: st.nHead + (newCoin.side === "tails" ? 1 : 0)
            }

        })

    }

    handleClick = (e) => {
        this.flipCoin();
    }
    render() {
        return (
            <section>
                <h3>Let's Flip A Coin!'</h3>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}

                <button onClick={this.handleClick}> Flip Me !</button>
                <p> out of {this.state.nflip} flips,
                 there have been {this.state.nHead}
                    heads and {this.state.nTail} Tails</p>
            </section>

        )
    }
}
