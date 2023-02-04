import { useState } from 'react'
import './App.css'

function App() {
  const [searchId, setSearchId] = useState("pikachu");
  const [pokemon, setPokemon] = useState({});
  const [image, setImage] = useState("");

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchId}`);
    const data = await response.json();
    setPokemon(data);
    setImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Pokemons</h1>
        <div className="grid">
          <input
            onChange={(e) => setSearchId(e.target.value)}
            type="text"
            placeholder="ingrese el nombre de pokemon"
          />
        </div>
        <div>
          <button onClick={fetchPokemon}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img src={`${image}${pokemon.id}.svg`}
              alt="avatar" />
            <h4>pokemon: {pokemon.name}</h4>
            <p>Peso : {pokemon.weight} KG</p>
          </div>
        </article>
      </div>
    </div>
  );

}

export default App