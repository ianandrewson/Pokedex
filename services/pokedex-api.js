const pokeURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?defense=120';

async function getHellaPokemon() {
    const response = await fetch(pokeURL);
    return await response.json();
}

export default getHellaPokemon;