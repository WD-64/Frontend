# Solution: Fetch within an effect

### App.jsx

```js
import './index.css';
import CharactersList from './components/CharactersList';

const App = () => {
  return (
    <div>
      <CharactersList />
    </div>
  );
};

export default App;
```

---

### CharacterList.jsx (with then / catch)

```js
import { useState, useEffect } from 'react';

const CharactersList = () => {
  const [characterData, setCharacterData] = useState([]);
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('https://swapi.tech/api/people');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(currentUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacterData(data.results);
        setPrevUrl(data.previous);
        setNextUrl(data.next);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentUrl]);

  const getNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const getPrevPage = () => {
    setCurrentUrl(prevUrl);
  };

  //   const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //You need this, incase you go for option 2 below

  if (isLoading) return <h2>Loading....</h2>;

  return (
    <div>
      {characterData.map((character, index) => (
        <h3 key={character.uid}>{character.name}</h3>

        /*
            Options to create unique keys if the API gives no id

            Option 1
            <h3 key={character.name + Math.random()}>{character.name}</h3>
            
            Option 2
            <h3 key={ids[index]}>{character.name}</h3>
        */
      ))}
      <button disabled={!prevUrl} onClick={getPrevPage}>
        Previous
      </button>
      <button disabled={!nextUrl} onClick={getNextPage}>
        Next
      </button>
    </div>
  );
};

export default CharactersList;
```

### CharacterList.jsx (with async / await)

```js
import { useState, useEffect } from 'react';

const CharactersList = () => {
  const [characterData, setCharacterData] = useState([]);
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('https://swapi.tech/api/people');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(currentUrl);
        const data = await res.json();
        setCharacterData(data.results);
        setPrevUrl(data.previous);
        setNextUrl(data.next);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentUrl]);

  const getNextPage = () => {
    setCurrentUrl(nextUrl);
  };

  const getPrevPage = () => {
    setCurrentUrl(prevUrl);
  };

  //   const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //You need this, incase you go for option 2 below

  if (isLoading) return <h2>Loading....</h2>;

  return (
    <div>
      {characterData.map((character, index) => (
        <h3 key={character.uid}>{character.name}</h3>

        /*
            Options to create unique keys if the API gives no id

            Option 1
            <h3 key={character.name + Math.random()}>{character.name}</h3>
            
            Option 2
            <h3 key={ids[index]}>{character.name}</h3>
        */
      ))}
      <button disabled={!prevUrl} onClick={getPrevPage}>
        Previous
      </button>
      <button disabled={!nextUrl} onClick={getNextPage}>
        Next
      </button>
    </div>
  );
};

export default CharactersList;
```
