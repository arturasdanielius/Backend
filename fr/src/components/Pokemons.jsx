import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const Pokemons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())

      .then(
        (result) => {
          console.log(result.results);
          setData(result.results);
          //         setIsLoaded(true);
          //         setItems(result);
        },
        (error) => {
          //         setIsLoaded(true);
          //         setError(error);
        }
      );
  }, []);

  return (
    <>
      {data.map((pokemon, index) => (
        <Pokemon key={index} vardas={pokemon.name} urlas={pokemon.url} />
      ))}{" "}
    </>
  );
};

export default Pokemons;