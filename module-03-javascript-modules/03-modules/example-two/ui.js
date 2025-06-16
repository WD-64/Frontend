const pokemonContainer = document.getElementById('pokemon-container');

function displayPokemon(pokemon) {
  const pokemonCard = document.createElement('div'); // First we create a Pokemon card
  pokemonCard.classList.add(
    'shadow-md',
    'p-4',
    'm-2',
    'flex',
    'flex-col',
    'items-center'
  );

  const pokemonImg = document.createElement('img'); //Then we create the img element for the pokemon
  pokemonImg.src = pokemon.sprites.front_default; //Give the above img element a src. PokeApi calls them sprites
  pokemonImg.className = 'mb-4';

  const pokemonName = document.createElement('h2'); //Create an element for displaying the name
  /*
  Give some text to the above h2
  Since the pokeApi gives names in lowercase, we can convert the first letter to uppercase and the rest stays the same
  Eg: bulbasaur => B + ulbasaur
  */
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.setAttribute('class', 'text-xl font-bold text-gray-600');

  // The above 3 elements were only created but not put together. Thats the next step
  pokemonCard.appendChild(pokemonImg); //Insert the img element inside of the pokemon card
  pokemonCard.appendChild(pokemonName); //Also insert the h2 element inside of the pokemon card

  pokemonContainer.appendChild(pokemonCard); // Now, we insert the whole card inside of the pokemon container
  // Note that pokemonContainer is targeted on top of the file in line 4.
}

export { displayPokemon }; //This is what we call a named export. Basically opposite of 'default exports'

/*
Why didn't we decide on a default export here?
Because I expect to create more functions to do some DOM manipulation here.
Basically anticipating what I might need for the future and being ready for it.
*/
