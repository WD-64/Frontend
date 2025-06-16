// This file contains code to fetch 150 pokemon all at once.
// The PokeApi however does not give us all the details about the pokemon, just a name and a url.
// Check script-two.js for the version fetching detailed pokemon.

const pokemonContainer = document.getElementById('pokemon-container');

//According to the PokeApi Docs, we can add search parameters to the url after a question mark to limit the results.
// Eg: ?limit=100 to get 100 pokemon
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then((response) => {
    //Some situations, for example 404 page not found are not rejected as a promise.
    //So we need to manually trigger an error. This gets caught in the catch  block for further processing.
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    return response.json();
  })
  .then((data) => {
    console.log(data.results); //This contains the actual pokemon data (name and url only)

    data.results.forEach((pokemon) => {
      displayPokemon(pokemon); //Call the function that does the DOM Manipulation
    });
  })
  .catch((err) => {
    console.log(err);
  });

// -----------------------------

//Function that handles DOM Manipulation
//This function is expecting a single pokemon object as argument.
function displayPokemon(pokemon) {
  const pokemonListItem = document.createElement('li');
  pokemonListItem.textContent = pokemon.name;
  pokemonContainer.appendChild(pokemonListItem);
}
