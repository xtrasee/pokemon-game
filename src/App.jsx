import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
// import Card from './components/Card'

// players must choose on different ones 6/6. collect arrays of 6 pokemons
// three levels

function App() {

    const getPokemonData = async (id) => {
        const res = axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
        return res;
    }

    useEffect(() => {
        getPokemonData();
    }, []);

    return (
        <>
            
        </>
    );
}
export default App
