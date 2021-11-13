import { useState, useEffect } from 'react';
import { getPokemonDescriptionByPID, getPokemonSpriteUrlByPID } from '../../api/utils';



export default function PokedexCard({ pokemon }) {
    // console.log(pokemon);     // -- testing
    const pid = (!pokemon) || pokemon.substring(pokemon.indexOf("-")+1, pokemon.length);

    const [description, setDescription] = useState("");
    const [spriteUrl, setSpriteUrl] = useState("");

    async function getPokemonDetailsFromAPI() {
        await getPokemonDescriptionByPID(pid).then((data) => setDescription(data));
        setSpriteUrl(getPokemonSpriteUrlByPID(pid));
    }
    
    useEffect(() => {
        getPokemonDetailsFromAPI();
    }, [pid]);

    return (
        <>
        <div className="card">
            <img src={ spriteUrl } alt="Pokemon Name" title="Pokemon Name" width="200" height="200" />
            <h1>{ pokemon.charAt(0).toUpperCase() + pokemon.substring(1, pokemon.indexOf("-")) }</h1>
            <p>{ description }</p>
        </div>
        </>
    );
    
};