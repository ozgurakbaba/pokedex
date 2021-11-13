import { useState, useEffect } from 'react';
import { getPokemonDescriptionByPID, getPokemonSpriteUrlByPID } from '../../api/utils';

import PokedexNav from "../PokedexNav";

export default function PokedexCard({ pokemon }) {
    // console.log(pokemon);     // -- testing
    const [pokemonId, setPokemonId] = useState(1);
    const [description, setDescription] = useState("");
    const [spriteUrl, setSpriteUrl] = useState("");

    const prevPokemonId = () => {
        setPokemonId(Number(pokemonId)-1);
        getPokemonDetailsFromAPI();
        console.log("<< prev", pokemonId);
    }

    const nextPokemonId = () => {
        setPokemonId(Number(pokemonId)+1);
        getPokemonDetailsFromAPI();
        console.log("next >>", pokemonId);
    }

    async function getPokemonDetailsFromAPI() {
        await getPokemonDescriptionByPID(pokemonId).then((data) => setDescription(data));
        setSpriteUrl(getPokemonSpriteUrlByPID(pokemonId));
    }
    
    useEffect(() => {
        getPokemonDetailsFromAPI();
        setPokemonId(pokemon.substring(pokemon.indexOf("-")+1, pokemon.length));
    }, [pokemon]);

    return (
        <>
        <div className="card">
            <img src={ spriteUrl } alt="Pokemon Name" title="Pokemon Name" width="200" height="200" />
            <h1>{ pokemon.charAt(0).toUpperCase() + pokemon.substring(1, pokemon.indexOf("-")) }</h1>
            <p>{ description }</p>
        </div>
        <PokedexNav pid={ pokemonId } prev={ prevPokemonId } next={ nextPokemonId } />
        </>
    );
    
};