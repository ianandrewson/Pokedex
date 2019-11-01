import Component from '../Component.js';

class PokemonItem extends Component{
    onRender(){

    }
    renderHTML(){
        return /*html*/`
            <article>
                <img src="" alt="">
                <p class="pokemon-name">Name: Venusaur</p>
                <p class="pokemon-type">Grass/Poison</p>
                <p class="pokemon-id">ID: 3</p>
                <div class="stats">
                    <span class="stat-atk">Atk: 82 </span><span class="stat-def">Def: 83 </span><span class="stat-spd">Spd: 80 </span>
                </div>
                <div class="more-stats">
                    <span class="spc-atk">Spc-Atk: 100</span>
                    <span class="spc-def">Spc-Def: 100</span>
                    <span class="hp">HP: 80</span>
                </div>
            </article>
        `;
    }
}

export default PokemonItem;