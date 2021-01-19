import './App.css';
import {Switch, Route, useLocation} from "react-router-dom"
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails'
import {PokemonProvider} from './PokemonContext'
import Pokedex from './Pokedex';
import Navbar from './Navbar';
import { v4 as uuidv4 } from 'uuid';


function App(){
  return(
    <div>
      <Navbar />
      <Switch>
        <PokemonProvider>
          <Route exact path="/" render={()=><PokemonList key={uuidv4()}/>}/>
          <Route exact path="/pokelist" render={()=><PokemonList key={uuidv4()}/>}/>
          <Route exact path="/pokelist/:name" render={()=><PokemonDetails key={uuidv4()}/>}/>
          <Route exact path="/pokedex" render={()=><Pokedex  key={uuidv4()}/>}/>
        </PokemonProvider>
      </Switch>
    </div>
  );
}

export default App;
