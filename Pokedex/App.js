import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokemonList from './PokemonList.js';
import getHellaPokemon from '../services/pokedex-api.js';

class App extends Component{
    async onRender(){

        const header = new Header();
        const headerDOM = header.renderDOM();
        document.body.appendChild(headerDOM);

        const searchSort = new SearchSort();
        const searchSortDOM = searchSort.renderDOM();
        document.body.appendChild(searchSortDOM);

        const pokemonList = new PokemonList({ pokemon: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        document.body.appendChild(pokemonListDOM);

        const fetchedPokemon = await getHellaPokemon();
        const pokemonResults = fetchedPokemon.results;
        pokemonList.update({ pokemon: pokemonResults });
        //console.log(pokemonResults);

    }

    renderHTML(){
        return /*html*/`
            <body>
            </body>
        `;
    }
}

export default App;