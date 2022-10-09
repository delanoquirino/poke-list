import Image from "next/image";

//styled
import * as S from "./styles";

export const Card = ({ pokemon }) => {
  return (
    <S.Card>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </S.Card>
  );
};
