import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';
import pokemon from '../test/staticPokemon.js';

class PokemonList extends Component {
    onRender(el){
        let listItemsArray = this.props.pokemon;
        
        listItemsArray.forEach(element => {
            const props = { pokemon : element };
            const item = new PokemonItem(props);
            const itemDOM = item.renderDOM();
            el.appendChild(itemDOM);
        });
    }

    renderHTML(){
        return /*html*/`<section class="pokedex"></section>`;
    }
}

export default PokemonList;