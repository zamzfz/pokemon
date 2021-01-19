import React from 'react';
import {Link} from "react-router-dom"
import "./Pokemon.css"

const Pokemon = ({pokemon}) => {
    return (
        <div className='pokemon card bg-white border-white border-0'>
            <div className="card card-custom">
                <img src={pokemon.sprites.front_default} className="card-img-top" />
                <div className="types">
                        {pokemon.types.map( e => (
                            <p className="type">{e.type.name}</p>
                            
                            ))}
                    </div>
                <div className="card-body">    
                    <h5 className="card-title">Name : {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                    
                    <Link
                        to={{
                            pathname: `/pokelist/${pokemon.name}`, 
                            state: {pokemon}
                        }}

                        className="btn btn-primary"
                        >
                    Detail Pokemon
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
