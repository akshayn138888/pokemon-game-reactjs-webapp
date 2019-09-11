import React, {Component} from 'react';
import './Pokecard.css'

import App from './App';
import './App.css';


//const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padTothree = (number) => (number <= 999 ? `00${number}`.slice(-3): number )

class Pokecard extends Component{

    render(){

    let imgSrc = `${POKE_API}${padTothree(this.props.id)}.png`;

        return (
            <div className ="Pokecard">
                <h1 className = "Pokecard-title">{this.props.name}</h1>
                <div className = "Pokecard-image">
                    <img src= {imgSrc} alt = {this.props.name}/>
                </div>
                <div className = "Pokecard-data"> TYPE : {this.props.type} </div>
                <div className = "Pokecard-data"> EXP : {this.props.exp} </div>
                

            </div>


        );


    }
}
export default Pokecard;