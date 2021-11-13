import React from 'react'
import PokedexSelector from "../PokedexSelector";

export default function PokedexDeck({ data }) {
    // console.log(data.list);  // -- testing
    return (
        <div className="pokedex-container">
            <div className="pokedex">
                <PokedexSelector data={ data } />
            </div>
        </div>
    );
};