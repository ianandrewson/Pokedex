import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokemonList from './PokemonList.js';
import staticPokemon from '../test/staticPokemon.js';

class App extends Component{
    onRender(){
        let props = { pokemon: staticPokemon };

        const header = new Header();
        const headerDOM = header.renderDOM();
        document.body.appendChild(headerDOM);

        const searchSort = new SearchSort();
        const searchSortDOM = searchSort.renderDOM();
        document.body.appendChild(searchSortDOM);

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();
        document.body.appendChild(pokemonListDOM);
    }

    renderHTML(){
        return /*html*/`
            <body>
            </body>
        `;
    }
}

export default App;