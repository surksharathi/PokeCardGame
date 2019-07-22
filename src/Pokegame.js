

import React, { Component } from 'react';
import Pokedex from "./Pokedex"

export default class Pokegame extends Component {

    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "fire", base_exp: 32 },
            { id: 7, name: "Squirtle", type: "water", base_exp: 63 },
            { id: 11, name: "Metapod", type: "bug", base_exp: 50 },
            { id: 12, name: "Butterfree", type: "normal", base_exp: 34 },
            { id: 25, name: "Pikachu", type: "pasion", base_exp: 67 },
            { id: 39, name: "Jigglypuff", type: "flying", base_exp: 82 },
            { id: 94, name: "Gengar", type: "electric", base_exp: 66 },
            { id: 133, name: "Eevee", type: "pasion", base_exp: 20 },

        ]
    }
    render() {
        let Hand1 = [];
        let Hand2 = [...this.props.pokemon];
        while (Hand1.length < Hand2.length) {
            let randIdx = Math.floor(Math.random() * Hand2.length);
            let randPokemon = Hand2.splice(randIdx, 1)[0];
            Hand1.push(randPokemon);
        }
        let exp1 = Hand1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        let exp2 = Hand2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);


        return (

            < div >
                <Pokedex pokemon={Hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={Hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div >
        )
    }
}

