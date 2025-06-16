// This file contains code to fetch details about 150 pokemon one by one.

//First we store the container div in a global variable
const pokemonContainer = document.getElementById('pokemon-container');

//Since we know we need 150 pokemon, I create a for loop
//Start with i = 1 as there is no pokemon with number 0
for (let i = 1; i <= 150; i++) {
  // The below fetch will happen a 150 times and display a 150 pokemon
  //Eg:
  // On round 1 => fetch from https://pokeapi.co/api/v2/pokemon/1 and display pokemon 1
  // On round 2 => fetch from https://pokeapi.co/api/v2/pokemon/2 and display pokemon 2

  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
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
      displayPokemon(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// ----------------------
// Function that does DOM Manipulation.
// This function is expecting a single pokemon object as argument.
// This time we get more than just the name and url of the pokemon
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
  // Give some text to the above h2
  // Since the pokeApi gives names in lowercase, we can convert the first letter to uppercase and the rest stays the same
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); //Eg: bulbasaur => B + ulbasaur
  pokemonName.setAttribute('class', 'text-xl font-bold text-gray-600');

  // The above 3 elements were only created but not put together. Thats the next step
  pokemonCard.appendChild(pokemonImg); //Insert the img element inside of the pokemon card
  pokemonCard.appendChild(pokemonName); //Also insert the h2 element inside of the pokemon card

  pokemonContainer.appendChild(pokemonCard); // Now, we insert the whole card inside of the pokemon container
  // Note that pokemonContainer is targeted on top of the file in line 4.
}
