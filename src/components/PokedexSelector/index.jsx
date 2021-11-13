import React, { useState } from 'react'

import PokedexCard from "../PokedexCard";

export default function PokedexSelector ({ data }) {
    // console.log(data);
    const [pokemon, setPokemon] = useState("Bulbasaur-1");

    return (
        <>
        <select onChange={(e) => setPokemon(e.target.value)}>
            {data && data.map((opt, i) => {
                return <option key={i} value={opt.name + "-" + i} >{opt.name.toUpperCase()}</option>
            })}
        </select>
        <PokedexCard pokemon={ pokemon } />
        </>
    );
}