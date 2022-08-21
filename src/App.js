import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import logo from "./statics/logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getPokemon } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      setPokemons(pokemonRes);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col>
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

export default App;
