const POKEAPI_LIST_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
const POKEAPI_DESCRIPTION_RAW_URL = "https://pokeapi.co/api/v2/pokemon-species/";
const POKEAPI_DESCRIPTION_URL = "https://pokeapi.co/api/v2/pokemon-species/1";
const POKEAPI_SPRITES_RAW_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKEAPI_SPRITES_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

export async function getPokemonList() {
    const data = await fetch(POKEAPI_LIST_URL).then((res) => res.json());
    if (data) return data.results;
}

export async function getPokemonDescription() {
    const data = await fetch(POKEAPI_DESCRIPTION_URL).then((res) => res.json());
    if (data) return data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

export async function getPokemonDescriptionByPID(pid) {
    const data = await fetch(`${POKEAPI_DESCRIPTION_RAW_URL}${pid}`).then((res) => res.json());
    if (data) return data.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

export function getPokemonSpriteUrl() {
    return POKEAPI_SPRITES_URL;
}

export function getPokemonSpriteUrlByPID(pid) {
    return `${POKEAPI_SPRITES_RAW_URL}${pid}.png`;
}