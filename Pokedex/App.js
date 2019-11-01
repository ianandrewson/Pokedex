import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokemonList from './PokemonList.js';

class App extends Component{
    onRender(){
        const header = new Header();
        const headerDOM = header.renderDOM();
        document.body.appendChild(headerDOM);

        const searchSort = new SearchSort();
        const searchSortDOM = searchSort.renderDOM();
        document.body.appendChild(searchSortDOM);
    }

    renderHTML(){
        return /*html*/`
            <body>
            </body>
        `;
    }
}

export default App;