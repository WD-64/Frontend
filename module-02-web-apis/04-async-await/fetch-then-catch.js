console.log('Start of script');

fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('End of script');
