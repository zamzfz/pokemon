import React, { useState, useContext }  from 'react';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { PokemonContext } from './PokemonContext'
import "./PokemonDetails.css"
const PokemonDetails = () => {
    
    const { addPokedex, isSuccess} = useContext(PokemonContext);
    const [isCatch, setIsCatch] = useState(false);
    const [value, setValue] = useState("");
    // console.log(useLocation().state)
    const history = useHistory();
    if(typeof useLocation().state == 'undefined'){
        history.push("/pokelist")
    }
    const pokemon = useLocation().state.pokemon;

    const catchHandle = (e) => {
        e.preventDefault();
        let catchProbability = Math.random();
        if(catchProbability > 0.5){
            setIsCatch(true)
        }
    }

    const reset = () => {
        setValue("")
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        pokemon.nickname = value
        addPokedex(pokemon)
        setIsCatch(false)
        reset()
        history.push("/pokedex");
    }

    let data = ""

    if(isCatch){
       data =  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h1 className="success">Success Catch ! </h1>
                        <label htmlFor='nickname'>Nickname</label>
                        <input
                            className="form-control"
                            type='text'
                            name='nickname'
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-success">Add Nickname</button>
                </form>

    }else{ 
        data = <div className="pokemon-info-2">
                    {pokemon.moves.map(e => {return <p className="pokemon-info-2 move">{e.move.name}</p> })}
                </div>
    }
    
    return (
        <div>
            <h1>Pokemon Details</h1>
            <div className="top">
                <div className="card detail">
                    <h6 className="pokename">{pokemon.name.toUpperCase()}</h6>
                    <img className="card-img-top detail" src={pokemon.sprites.front_default}></img>
                    <div className="card-body detail">
                        <div className="pokemon-details">
                            <div className="pokemon-info-1">
                                <h6 className="type">{pokemon.types.map(e => {return e.type.name })}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catch">
                    {isCatch ? "":<button className="btn btn-primary catch" onClick={catchHandle}>Catch Me</button>}
                </div>
            </div>
            <div className="bot">
                {isCatch ? "":<h6 className="moves">Pokemons Move</h6>}
                {data}  
            </div>
        </div>
    );
}

export default PokemonDetails;
