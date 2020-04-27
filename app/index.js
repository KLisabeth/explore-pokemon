import {Pokemon} from './pokemon.js'
 
const init = () => {

    const catchButton = document.getElementById('catch');
    catchButton.addEventListener('click', (event) => {
        event.preventDefault();

        const pokemonId = document.getElementById('pokemonId').value;
        const pokemon = new Pokemon();
        pokemon
            .catchPokemon(pokemonId)
            .then(() => {
                const container = pokemon.render();
                document.getElementById('root').appendChild(container);
            });
    })

}

init();