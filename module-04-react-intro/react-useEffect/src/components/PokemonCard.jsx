import { useEffect, useState } from 'react';

const PokemonCard = () => {
  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect will run once the UI has been built
  //This useEffect will run everytime the pokemonNumber changes
  useEffect(() => {
    //First we create the function we want to execute
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
        );

        if (!response.ok) throw new Error('Something went wrong!');

        const data = await response.json();
        setPokemonData(data); //Now we store the pokemon data from pokeApi in state
        setIsLoading(false); //Since we now have pokemon data, we can set isLoading to false.
      } catch (error) {
        console.log(error);
      }
    };

    //Call the function that we created
    fetchPokemon();
  }, [pokemonNumber]);

  /*
    This function is responsible for:
        1. Extracing the value from input
        2. Setting the pokemonNumber state to this new value 
  */
  const handleChange = (event) => {
    const number = +event.target.value; //+ changes string to number. Eg: '22' => 22

    if (number <= 0) return;
    //If number is less than or equal 0, we stop the function
    //This makes sure that we are not storing 0 or minus values in pokemonNumber state

    setPokemonNumber(number);
  };

  //Will only run if isLoading is true
  //isLoading is true initially (check its default value)
  //isLoading is only set to false once the fetch is complete
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <div className='shadow-md w-1/2 bg-amber-100 flex flex-col items-center'>
        <img src={pokemonData.sprites.front_shiny} />
        <h3>{pokemonData.name}</h3>
      </div>
      <input type='number' className='border-2' onChange={handleChange} />
    </>
  );
};

export default PokemonCard;
