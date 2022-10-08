import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export const Pokemon = ({ thisPokemon }) => {
  const [onePokemon, setOnePokemon] = useState({
    name: "",
    srpites: {
      front_default: "",
    },
  });

  const getPokemon = (url) => {
    axios
      .get(url)
      .the((response) => {
        console.log(response);
        setOnePokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon(thisPokemon.url);
  });
  return (
    <div>
      <p>{onePokemon.name}</p>
      <Image
        src={onePokemon.sprites.front_default}
        width="30"
        height="30"
        alt="pokebola"
      />
    </div>
  );
};
