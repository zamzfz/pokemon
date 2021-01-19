import React from 'react';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/pokelist" className='navbar-brand'>Pokemon</NavLink>                  
            <button 
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
                />
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink to="/pokelist" className="nav-link">Pokelist</NavLink>                  
                    <NavLink to="/pokedex" className="nav-link">Pokedex</NavLink>                  
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
