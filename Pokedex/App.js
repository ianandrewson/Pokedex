import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokemonList from './PokemonList.js';

class App extends Component{
    onRender(){
        const header = new Header();
        const headerDom = header.renderDOM();
        document.body.appendChild(headerDom);

        
    }

    renderHTML(){
        return /*html*/`
            <body>
            </body>
        `;
    }
}

export default App;