// Import something that was exported as default export
import fetchSinglePokemon from './fetch.js';

for (let i = 1; i <= 150; i++) {
  fetchSinglePokemon(i);
}
