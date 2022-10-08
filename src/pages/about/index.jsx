import Image from "next/image";

//styled
import * as S from "../../styles/pages/about";

export default function About() {
  return (
    <S.Div>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non iure
        dicta minus magni assumenda aspernatur debitis, atque explicabo, veniam
        consequatur perferendis? Esse odit molestiae reprehenderit distinctio
        nesciunt dolor tempora!
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
