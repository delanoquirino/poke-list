import { useEffect, useState } from "react";
import axios from "axios";

//components
import { Pokemon } from "../components/DisplayPokemon";

//styled
import * as S from "../styles/pages/home";

export default function Home() {
  const [pokemon, setPokemon] = useState([
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  ]);

  const api = axios.create({
    baseURL: "https://pokeapi.co",
  });

  //add 20 pokemon da api
  const get20Pokemon = () => {
    api
      .get("/api/v2/pokemon")
      .then((response) => {
        //console.log(response);
        setPokemon(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    /* add todos pokemon da api 
    api
      .get("/api/v2/pokemon")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results);
      })
      .catch((error) => console.log(error));*/
    get20Pokemon();
  });

  return (
    <>
      <S.Container>
        <h1>Home</h1>
        <p>
          {pokemon?.map((val, idx) => (
            //console.log("test");
            <Pokemon key={idx} thisPokemon={val} />
          ))}
        </p>
      </S.Container>
    </>
  );
}
