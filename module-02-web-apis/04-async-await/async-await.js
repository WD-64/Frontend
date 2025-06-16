const pokemonContainer = document.getElementById('pokemon-container');

/*
    We create an async function using the async keyword

    Eg: 
    const add = async (num1, num2) =>  num1 + num2
        OR
    async function add() { return num1 + num2}

    All async functions that we create are converted to promises
*/
const fetchPokemon = async () => {
  try {
    //await keyword waits for the promise to complete before proceeding with the rest of the function
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    // Since this is a promise, we wait for it to complete before returning data
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayPokemon = async () => {
  try {
    const pokemonData = await fetchPokemon(); //We need to wait for our async function fetchPokemon to return the data

    //Everything below will only run once the pokemonData is avaiable
    //Just some DOM manipulation below
    const pokemonCard = document.createElement('div'); // First we create a Pokemon card
    pokemonCard.classList.add(
      'shadow-md',
      'p-4',
      'm-2',
      'flex',
      'flex-col',
      'items-center'
    );

    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemonData.sprites.front_default;
    pokemonImg.className = 'mb-4';

    const pokemonName = document.createElement('h2');

    pokemonName.textContent =
      pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    pokemonName.setAttribute('class', 'text-xl font-bold text-gray-600');

    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);

    pokemonContainer.appendChild(pokemonCard);
  } catch (error) {
    console.log(error);
  }
};

// Using await on the global scope is only possible when you set type='module' in the script tag
await displayPokemon();

// Although we could do the below on the global scope, it's rare to see this and is NOT recommended!
const result = await fetch('https://pokeapi.co/api/v2/pokemon/1');
const data = await result.json();
console.log(data);
