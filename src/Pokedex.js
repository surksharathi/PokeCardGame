
import React, { Component } from 'react';
import PokeCard from "./PokeCard";
import "./Pokedex.css"

export default class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "fire", base_exp: 62 },
            { id: 7, name: "Squirtle", type: "water", base_exp: 63 },
            { id: 11, name: "Metapod", type: "bug", base_exp: 40 },
            { id: 12, name: "Butterfree", type: "normal", base_exp: 34 },
            { id: 25, name: "Pikachu", type: "pasion", base_exp: 67 },
            { id: 39, name: "Jigglypuff", type: "flying", base_exp: 12 },
            { id: 94, name: "Gengar", type: "electric", base_exp: 6 },
            { id: 133, name: "Eevee", type: "pasion", base_exp: 30 },

        ]
    }
    render() {
        return (
            <div className="Pokedex">
                <h1>PokeDex!</h1>
                <p>Total Experience:-{this.props.exp}</p>
                <p className={this.props.isWinner ? "win" : "loser"}>{this.props.isWinner ? "Winner" : "Losser"}</p>
                <div className="Pokedex_card">
                    {this.props.pokemon.map((e, index) => (
                        <PokeCard id={e.id} name={e.name} type={e.type} base_exp={e.base_exp} index={index} />
                    )


                    )}
                </div>


            </div>
        )
    }
}

