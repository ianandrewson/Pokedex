//const pokeURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?defense=120';


async function getHellaPokemon() {
    const pokeURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';
    let queryString = window.location.hash.slice(1);
    const URL = `${pokeURL}${queryString}`;

    const response = await fetch(URL);
    return await response.json();
}

export default getHellaPokemon;