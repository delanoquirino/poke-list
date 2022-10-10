import Image from "next/image";

//styled
import * as S from "../../styles/pages/about";

export default function About() {
  return (
    <S.Div>
      <h1>Sobre o projeto</h1>
      <p>
        Projeto criado para fazer uma lista de pokémons, com dados sobre eles
        como nome, tipo, imagens e outras coisas. O projeto foi feito usando
        Next.js e as requições dos dados dos pokémons foram realizadas atráves
        do uso da API PokeApi.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </S.Div>
  );
}
