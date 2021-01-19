import React, {createContext, useState, useEffect} from 'react';

export const PokemonContext = createContext();


export const PokemonProvider = (props) => {
    const initialPokedex = JSON.parse(window.localStorage.getItem("pokedex") || '[]');
    const [pokedex, setPokedex] = useState(initialPokedex);
    useEffect(() => {
        window.localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }, [pokedex]);

    const addPokedex = (pokemon) => {
        setPokedex(state => {
            let isExist = (state.filter(e => e.nickname == pokemon.nickname).length > 0)
            if(!isExist){
                state = [...state, pokemon]

            }else{
                alert("Nickname has been already taken")
            }
            return state
        })

    }
    const removePokemon = nickname => {
        const updatePokedex = pokedex.filter(pokemon => {return nickname !== pokemon.nickname})
        setPokedex(updatePokedex)
    }
    return (
       <PokemonContext.Provider value={{pokedex, addPokedex, removePokemon}}>
           {props.children}
       </PokemonContext.Provider>
            
    );
}

