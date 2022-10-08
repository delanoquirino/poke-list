import Link from "next/link";
import Image from "next/image";

//styled
import * as S from "./styles";

export default function Navbar() {
  return (
    <S.Nav>
      <S.Logo>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="pokebola"
        />
        <h1>PokeNext</h1>
      </S.Logo>

      <S.LinkItems>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
      </S.LinkItems>
    </S.Nav>
  );
}
