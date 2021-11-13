import React, { useState, useEffect } from 'react'
import { getPokemonList } from './api/utils'

import PokedexDeck from './components/PokedexDeck';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  async function getPokemonListFromAPI() {
    await getPokemonList().then((data) => setPokemons(data));
  }

  useEffect(() => {
    getPokemonListFromAPI();
  }, []);

  // console.log(pokemons);  // -- testing

  return (
    <div className="app-container">
      <PokedexDeck data={ pokemons } />
    </div>
  );
}

export default App;