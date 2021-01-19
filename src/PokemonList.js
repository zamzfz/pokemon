import React, { useState, useEffect } from 'react';
import axios from "axios"
import Pokemon from './Pokemon';
import "./PokemonList.css"
import { v4 as uuidv4 } from 'uuid';

const URL = "https://pokeapi.co/api/v2/pokemon";
const PokemonsList = () => {
    const [pokelist, setPokelist] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);

    const loadPokemon = async (data) => {
        let pokemonData = await Promise.all(data.map(async el =>{
            let resPokemon = await axios.get(el.url);
            return resPokemon.data;
        }));
        setPokelist(pokemonData);
    }
    
    useEffect(() => {
        const fetchPokemons = async () => {
            let res = await axios.get(URL);
            await loadPokemon(res.data.results);
            setPrevUrl(res.data.previous);
            setNextUrl(res.data.next);
            setLoading(false);
        }
        fetchPokemons();
    },[]);

    const next = async () => {
        setLoading(true)
        let res = await axios.get(nextUrl)
        await loadPokemon(res.data.results);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        setLoading(false);
    }

    const prev = async () =>{
        if(!prevUrl) return;
        setLoading(true)
        let res = await axios.get(prevUrl)
        await loadPokemon(res.data.results);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        setLoading(false);    
    }

    let pokemon = pokelist.map((e) => {
        return <Pokemon key={e.id} pokemon={e}/>
    })

    return (
    <div className="App pokemon-list">
        <h2 >Pokemons List</h2>
        <div className="button-pokelist">
            <button className="btn btn-primary" onClick={prev}>Previous</button>
            <button className="btn btn-primary" onClick={next}>Next</button>
        </div>
        <div className="">
            {loading ? <h1>Wait a moment .. </h1> :
            (
                <>
                <div className="pokemons-list">
                    {pokemon}
                </div>
                </>
            ) 
            } 
        </div>
    </div>
    )
}

export default PokemonsList;
