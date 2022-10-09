import React, { useEffect, useState } from "react";
import Image from "next/image";

//styled
import * as S from "../styles/pages/home";

//components
import { Card } from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add index correto do pokemon
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <S.Container>
        <S.TiltleContainer>
          <h1>
            Poke<span>Next</span>
          </h1>
          <div>
            <Image
              src="/images/pokeball.png"
              width="50"
              height="50"
              alt="pokebola"
            />
          </div>
        </S.TiltleContainer>
        <S.PokemonContainer>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </S.PokemonContainer>
      </S.Container>
    </>
  );
}
