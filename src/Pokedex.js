
import React, { Component } from 'react'

import Pokecard from './Pokecard';
import  './Pokedex.css'

class Pokedex extends Component{
    
    render () {

        let title; 
        if (this.props.isWinner){
            title = <h1 className ="Pokedex-winner">Winning Hand</h1>

        }else{
            title = <h1 className ="Pokedex-loser"> Losing Hand</h1>

        }

        return(
        
        <div className = "Pokedex">
             {title}
        
            <h4> Total Epxerience : {this.props.exp}</h4>
            <p>{this.props.isWinner ? 'Winner!' : 'Loser ! Try Again'}</p>
            
            <div className = "Pokedex-cards">
                
                {this.props.pokemon.map((p)=> (
                <Pokecard id= {p.id} name = {p.name} type = {p.type} exp = {p.base_experience}/>
                )
                 )}
            </div>  
        </div>
        );
    }


}

export default Pokedex;