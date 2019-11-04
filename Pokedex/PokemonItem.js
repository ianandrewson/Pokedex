import Component from '../Component.js';

class PokemonItem extends Component{
    onRender(){

    }
    renderHTML(){
        const pokemonToRender = this.props.pokemon;

        return /*html*/`
            <article>
                <img src="${pokemonToRender.url_image}" alt="">
                <p class="pokemon-name">Name: ${pokemonToRender.pokemon}</p>
                <p class="pokemon-type">${pokemonToRender.type_1}/${pokemonToRender.type_2}</p>
                <p class="pokemon-id">ID: ${pokemonToRender.id}</p>
                <div class="stats">
                    <span class="stat-atk">Atk: ${pokemonToRender.attack} </span><span class="stat-def">Def: ${pokemonToRender.defense} </span><span class="stat-spd">Spd: ${pokemonToRender.speed} </span>
                </div>
                <div class="more-stats">
                    <span class="spc-atk">Spc-Atk: ${pokemonToRender.special_attack}</span>
                    <span class="spc-def">Spc-Def: ${pokemonToRender.special_defense}</span>
                    <span class="hp">HP: ${pokemonToRender.hp}</span>
                </div>
            </article>
        `;
    }
}

export default PokemonItem;