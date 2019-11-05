import pokemon from './staticPokemon.js';
import PokemonItem from '../Pokedex/PokemonItem.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = /*html*/`
        <article>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="">
            <p class="pokemon-name">Name: venusaur</p>
            <p class="pokemon-type">grass/poison</p>
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
    const pokemonProp = pokemon[0];
    const props = { pokemon: pokemonProp };

    //Act 
    // Call the function you're testing and set the result to a const
    

    const newPokemon = new PokemonItem(props);
    const result = newPokemon.renderHTML();

    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(result, expected);
});
