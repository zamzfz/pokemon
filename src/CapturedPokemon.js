import React, {useContext} from 'react';
import { PokemonContext } from './PokemonContext';
import './Pokemon.css'

const CapturedPokemon = ({pokemon}) => {
    
    const { removePokemon } = useContext(PokemonContext);
    
    const removeHandler = () => {
        removePokemon(pokemon.nickname)
    }

    return (
        <div className='pokemon card bg-white border-white border-0'>
            <div className="card card-custom">
                <img src={pokemon.sprites.front_default} className="card-img-top" />
                <div className="types">
                        {pokemon.types.map( e => (
                            <p className="type">{e.type.name}</p>
                            ))}
                    </div>
                <div className="card-body captured">
                    <div>
                        <h6 className="card-title">Name : {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h6>
                        <p className="card-text">Nickname : {pokemon.nickname}</p>    
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={removeHandler}> Release </button>
                    </div>    
                </div>
                
            </div>
        </div>
    );
}

export default CapturedPokemon;
