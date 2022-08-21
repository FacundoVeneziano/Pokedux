import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import logo from "./statics/logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getPokemon, getPokemonDetails } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
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
