// We import the named export from ui.js
import { displayPokemon } from './ui.js';

const fetchSinglePokemon = (pokemonNumber) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return response.json();
    })
    .then((data) => {
      if (!data) {
        return;
      }

      displayPokemon(data); //Call the function from ui.js
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchSinglePokemon; //Using a default export here
