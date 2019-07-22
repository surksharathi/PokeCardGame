
//import React ,{Component } from 'react';

import React, { Component } from 'react';
import "./PokeCard.css"
const poke_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padTothree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeCard extends Component {



    render() {
        const { name, type } = this.props;
        const img = `${poke_API}${padTothree(this.props.id)}.png`
        return (
            <div className="PokeCard" >
                <h3 className="pokecard-title">{name}</h3>
                <img className="poke_img" key={this.props.id} src={img} alt={this.props.name}></img>
                <div className="poke-data">Type:{type}</div>
                <div className="poke-data">Exp:{this.props.base_exp}</div>
            </div>
        )
    }
}


export default PokeCard;