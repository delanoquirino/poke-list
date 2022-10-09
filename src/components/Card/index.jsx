import Image from "next/image";
import Link from "next/link";

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
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>

      <Link href={`/pokemon/${pokemon.id}`}>
        <a>Detalhes</a>
      </Link>
    </S.Card>
  );
};
