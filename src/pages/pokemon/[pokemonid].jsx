import React, { useEffect, useState } from "react";
import Image from "next/image";

//styled
import * as S from "../../styles/pages/pokemonid";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //parametros
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonid: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonid;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <S.Container>
      <h1>{pokemon.name}</h1>

      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>

        <S.TypeContainer>
          {pokemon.types.map((item, index) => (
            <S.TypeClass key={index}>{item.type.name}</S.TypeClass>
          ))}
        </S.TypeContainer>
      </div>
      <S.Body>
        <div>
          <h3>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h3>Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </S.Body>
    </S.Container>
  );
}
