import React, {useContext} from 'react';
import { PokemonContext } from './PokemonContext';
import CapturedPokemon from './CapturedPokemon';
    
    
const Pokedex = (props) => {
    const pokedex = useContext(PokemonContext);
    let pokemon = pokedex.pokedex.map((e,i) => {
        return <CapturedPokemon key={i} pokemon={e}/>
    })
    
    return(
        <div>
            <h1>Pokedex</h1>
            <div className="pokemons-list">
                    {pokemon}
            </div>
        </div>
    );
}

export default Pokedex;
    