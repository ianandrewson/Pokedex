import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokemonList from './PokemonList.js';
import getHellaPokemon from '../services/pokedex-api.js';
import Paging from './Paging.js';

class App extends Component{
    onRender(){

        const header = new Header();
        const headerDOM = header.renderDOM();
        document.body.appendChild(headerDOM);

        const searchSort = new SearchSort();
        const searchSortDOM = searchSort.renderDOM();
        document.body.appendChild(searchSortDOM);

        const pages = new Paging();
        const pagesDOM = pages.renderDOM();
        document.body.appendChild(pagesDOM);

        const pokemonList = new PokemonList({ pokemon: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        document.querySelector('main').appendChild(pokemonListDOM);

        async function loadPokemon() {
            const fetchedPokemon = await getHellaPokemon();
            const pokemonResults = fetchedPokemon.results;
            pokemonList.update({ pokemon: pokemonResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML(){
        return /*html*/`
            <body>
            </body>
        `;
    }
}

export default App;